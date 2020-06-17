import {createUseStyles} from 'react-jss';

const loaderStyle = {
    loader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'fixed',
    width: '100%',
    height: '100vh',
    background: 'rgba(0, 0, 0, 0.5)',
    zIndex: '1',
},
    active: {
        display: 'none',
    }
};

export default createUseStyles(loaderStyle, {name:'Loader'});

