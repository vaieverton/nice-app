import React from 'react';
import { Link } from 'react-router-dom';    // Implementa o SPA - Vai carregar apenas o conteudo que precisa
import './styles.css';


import logo from '../../assets/logo.svg';
import { FiLogIn } from 'react-icons/fi';


const Home = () => {
    return (
        <div id="page-home">
            <div className="content">
                <header>
                    <h1>NICE - Centro de esportes e cultura</h1>
                </header>

                <main>
                    <h1>Seu centro de esportes e cultura.</h1>
                    <p>Ajudamos pessoas a encontrarem pontos de lazer e cultura de maneira acessível</p>

                    <Link to="/create-point">
                        <span> <FiLogIn/> </span>
                        <strong>Cadastre um ponto</strong>
                    </Link>
                </main>
            </div>
        </div>
    );
}

export default Home;