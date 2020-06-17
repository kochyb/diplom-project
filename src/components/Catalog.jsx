import React from 'react'
import {useSelector} from 'react-redux'

//Components
import Cart from 'components/Cart';

const Catalog = () => {
    const beers = useSelector(state => state.beers.current);

    return (
            <div className="container">
                {beers.map(beer => (
                    <Cart
                        key={beer.id}
                        beer={beer}
                    />
                ))
                }
            </div>
    )
};

Catalog.displayName = 'Catalog';

export default Catalog;
