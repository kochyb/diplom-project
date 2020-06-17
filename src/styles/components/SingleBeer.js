import {createUseStyles} from 'react-jss';

const singleBeerStyle = {
    card__single: {
        width: '80%',
        marginBottom: '5rem',
        padding: '1rem',
        borderRadius: '.5rem',
        backgroundColor: 'rgba(84, 84, 84, 0.7)',
        position: 'relative',
        display: 'flex'
    },
    card__col: {
        flexDirection: 'column',
        marginLeft: '1.5rem',
        width: '700px'
    },
    card__img__block: {
        width: '300px',
        height: '300px',
        display: 'flex',
        margin: 'auto',
    },
    card__img: {
        maxWidth: '100%',
        maxHeight: '100%',
        margin: 'auto',
    },
    card__title: {
        lineHeight: '1.15',
        marginBottom: '1rem',
        fontSize: '2rem',
        color: '#fff',
    },
    card__content: {
        border: '1px solid #ffffff',
        padding: '1.5rem'
    },
    card__text: {
        color: '#fff',
        paddingBottom: '1.5rem'
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
    }
};

export default createUseStyles(singleBeerStyle, {name:'SingleBeer'});
