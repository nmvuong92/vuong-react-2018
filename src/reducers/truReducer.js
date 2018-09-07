import { TRU } from "../constaints/action-types";

const initial_state = {
    result:0 
}
export default function truReducer(state=initial_state,action){
    switch(action.type){
        case TRU:
        const new_val = parseInt(action.x) - parseInt(action.y);
        return {...state,...{result:new_val}};
        default:
            return state;
    }
}