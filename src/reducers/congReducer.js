import {CONG} from '../constaints/action-types';
const initial_state = {
    result:0 
}
export default function congReducer(state=initial_state,action){
    switch(action.type){
        case CONG:
            const new_val = parseInt(action.x) + parseInt(action.y);
            return {...state,...{result:new_val}};
        default:
            return state;
    }
}