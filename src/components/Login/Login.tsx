import React from 'react';
import {InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../Common/forms/formsControls/input/Input";
import {required} from "utils/validators/validators";
import {loginTC} from "redux/reducers/auth-reducer";
import {connect} from "react-redux";
import {loginDataType} from "api/api";
import {Redirect} from "react-router-dom";
import {RootTypeReduxState} from "redux/redux-store";
import s from "./Login.module.css"
import {createField} from "../Common/forms/formsControls/createField/createField";

type FormDataType = {
  email: string
  password: string
  rememberMe?: boolean
  captcha?: null | string
}
type LoginPropsType = MapDispatchToPropsType & MapStateToPropsType
const Login = (props: LoginPropsType) => {

  const onSubmit = (formData: FormDataType) => {
    props.loginTC(formData)
  }
  if (props.isAuth) {
    return <Redirect to={'/profile'}/>
  }
  return (
    <div>
      <h1>Login</h1>
      <ReduxLoginForm onSubmit={onSubmit} {...props}/>
    </div>
  );
};

const LoginForm: React.FC<InjectedFormProps<FormDataType, { captcha: null | string }> & { captcha: null | string }> = (props) => {

  return (
    <form onSubmit={props.handleSubmit}>
      {createField('Email', "email", [required], Input, {type: 'text'})}
      {createField('Password', "password", [required], Input, {type: 'Password'})}
      {createField(null, "rememberMe", [], Input, {type: "checkbox"}, 'remember me')}
      {
        props.error && <div className={s.formCommonError}>{props.error}</div>
      }
      {
        props.captcha && <img src={props.captcha}/>
      }
      {
        props.captcha && createField(null, 'captcha', [required], Input, {type: 'text'})
      }
      <div>
        <button>
          login
        </button>
      </div>
    </form>
  )
}

const ReduxLoginForm = reduxForm<FormDataType, { captcha: null | string }>({form: 'login'})(LoginForm)

export type MapDispatchToPropsType = {
  loginTC: (data: loginDataType) => void
}
type MapStateToPropsType = {
  captcha: null | string
  isAuth: boolean
}
const mapStateToProps = (state: RootTypeReduxState): MapStateToPropsType => {
  return {
    isAuth: state.auth.isAuth,
    captcha: state.auth.captcha
  }
}

export const LoginContainer = connect(mapStateToProps, {loginTC})(Login)