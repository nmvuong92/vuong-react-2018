import React from 'react';
import { reduxForm, Field } from 'redux-form';
import {store} from '../store/store';

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
    <form onSubmit={handleSubmit((val)=>console.log(val))}>
      <label htmlFor="first-name">Your first name:</label>
      <Field
        name="firstName"
        type="text"
        component={newField}
        id="first-name"
        placeholder="Benedict"
        validate={[required, longEnough]}
      />
      <label htmlFor="email">Email:</label>
      <Field
        name="email"
        type="email"
        component={newField}
        id="email"
        placeholder="benedict@alligator.io"
        validate={[required, email]}
      />
      <button type="submit" disabled={!valid || pristine || submitting}>
        Submit
      </button>
      <button type="button" onClick={reset}>
        reset
      </button>
      <h1>{state.congReducer.result}</h1>
    </form>
  );
};

export default reduxForm({
  form: 'gatorForm'
})(GatorForm);