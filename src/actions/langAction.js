import { LANG_SET } from '../constaints/action-types';
export const langAction = (lang) => ({
    type: LANG_SET,
    payload: lang 
});