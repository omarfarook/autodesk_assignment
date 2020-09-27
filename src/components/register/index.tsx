import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import { reset } from 'redux-form';
import '../../App.scss';
import RegisterForm from './registerForm'
import { toasterToggler } from '../toaster/action'
import { ACC_CREATION_SUCCESS_MSG } from '../../constant'

export interface IUser {
    firstName: string;
    lastName: string;
    email: string;
    confirmEmail: string;
    password: string;
    termsAndCondition: boolean
}

const Register = (props: any) => {

    const onSubmitRegistration = (user: IUser, dispatch: any) => {
        dispatch(reset('RegisterForm'))
        props.enableToaster(ACC_CREATION_SUCCESS_MSG)
        props.history.push('/')
        
    };
    return (
        <section className="login-register-container register-container">
            <h4 className="page-title">Create account</h4>
            <RegisterForm onSubmit={onSubmitRegistration} />
            <span className="create-account">Already have an account? <Link to="/login">Sign in</Link></span>
        </section>
    )
}

Register.prototype = {
    enableToaster: PropTypes.func
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        enableToaster: (msg: string) => dispatch(toasterToggler(msg))
    }
  }
export default connect(null, mapDispatchToProps)(Register)