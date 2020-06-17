import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux';

//Actions
import { searchBeers, addBeers } from 'actions';

//Styles
import useStyles from 'styles/components/Search';

const Search = ({ searchBeers, beers }) => {
    const classes = useStyles();
    const [searchText, setSearchText] = useState('');
    const [inputText, setInputText] = useState('');

    const handleChange = (event) => {
        setSearchText(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setInputText(inputText);
        searchBeers({ beers, searchText });
    };

    const handleClear = (event) => {
        event.preventDefault();
        setSearchText('');
        searchBeers({ beers, searchText: '' });
        return beers;
    };

    return (
        <form className={classes.search} onSubmit={handleSubmit}>
            <input className={classes.search__input} type="text" placeholder="Search for beer"
                   onChange={handleChange}
                   value={searchText} />
            <button className={classes.button__clear} type="submit" onClick={handleClear}>
                <i className="fas fa-times"/>
            </button>
            <button className={classes.button__search} type="submit">
                <i className="fa fa-search"/>
            </button>
        </form>
    )
};

const mapStateToProps = (state) => ({
    beers: state.beers.current,
});

const mapDispatchToProps = {
    searchBeers,
    addBeers,
};

Search.displayName = 'Search';

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Search);
