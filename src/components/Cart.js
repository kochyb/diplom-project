import React from 'react';
import { withRouter } from 'react-router-dom';
import '../styles/Cart.css'

const Cart = ({beer, toggleFavourite, history}) => {
    const fav = beer.favorite;

    const handleClick = () => {
        history.push(`/beer/${beer.id}`);
    };

    return (
        <div className="card">
            <div className="card__col">
                <div onClick={handleClick}>
                    <img className="card__img" src={beer.image_url} alt="Beer" />
                    <div onClick={(event) => toggleFavourite(event, beer.id)}>
                        <i className={(fav !== undefined && fav === true ? 'fa-star fas' : 'fa-star far')} />
                    </div>
                </div>
                <div className="card__content">
                    <h2 className="card__title">{beer.name}</h2>
                    <p className="card__text">Крепость: {beer.abv}%</p>
                    <p className="card__text">Выпускается с {beer.first_brewed}</p>
                </div>
            </div>
        </div>
    )
};

export default withRouter(Cart);
