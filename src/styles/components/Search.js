import {createUseStyles} from 'react-jss';
import {searchProperties} from 'styles/mixins'

const searchStyle = {
    search: {
        textAlign: 'center',
        margin: '1rem 0 2rem',
    },
    search__input: {
        ...searchProperties,
        width: '20rem',
        borderTopLeftRadius: '.25rem',
        borderBottomLeftRadius: '.25rem',
        padding: '.5rem',
    },
    button__search: {
        ...searchProperties,
        padding: '.5rem 1rem',
        cursor: 'pointer',
        color: '#fff',
        backgroundColor: '#000',
        borderTopRightRadius: '.25rem',
        borderBottomRightRadius: '.25rem',
    },
    button__clear: {
        ...searchProperties,
        height: '31px',
        background: '#fff',
        paddingRight: '1rem',
        cursor: 'pointer',
        '&:hover': {
            color: '#daa520',
        }
    }
};

export default createUseStyles(searchStyle, {name:'Search'});

