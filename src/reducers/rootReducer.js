import { combineReducers } from 'redux';
import congReducer from './congReducer';
import truReducer from './truReducer';
import SagaExReducer from './SagaExReducer';
const rootReducer = combineReducers({
    congReducer,
    truReducer,  
    SagaExReducer,
})
  
export default rootReducer;
  