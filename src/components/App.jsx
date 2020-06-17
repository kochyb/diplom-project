import React, {useEffect} from 'react';
import { hot } from 'react-hot-loader/root';
import {compose} from 'redux';
import {connect} from 'react-redux';

//Actions
import { getData } from 'actions';

//Styles
import useRootStyles from 'styles';

//Components
import Loader from 'components/Loader';
import Header from 'components/Header';
import Main from 'components/Main';
import Footer from 'components/Footer';

const App = ({load, ...props}) => {
    useRootStyles();

    useEffect( () => {
        props.getData();
    }, []);

        return (
            <>
                <Loader active={load} />
                <Header />
                <Main />
                <Footer />
            </>
        );
};

App.displayName = 'App';

const mapStateToProps = state => ({
    load: state.load,
});

const mapDispatchToProps = { getData };

export default compose(
    hot,
    connect(mapStateToProps, mapDispatchToProps),
)(App);
