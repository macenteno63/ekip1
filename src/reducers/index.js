// Combine tous nos reducers pour les envoyer vers le store
import { combineReducers } from 'redux';
import userReducer from './user.reducer'
export default combineReducers({
    userReducer,
});

