import React from 'react';
import {useSelector} from 'react-redux';

//Components
import Cart from 'components/Cart';
import NotFavourites from 'components/NotFavourites';

const Favourites = () => {
    const beers = useSelector(state => state.beers.origin);
    const favourite =  useSelector(state => state.favourite);
    const { beerIds } = favourite;
    const favouriteBeers = beers.filter(beer => beerIds.includes(beer.id));


    return (
        <div className="container">
            { favouriteBeers.length
                ? favouriteBeers.map((beer) => (
                    <Cart
                        key={beer.id}
                        beer={beer}
                    />
                ))
                : <NotFavourites/> }
        </div>
    );
};

Favourites.displayName = 'Favourites';

export default Favourites;
