import React from 'react';
import classNames from 'classnames';

import loader from '../assets/loader.svg';

//Styles
import useStyles from 'styles/components/Loader'



const Loader = ({active}) => {
    const classes = useStyles();

    return (
        <div className={classNames(classes.loader, {[classes.active]: !active})}>
            <img src={loader} alt="loader"/>
        </div>
    )
};

Loader.displayName = 'Loader';

export default Loader;

