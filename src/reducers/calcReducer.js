import {CONG, TRU} from '../constaints/action-types';
const istate = {
    result: 0
};
export default function calcReducer(state = istate, action){
    let new_val=0;
    switch(action.type){
        case CONG:
            new_val = parseInt(action.x) + parseInt(action.y);
            return {...state,...{result:new_val}};
        case TRU:
            new_val = parseInt(action.x) - parseInt(action.y);
            return {...state,...{result:new_val}};
        default:
            return state;
    }
}