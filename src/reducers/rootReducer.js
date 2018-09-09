import { combineReducers } from 'redux';
import calcReducer from './calcReducer';
import {authReducer} from './authReducer';
import { reducer as formReducer } from 'redux-form';
const rootReducer = combineReducers({
    calcReducer,
    authReducer,
    form:formReducer /*important*/ 
})
  
export default rootReducer;
  