import {  
    LOGIN_REQUESTING,
    LOGIN_SUCCESS,
    LOGIN_ERROR,
} from '../constaints/login-types'
const iState = {  
    requesting: false,
    successful: false,
    messages: [],
    errors: [],
}
function loginReducer (state = iState, action) {  
    switch (action.type) {
      // Set the requesting flag and append a message to be shown
      case LOGIN_REQUESTING:
        return {
          requesting: true,
          successful: false,
          messages: [{ body: 'Logging in...', time: new Date() }],
          errors: [],
        }
  
      // Successful?  Reset the login state.
      case LOGIN_SUCCESS:
        return {
          errors: [],
          messages: [],
          requesting: false,
          successful: true,
        }
  
      // Append the error returned from our api
      // set the success and requesting flags to false
      case LOGIN_ERROR:
        return {
          errors: state.errors.concat([{
            body: action.error.toString(),
            time: new Date(),
          }]),
          messages: [],
          requesting: false,
          successful: false,
        }
  
      default:
        return state
    }
  }
  
  export default loginReducer  