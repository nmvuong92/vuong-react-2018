import { LANG_SET } from '../constaints/action-types';
const istate = {
    lang: "en"
};
export  const languageReducer = (state = istate,  { type, payload } ) => {
    switch(type){
        case LANG_SET:
            //save for initial website load
            localStorage.setItem("lang",payload);
            //change state
            return {...state, lang: payload}
        default:
            return state;
    }
}