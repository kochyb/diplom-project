import React from 'react';
import { Link } from 'react-router-dom';

//Styles
import useStyles from 'styles/components/Header'

//Components
import Logo from 'components/Logo';

const Header = () => {
    const classes = useStyles();

    return (
        <header className={classes.header}>
            <Logo/>
            <div className={classes.header__nav}>
                <Link className={classes.header__nav__link} to="/">Home</Link>
                <Link className={classes.header__nav__link} to="/favourites">Favourites</Link>
            </div>
        </header>
    );
};

export default Header;
