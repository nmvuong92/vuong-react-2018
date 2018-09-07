import { combineReducers } from 'redux';
import congReducer from './congReducer';
import truReducer from './truReducer';
import SagaExReducer from './SagaExReducer';
import calcReducer from './calcReducer';
import loginReducer from './loginReducer';
import { reducer as formReducer } from 'redux-form';
const rootReducer = combineReducers({
    congReducer,
    truReducer,  
    SagaExReducer,
    calcReducer,
    loginReducer,
    form:formReducer /*important*/ 
})
  
export default rootReducer;
  