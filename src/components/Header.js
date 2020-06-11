import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
    return (
        <header className="App__header">
            <h1 className="App__title">Beans Love Beers</h1>
            <div className="App__nav">
                    <Link className="menu-list__link" to="/">Home</Link>
                    <Link className="menu-list__link" to="/favourites">Favourites</Link>
            </div>
        </header>
    );
};

export default Header;
