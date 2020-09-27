import React, { useReducer } from 'react';
import { Link } from 'react-router-dom'
import '../../App.scss';
import {
    UPDATE_NAME,
    VERIFY_USER,
    TOGGLE_PASSWORD,
    FORM_VALID,
    RESET,
    NEXT,
    VERIFYING,
    SIGN_IN
} from '../../constant'

export interface State {
    password: string;
    userName: string;
    isUserNameVerified: boolean;
    isFormValid: boolean;
    buttonState: string;
}

const initialState: State = {
    password: '',
    userName: '',
    isUserNameVerified: false,
    isFormValid: false,
    buttonState: NEXT
};

function reducer(state: State, action: any): State {
    switch (action.type) {
        case UPDATE_NAME:
            return { ...state, userName: action.value };
        case VERIFY_USER:
            return { ...state, buttonState: VERIFYING };
        case TOGGLE_PASSWORD:
            return { ...state, isUserNameVerified: true, buttonState: SIGN_IN };
        case FORM_VALID:
            return { ...state, isFormValid: true };
        case RESET:
            return { ...initialState };
        default:
            return state;
    }
}

const Login = () => {

    const [state, dispatch] = useReducer(reducer, initialState)

    const onSubmitEmail = (e: any) => {
        e.preventDefault()
        if (!!state.userName && !state.isUserNameVerified) {
            dispatch({ type: VERIFY_USER })
            setTimeout(() => {
                dispatch({ type: TOGGLE_PASSWORD })
            }, 1000)
        }
    }

    const setPageHeader = () => {
        if (!!state.userName && state.isUserNameVerified) {
            return (
                <div className="user-header">
                    <i onClick={() => dispatch({ type: RESET })} className="arrow left"></i>
                    <h3>Welcome</h3>
                    <span>{state.userName}</span>
                </div>)
        }
        return (
            <h4 className="page-title">Sign in</h4>
        )
    }

    return (
        <section className="login-register-container login-container">
            {setPageHeader()}
            <form className="form-container" onSubmit={onSubmitEmail}>
                {!state.isUserNameVerified && <div className="form-control">
                    <label htmlFor="User name">User Name</label>
                    <input
                        type="text"
                        placeholder="User name"
                        value={state.userName}
                        onChange={(event) => dispatch({ type: UPDATE_NAME, value: event.target.value })}
                    />
                </div>}
                {state.isUserNameVerified && <div className="form-control">
                    <label htmlFor="Password">Password</label>
                    <input
                        type="passsword"
                        placeholder="Passsword"
                    />
                </div>}
                <button type="submit">{state.buttonState}</button>
            </form>
            <span className="create-account">new to autodesk? <Link to="/register">Create account</Link></span>
        </section>
    )
}

export default Login
