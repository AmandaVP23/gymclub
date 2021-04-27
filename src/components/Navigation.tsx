import React, { FunctionComponent } from 'react';

const Header: FunctionComponent = () => {
    return (
        <nav className="nav">
            <a href="#start" className="nav__item">Início</a>
            <a href="#plans_and_prices" className="nav__item">Planos e Preços</a>
            <a href="#groups" className="nav__item">Grupos</a>
            <a href="#members" className="nav__item">Membros</a>
            <a href="#about_us" className="nav__item">Sobre nós</a>
            <a href="#classes" className="nav__item">Aulas</a>
            <a href="#training" className="nav__item">Treinamento</a>
            <a href="#contact" className="nav__item">Contacto</a>
        </nav>
    )
}

export default Header;