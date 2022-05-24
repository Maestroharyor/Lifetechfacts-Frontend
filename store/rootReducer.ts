import { combineReducers } from 'redux';
import theme from './theme/reducer';
import userLocation from './userLocation/reducer';

export default combineReducers({
    theme,
    userLocation,
});
