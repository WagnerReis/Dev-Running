import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import Header from './elements/Header'
import Runs from './Runs'
import Users from './Users'
import EditUser from './EditUser'

const Home = props => <h1>Home admin</h1>

const Admin = props => {
    if (!props.auth.isAuth) {
        return <Redirect to='/login' />
    }
    if(props.auth.user.role !== 'admin') {
        return <Redirect to='/restrito' />
    }
    return (
        <div>
            <Header />
            <Route path={`${props.match.path}/`} exact component={Home} />
            <Route path={`${props.match.path}/users/:id/edit`} component={EditUser} />
            <Route path={`${props.match.path}/users`} exact component={Users} />
            <Route path={`${props.match.path}/runs`} component={Runs} />
        </div>
    )
}

const mapStateToProps = state => {
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps)(Admin)