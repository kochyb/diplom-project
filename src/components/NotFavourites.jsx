import React from 'react';

//Styles
import useStyles from 'styles/components/NotFavourites'

const NotFavourites = () => {
    const classes = useStyles();

    return (
        <>
            <p className={classes.info}>Ты еще не выбрал пиво? А ну возврощайтя обратно и выбирай!</p>
        </>
    );
};

export default NotFavourites;

