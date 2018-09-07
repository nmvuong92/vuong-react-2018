import {TRU} from '../constaints/action-types';
export function TruAction(x,y){
    return{
        type:TRU,
        x,
        y
    }
}