import { combineReducers } from 'redux';
import SagaExReducer from './SagaExReducer';
import calcReducer from './calcReducer';
import {authReducer} from './authReducer';
import { reducer as formReducer } from 'redux-form';
const rootReducer = combineReducers({
    SagaExReducer,
    calcReducer,
    authReducer,
    form:formReducer /*important*/ 
})
  
export default rootReducer;
  