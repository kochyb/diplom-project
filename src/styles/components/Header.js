import {createUseStyles} from 'react-jss';

const headerStyle = {
    header: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '1rem',
        textAlign: 'center',
        background: "url('./src/assets/beer_fon_3.jpg') top center repeat-x"
    },
    header__nav: {
        display: 'flex'
    },

    header__nav__link: {
        display: 'block',
        textDecoration: 'none',
        fontSize: '1.5rem',
        color: '#000',
        fontWeight: 700,
        margin: '0 1rem',
        '&:hover': {
            textDecoration: 'underline'
        }
    },
};

export default createUseStyles(headerStyle, {name:'Header'});
