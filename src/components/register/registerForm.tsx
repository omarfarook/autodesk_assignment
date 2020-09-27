import React from 'react';
import { reduxForm, InjectedFormProps, Field } from 'redux-form';
import PropTypes from 'prop-types';
import '../../App.scss';
import { IUser } from './index';
import {
    FIRST_NAME_ERROR,
    LAST_NAME_ERROR,
    EMAIL_ERROR,
    EMAIL_CONFIRMATION_ERROR,
    TERMS_AND_CONDITION_ERROR,
    EMAIL_REGEX
} from '../../constant'
import RenderField from '../render-field'

let enteredEmail: any
const firstNameValidation = (value: any) => value ? undefined : FIRST_NAME_ERROR
const lastNameValidation = (value: any) => value ? undefined : LAST_NAME_ERROR
const email = (value: any) => {
    enteredEmail = value
    return value && !EMAIL_REGEX.test(value) ?
        EMAIL_ERROR : !value ? EMAIL_ERROR : undefined
}
const confirmEmailValidation = (value: any) => {
    return value === enteredEmail ? undefined : EMAIL_CONFIRMATION_ERROR
}

const termsAndConditionValidation = (value: any) => value ? undefined : TERMS_AND_CONDITION_ERROR

class RegisterForm extends React.Component<InjectedFormProps<IUser>> {

    render() {
        const { handleSubmit } = this.props;
        return (
            <form className="form-container" onSubmit={handleSubmit}>
                <div className="name-field">
                    <div className="form-control">
                        <Field
                            name="firstName"
                            component={RenderField}
                            type="text"
                            placeholder=" "
                            label="First Name"
                            validate={[firstNameValidation]}
                        />
                    </div>
                    <div className="form-control">
                        <Field
                            name="lastName"
                            component={RenderField}
                            type="text"
                            placeholder=" "
                            label="Last Name"
                            validate={[lastNameValidation]}
                        />
                    </div>
                </div>
                <div className="form-control">
                    <Field
                        name="email"
                        component={RenderField}
                        type="email"
                        placeholder=" "
                        label="Email"
                        validate={[email]}
                    />
                </div>
                <div className="form-control">
                    <Field
                        name="confirmEmail"
                        component={RenderField}
                        type="email"
                        placeholder=" "
                        label="Confirm email"
                        validate={[confirmEmailValidation]}
                    />
                </div>
                <div className="form-control">
                    <Field
                        name="password"
                        component={RenderField}
                        type="password"
                        placeholder=" "
                        label="Password"
                        validate={[]}
                    />
                </div>
                <div className="confirm-checkbox">
                    <span className="custom-checkbox">I agree to the <a href="#" onClick={(e) => e.preventDefault()}>Autodesk Terms of Use</a> and acknowledge the <a href="#" onClick={(e) => e.preventDefault()}>Privacy Statement</a>.</span>
                    <Field
                        name="termsAndCondition"
                        component={RenderField}
                        type="checkbox"
                        placeholder=" "
                        label=""
                        validate={[termsAndConditionValidation]}
                    />
                </div>
                <button type="submit">Create account</button>
            </form>
        )
    }
}

RenderField.prototype = {
    handleSubmit: PropTypes.func
}

export default reduxForm<IUser>({
    form: 'RegisterForm',
})(RegisterForm);