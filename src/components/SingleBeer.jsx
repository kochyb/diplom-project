import React from 'react'

//Styles
import useStyles from 'styles/components/SingleBeer'
import {useSelector} from 'react-redux';

const SingleBeer = ({match}) => {
    const classes = useStyles();
    const beers = useSelector(state => state.beers.origin);
    const id = parseInt(match.params.id);
    const singleBeer = beers.find(beer => beer.id === id);

    return (
        <div className="container">
            <div className={classes.card__single}>
                <div className={classes.card__img__block}>
                    <img className={classes.card__img} src={singleBeer.image_url} alt="Beer" />
                </div>
                <div className={classes.card__col}>
                    <h2 className={classes.card__title}>{singleBeer.name}</h2>
                    <div className={classes.card__content}>
                        <p className={classes.card__text}>{singleBeer.description}</p>

                        <div className={classes.card__text__block}>
                            <div className={classes.card__text__state}>
                                <h4 className={classes.card__text__h4}>Alcohol</h4>
                                <p className={classes.card__text__p}>{singleBeer.abv}%</p>
                            </div>
                            <div className={classes.card__text__state}>
                                <h4 className={classes.card__text__h4}>Bitter</h4>
                                <p className={classes.card__text__p}>{singleBeer.ibu}</p>
                            </div>
                            <div className={classes.card__text__state}>
                                <h4 className={classes.card__text__h4}>Brewed</h4>
                                <p className={classes.card__text__p}>{singleBeer.first_brewed}</p>
                            </div>
                        </div>
                        <div className={classes.card__text__block}>{singleBeer.brewers_tips}</div>

                    </div>
                </div>
            </div>
        </div>
    )

};

export default SingleBeer;
