import React, {useState} from 'react'
import '../styles/Search.css'

const Search = ({onSearch}) => {
    const [searchText, setSearch] = useState('');
    const handleOnChange = (e) => {
        setSearch(e.target.value);
        onSearch(e.target.value);
    };

    return (
        <form className="search-form">
            <input className="search-form__input" id="searchInput" type="text"
                   value={searchText}
                   onChange={handleOnChange}
                   placeholder="Search for beer"/>
            <button className="search-form__button" type="submit">
                <i className="fa fa-search"/>
            </button>
        </form>
    )
};

export default Search;
