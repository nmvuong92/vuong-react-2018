import React from 'react';
import { reduxForm, Field } from 'redux-form';
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

const LoginForm = ({ handleSubmit, reset, pristine, submitting, valid, error }) => {
  return (
    <form onSubmit={handleSubmit} autoComplete="off"> 
      <h2>{error}</h2>
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
      <div className="btn-group">
        <button className="btn btn-success"  type="submit" disabled={!valid || pristine || submitting}>
          Submit
        </button>
        <button className="btn btn-default" type="button" onClick={reset}>
          reset
        </button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: 'loginForm'
})(LoginForm);