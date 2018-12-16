import * as book_type from "../constaints/book-types";

const istate = {
    books: [],
    error: null,
};

export const bookReducer = (state = istate, { type, payload }) => {
    switch (type) {
      case book_type.BOOK_GET_LIST_SUCCESS: {
        return { ...state, error:"", books:payload };
      }
      case book_type.BOOK_GET_LIST_FAILED: {
        return { ...state, error: payload,books:[] }
      }
      default:
        return state;
    }
};