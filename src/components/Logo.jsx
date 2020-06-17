import React from 'react';

//Styles
import useStyles from 'styles/components/Logo'

const Logo = () => {
    const classes = useStyles();

        return (
            <h1 className={classes.logo}>Beans Love Beers</h1>
        );
};

export default Logo;
