import React from 'react';
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import Login from './components/login'
import Toaster from './components/toaster/toast'
import Register from './components/register'

const AppRouter = (props: any) => {
    return (
        <>
            <Router>{props.isToastOn}
                <Switch>
                    <Redirect from='/' exact to='/login' />
                    <Route path='/login' component={Login} />
                    <Route path='/register' component={Register} />
                    <Route component={Login} />
                </Switch>
            </Router>
    {props.isToastOn && <Toaster><span className="toast-msg">{props.toastMsg}</span></Toaster>}
        </>
    )
}

AppRouter.prototype = {
    isToastOn: PropTypes.bool,
    toastMsg: PropTypes.string
}

const mapStateToProps = (state: any) => {
    return {
        isToastOn: state.ToastReducer.isToastOn,
        toastMsg: state.ToastReducer.toastMsg
    }
}

export default connect(mapStateToProps)(AppRouter)