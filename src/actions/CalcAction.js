import {CONG,TRU} from '../constaints/action-types';
export function CongAction(x,y){
    return {
        type:CONG,
        x,
        y
    }
}
export function TruAction(x,y){
    return{
        type:TRU,
        x,
        y
    }
}