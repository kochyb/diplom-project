import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'

import Catalog from './Catalog';
import Header from "./Header";
import Footer from "./Footer";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beers: [],
      filterData: [],
      loading: true
    }
  }

  componentDidMount() {
    console.log("Component mounted");
    // fetch('https://api.punkapi.com/v2/beers?page=1&per_page=80')
    fetch('http://localhost:3000/api/catalog')
        .then(response => response.json())
        .then(beers => {
          console.log(beers);
          this.setState({beers, filterData: beers, loading: false});
        })
        .catch(err => {
          console.log(err);
          this.setState({loading: false});
        });
  }

  toggleFavourite = (event, id) => {
    event.stopPropagation();
    this.setState(prevState => {
      let beer = prevState.beers.find(beer => beer.id === id);
      if(beer.favorite === undefined) {
        beer.favorite = true;
      } else {
        beer.favorite = !beer.favorite;
      }
      return({
        beers: prevState.beers
      })
    })
  };

  renderFavouriteBeers = (props) => {
    const favBeers = this.state.beers.filter(beer => beer.favorite === true);
    return (
        <Catalog loading={false} beers={favBeers} toggleFavourite={this.toggleFavourite} {...props}  />
    );
  };

  handleSearch = (searchText) => {
    this.setState(prevState => {
      if(searchText === '') {
        return ({
          filterData: prevState.beers
        })
      } else {
        const filtered = prevState.beers.filter(beer =>
            beer.name.toLowerCase().includes(searchText.toLowerCase()));
        return ({
          filterData: filtered
        })
      }
    });
  };

  render() {
    const {loading, filterData} = this.state;
    return (
        <div className="App">
          <Header />
          <Switch>
            <Route path="/" exact>
              <Catalog loading={loading} beers={filterData} toggleFavourite={this.toggleFavourite} onSearch={this.handleSearch}/>
            </Route>
            <Route path="/favourites" component={this.renderFavouriteBeers} />
          </Switch>
          <Footer />
        </div>
    );
  }
}

export default App;
