import {createUseStyles} from 'react-jss';

import globalStyles from 'styles/global';
import headerStyles from 'styles/components/Header';
import cartStyle from 'styles/components/Cart';
import searchStyle from 'styles/components/Search';
import favouritesButtonStyle from 'styles/components/FavouritesButton'
import logoStyle from 'styles/components/Logo';
import notFavouritesStyle from 'styles/components/NotFavourites';
import singleBeerStyle from 'styles/components/SingleBeer'

const rootStyles = {
    '@global': {
        ...globalStyles,
        ...headerStyles,
        ...cartStyle,
        ...searchStyle,
        ...favouritesButtonStyle,
        ...logoStyle,
        ...notFavouritesStyle,
        ...singleBeerStyle
    }
};

export default createUseStyles(rootStyles, {name: 'root', index: 100});
