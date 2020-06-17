import React from 'react';
import {withRouter} from 'react-router-dom';

//Styles
import useStyles from 'styles/components/Cart'

//Components
import FavouritesButton from 'components/FavouritesButton'

const Cart = ({beer, history}) => {
    const classes = useStyles();

    const handleClick = (event) => {
        event.preventDefault();
        history.push(`/id${beer.id}`);
    };

    return (
        <div className={classes.card}>
            <div className={classes.card__col}>
                <FavouritesButton beer={beer}/>
                <div className={classes.card__title__block}>
                    <h2 onClick={handleClick} className={classes.card__title}>{beer.name}</h2>
                </div>
                <img className={classes.card__img} src={beer.image_url} alt="Beer"/>
                <div className={classes.card__text__block}>
                    <div className={classes.card__text__state}>
                        <h4 className={classes.card__text__h4}>Alcohol</h4>
                        <p className={classes.card__text__p}>{beer.abv}%</p>
                    </div>
                    <div className={classes.card__text__state}>
                        <h4 className={classes.card__text__h4}>Bitter</h4>
                        <p className={classes.card__text__p}>{beer.ibu}</p>
                    </div>
                    <div className={classes.card__text__state}>
                        <h4 className={classes.card__text__h4}>Brewed</h4>
                        <p className={classes.card__text__p}>{beer.first_brewed}</p>
                    </div>
                </div>
            </div>
        </div>
    )
};

Cart.displayName = 'Cart';

export default withRouter(Cart);
