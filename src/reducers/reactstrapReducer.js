import {REACTSTRAP_NAVBAR_TOGGLE} from '../constaints/action-types';
const istate = {
    navbar_isopen: false
};
export default function reactstrapReducer(state = istate, action){
    switch(action.type){
        case REACTSTRAP_NAVBAR_TOGGLE:
            return {...state,...{navbar_isopen:!state.navbar_isopen}};
        default:
            return state;
    }
}