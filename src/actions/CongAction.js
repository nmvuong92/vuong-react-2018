import {CONG,TRU} from '../constaints/action-types';
export function CongAction(x,y){
    return {
        type:CONG,
        x,
        y
    }
}