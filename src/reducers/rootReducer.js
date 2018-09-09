import { combineReducers } from 'redux';
import calcReducer from './calcReducer';
import {authReducer} from './authReducer';
import reactstrapReducer from './reactstrapReducer';
import { reducer as formReducer } from 'redux-form';
const rootReducer = combineReducers({
    calcReducer,
    authReducer,
    form:formReducer, /*important*/
    reactstrapReducer 
})
  
export default rootReducer;
  