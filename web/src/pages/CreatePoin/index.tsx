import React, { useEffect, useState, ChangeEvent, FormEvent } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiCheckCircle, FiArrowLeft } from 'react-icons/fi';
import { Map, Marker, TileLayer } from 'react-leaflet'
import { LeafletMouseEvent } from 'leaflet';
import axios from 'axios';

import api from '../../services/api'    //Conexão com o Backend
import Dropzone from '../../components/Dropzone';

import './styles.css';

interface Item {
  id: number;
  title: string;
  image_url: string;
}

interface IBGEUFResponse {
  //id: string;
  sigla: string;
}

interface IBGECityResponse {
  nome: string;
}

const CreatePoint = () => {
  // Carregar as classes de itens coletáveis (carrega apenas uma vez)
  const [items, setItems] = useState<Item[]>([]);
  useEffect(() => {
    api.get('categorias').then(response => {
      setItems(response.data);
    });
  }, []);

  //Dropzone
  const [selectedFile, setSelectedFile] = useState<File>();

  // Carregar a lista de Estados (carrega apenas uma vez)
  //const [ufs, setUfs] = useState<IBGEUFResponse[]>([]); //pegar uf e ID
  const [initialPosition, setinitialPosition] = useState<[number, number]>([-1000, -350]); // Posição Geográfica atual do Navegador
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(position => {
      const { latitude, longitude } = position.coords;
      setinitialPosition([latitude, longitude]);
    })
  })

  const history = useHistory();       // Pegar o histórico de janela/aba

  // Pegar a posição que o usuário clicou
  const [selectedPosition, setSelectedPosition] = useState<[number, number]>([0, 0]); //Array
  function handleMapClick(event: LeafletMouseEvent) {
    setSelectedPosition([
      event.latlng.lat,
      event.latlng.lng
    ])
  }

  //Pegar os dados digitados pelo usuário
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: '',
    endereco: '',
    description: '',
  })
  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value })  // recebe os valores antigos, depois subistitui apenas o campo modificado
  }

  // Pegar as categorias selecionadas
  const [selectedItems, setSelectedItems] = useState<number[]>([]); //Array
  function handleSelectItem(id: number) {
    const alreadySelected = selectedItems.findIndex(item => item === id);
    if (alreadySelected >= 0) {
      const filteredItems = selectedItems.filter(item => item !== id);
      setSelectedItems(filteredItems);
    } else {
      setSelectedItems([...selectedItems, id]);
    }
  }


  // Submeter os dados para o Backend
  const [register, setRegister] = useState(false);
  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    const { name, email, whatsapp, description, endereco } = formData;
    const [latitude, longitude] = selectedPosition;
    const items = selectedItems;

    const data = new FormData();
    data.append('name', name);
    data.append('email', email);
    data.append('whatsapp', whatsapp);
    data.append('endereco', endereco);
    data.append('description', description);
    data.append('latitude', String(latitude));
    data.append('longitude', String(longitude));
    data.append('items', items.join(','));
    if (selectedFile) {
      data.append('image', selectedFile);
    }

    console.log(endereco)
    console.log(description)
    await api.post('points', data);
    setRegister(true);

    setTimeout(back, 2000)
  }

  function back() {
    history.push('/');  // Direciona o usuário para a HOME
  }

  return (
    <div id="page-create-point">
      {register ?
        <div className="finish-him">
          <h1><FiCheckCircle /></h1>
          <p>Ponto de cultura Criado</p>
          <p>Obrigado por Contribuir &#128521;</p>
        </div>
        : false}

      <header>
        <h1>NICE</h1>

        <Link to="/">
          <FiArrowLeft />  Voltar para Home
        </Link>
      </header>

      <form onSubmit={handleSubmit}>
        <h1>Cadastro de ponto</h1>

        <fieldset>
          <legend>
            <h2>Dados</h2>
          </legend>

          <div className="field">
            <label htmlFor="">Nome da entidade</label>
            <input
              type="text"
              name="name"
              id="name"
              onChange={handleInputChange}
            />
          </div>

          <div className="field">
            <label htmlFor="">Descrição</label>
            <input
              type="text"
              name="description"
              id="description"
              onChange={handleInputChange}
            />
          </div>

          <div className="field-group">
            <div className="field">
              <label htmlFor="email">E-mail</label>
              <input
                type="email"
                name="email"
                id="email"
                onChange={handleInputChange}
              />
            </div>

            <div className="field">
              <label htmlFor="whatsapp">Whatsapp</label>
              <input
                type="text"
                name="whatsapp"
                id="whatsapp"
                onChange={handleInputChange}
              />
            </div>


          </div>
          <div className="field">
            <label htmlFor="">Endereço escrito</label>
            <input
              type="text"
              name="endereco"
              id="endereco"
              onChange={handleInputChange}
            />
          </div>
        </fieldset>

        <fieldset>
          <legend>
            <h2>Imagem do local</h2>
            <span>Dê upload da imagem</span>
          </legend>
          <Dropzone onFileUploaded={setSelectedFile} />

        </fieldset>


        <fieldset>
          <legend>
            <h2>Endereço</h2>
            <span>Selecione o endereço no mapa</span>
          </legend>

          <Map center={initialPosition} zoom={15} onClick={handleMapClick}>
            <TileLayer
              attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={selectedPosition}></Marker>
          </Map>

        </fieldset>

        <fieldset>
          <legend>
            <h2>Categorias</h2>
            <span>Selecione um ou mais itens abaixo</span>
          </legend>

          <ul className="items-grid">
            {items.map(item => (
              <li key={item.id} onClick={() => handleSelectItem(item.id)}
                className={selectedItems.includes(item.id) ? 'selected' : ''}
              >
                <img src={item.image_url} alt={item.title} />
                <span>{item.title}</span>
              </li>
            ))}

          </ul>
        </fieldset>

        <button type="submit">
          Cadastrar ponto de cultura
        </button>

      </form>
    </div>
  );
}

export default CreatePoint;