import React, { Component } from 'react'
import ActionCreators from '../../redux/actionCreators'
import { connect } from 'react-redux'
import { Button, Form, Segment } from 'semantic-ui-react'
import { Redirect } from 'react-router-dom'
import 'input-moment/dist/input-moment.css'

class EditUser extends Component {
    state = {
        name: '',
        email: '',
        role: '',
        error: ''
    }
    componentDidMount() {
        this.props.reset()
        this.props.load(this.props.match.params.id)
    }
    static getDerivedStateFromProps(newProps, prevState){
        if(newProps.users && newProps.users.user && newProps.users.user.name) {
            const user = {}
            const u =  newProps.users.user
            if(u.name !== prevState.name) {
                user.name = newProps.users.user.name
            }
            if(u.email !== prevState.email) {
                user.email = newProps.users.user.email
            }
            if(u.role !== prevState.role) {
                user.role = newProps.users.user.role
            }
            return user
        }
        return null
    }
    handleChange = fieldname => event => {
        this.setState({
            [fieldname]: event.target.value
        })
    }
    handleSave = () => {
        this.props.save({
            id: this.props.match.params.id,
            name: this.state.name,
            email: this.state.email,
            role: this.state.role
        })
    }
    render() {
        if(this.props.users.saved) {
            return <Redirect to='/admin/users' />
        }
        return (
            <div>
                <h1>Editar usuário</h1>
                { this.props.users.saved && <Segment color='green'>Corrida criada com sucesso!</Segment>}
                {!this.props.users.saved &&
                    <Form>
                        <Form.Field>
                            <label>Nome:</label>
                            <input type='text' value={this.state.name} onChange={this.handleChange('name')} />
                        </Form.Field>
                        <Form.Field>
                            <label>Email:</label>
                            <input type='email' value={this.state.email} onChange={this.handleChange('email')} />
                        </Form.Field> 
                        <Form.Field>
                            <select value={this.state.role} onChange={this.handleChange('role')}>
                                <option value='admin'>Administrador</option>
                                <option value='user'>Usuário</option>
                            </select>
                        </Form.Field>             
                        <div>
                            <Button onClick={this.handleSave}>Salvar usuário</Button>
                        </div>  
                    </Form>
                }
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        users: state.users
    }
}

const mapDispatchToProps = dispatch => {
    return {
        save: user => dispatch(ActionCreators.updateUserRequest(user)),
        reset: () => dispatch(ActionCreators.updateUserReset()),
        load: id => dispatch(ActionCreators.getUserRequest(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditUser)