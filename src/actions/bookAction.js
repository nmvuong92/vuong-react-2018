import * as book_const from './../constaints/book-types';
import * as api_const from './../constaints/api-types';
export const getListBook = ()=> ({
    type: book_const.BOOK_GET_LIST,
    payload: {}
});