import React from 'react'
import Cart from './Cart';
import Search from "./Search";

const Catalog = ({onSearch, loading, beers, toggleFavourite}) => {
    return (
        <>
            <Search onSearch={onSearch} />
            <div className="container">

                {
                    loading
                        ? <h1>Loading ...</h1>
                        : beers.map(beer => (
                            <Cart beer={beer} key={beer.id} toggleFavourite={toggleFavourite} history={history}/>
                        ))
                }

            </div>
        </>
    )
};

export default Catalog;
