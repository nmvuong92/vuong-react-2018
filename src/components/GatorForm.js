import React from 'react';
import { reduxForm, Field } from 'redux-form';
import {store} from '../store/store';

import { authorize } from '../actions/authorizeAction';
import {  
  AUTH_REQUEST,
  AUTH_SUCCESS,
  AUTH_FAILURE,
} from '../constaints/login-types'



//s
const newField = ({
  input,
  type,
  placeholder,
  id,
  meta: { touched, error },
  ...rest
}) => {
  return (
    <div>
      <input {...input} placeholder={placeholder} type={type} id={id} />
      {touched && error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

const required = value => (value ? undefined : 'Required!');
const longEnough = value =>
  value && value.length >= 3 ? undefined : 'Too short!';
const email = value =>
  value && /(.+)@(.+){2,}\.(.+){2,}/i.test(value)
    ? undefined
    : 'Invalid email!';

const GatorForm = ({ handleSubmit, reset, pristine, submitting, valid }) => {
  const state = store.getState();
  return (
    <form onSubmit={handleSubmit((val)=>{
      //submit login proccessing
      store.dispatch(authorize(val.txt_username,val.txt_password));
      
    })} autoComplete="off"> 
      <label htmlFor="txt_username">Your first name:</label>
      <Field
        name="txt_username"
        type="text"
        component={newField}
        id="txt_username"
        placeholder="Username"
        validate={[required, longEnough]}
      />
      <label htmlFor="txt_password">Password:</label>
      <Field
        name="txt_password"
        type="password"
        component={newField}
        id="txt_password"
        placeholder="Password"
        validate={[required]}
      />
      <button type="submit" disabled={!valid || pristine || submitting}>
        Submit
      </button>
      <button type="button" onClick={reset}>
        reset
      </button>
    </form>
  );
};

export default reduxForm({
  form: 'gatorForm'
})(GatorForm);