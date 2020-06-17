import {createUseStyles} from 'react-jss';

const cartStyle = {
    card: {
        marginBottom: '1.5rem',
        padding: '1rem',
        borderRadius: '.5rem',
        backgroundColor: 'rgba(84, 84, 84, 0.7)',
        position: 'relative',
        /*width: 32%;*/
        width: '20rem',
        display: 'flex'
    },
    card__col: {
        flex: 'auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    card__img: {
        maxHeight: '250px',
        marginBottom: '1rem'
    },
    card__title__block: {
        height: '4rem',
        width: '16rem'
    },
    card__title: {
        lineHeight: '1.15',
        color: '#fff',
        textAlign: 'center',
        cursor: 'pointer'
    },
    card__text__block: {
        color: '#fff',
        padding: '1.5rem 0 1.5rem',
        borderTop: '1px solid rgba(255,255,255, .5)',
        display: 'flex',
    },
    card__text__state: {
        marginRight: '1rem'
    },
    card__text__h4: {
        fontSize: '1.1rem'
    },
    card__text__p: {
        textAlign: 'center'
    },
};

export default createUseStyles(cartStyle, {name:'Cart'});
