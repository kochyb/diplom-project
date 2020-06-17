import React, {useEffect, useState} from 'react';
import { connect } from 'react-redux';
import {compose} from 'redux';
import {addToFavourite, removeFromFavourite} from 'actions';
import classNames from 'classnames';

const FavouritesButton = ({beer, ...props}) => {
    const [active, setActiveData] = useState({ status: false });

    useEffect(() => {
        if (props.favourite.beerIds.find(item => item === beer.id)) {
            setActiveData({ status: true });
        } else {
            setActiveData({ status: false });
        }
    }, [props.favourite]);

    const payload = { beerId: beer.id };

    const handleClick = (event) => {
        event.preventDefault();
        setActiveData((prevState) => ({ status: !prevState.status }));
        !active.status ? props.addToFavourite(payload) : props.removeFromFavourite(payload);
    };

  return(
          <div onClick={handleClick}>
          <i className={classNames('fa-star far', {fas: active.status})} />
      </div>
  );
};

const mapStateToProps = (state) => ({
    favourite: state.favourite,
});

const mapDispatchToProps = {
    addToFavourite,
    removeFromFavourite,
};

export default compose(
    connect(
        mapStateToProps,
        mapDispatchToProps,
    ),
)(FavouritesButton);
