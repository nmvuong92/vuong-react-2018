import { combineReducers } from 'redux';
import calcReducer from './calcReducer';
import {authReducer} from './authReducer';
import reactstrapReducer from './reactstrapReducer';
import { reducer as formReducer } from 'redux-form';
import {languageReducer} from './languageReducer';
const rootReducer = combineReducers({
    calcReducer,
    authReducer,
    form:formReducer, /*important*/
    reactstrapReducer,
    languageReducer
})
  
export default rootReducer;
  