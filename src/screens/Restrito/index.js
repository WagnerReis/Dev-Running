import React from 'react'
import { connect } from 'react-redux'
import { Redirect, Link, Route } from 'react-router-dom'
import Home from './Home'
import Runs from './Runs'

import Header from './elements/Header'
import MyAccount from './MyAccount'

const Restrito = props => {
    if(props.auth.isSigningin) {
        return <p>Loading...</p>
    }
    if (!props.auth.isAuth) {
        return <Redirect to='/login' />
    }
    return (
        <div>
            <Header />
            <Route path={`${props.match.path}/`} exact component={Home} />
            <Route path={`${props.match.path}/runs`} component={Runs} />
            <Route path={`${props.match.path}/my-account`} component={MyAccount} />
        </div>
    )
}

const mapStateToProps = state => {
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps)(Restrito)