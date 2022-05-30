import { combineReducers } from 'redux';
import theme from './theme/reducer';
import selectedCourse from './selectedCourse/reducer';
import userLocation from './userLocation/reducer';

export default combineReducers({
    theme,
    selectedCourse,
    userLocation,
});
