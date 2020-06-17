import React from 'react';
import {Route, Switch} from 'react-router-dom';

//Components
import Catalog from 'components/Catalog';
import Favourites from 'components/Favourites';
import SingleBeer from 'components/SingleBeer';
import Search from 'components/Search';

const Main = () => {

    return (
        <>
            <Search/>
            <Switch>
                <Route path="/" exact component={Catalog}/>
                <Route path="/favourites" component={Favourites}/>
                <Route path="/id:id" component={SingleBeer}/>
            </Switch>
        </>
    );
};

Main.displayName = 'Main';

export default Main;
