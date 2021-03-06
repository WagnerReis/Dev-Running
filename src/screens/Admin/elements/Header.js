import React from 'react'
import { connect } from 'react-redux'
import ActionCreators from '../../../redux/actionCreators'

import { Link } from 'react-router-dom'

import { Menu, Dropdown, Image } from 'semantic-ui-react'

import logo from '../../../assets/logo.png'

const Header = props => {
    return (
        <Menu>
            <Menu.Item as={Link} to='/'><Image src={logo} size='small' /></Menu.Item>
            <Menu.Item as={Link} to='/admin'>Home</Menu.Item>
            <Menu.Item as={Link} to='/admin/users'>Usuários</Menu.Item>
            <Menu.Item as={Link} to='/admin/runs'>Corridas</Menu.Item>
            <Menu.Menu position='right'>
                <Dropdown item text={props.auth.user.name}>
                    <Dropdown.Menu>
                        <Dropdown.Item as={Link} to='/restrito'>Modo: usuário</Dropdown.Item>
                        <Dropdown.Item>Minha Conta</Dropdown.Item>
                        <Dropdown.Item>Alterar senha</Dropdown.Item>
                        <Dropdown.Item onClick={props.logout}>Sair</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Menu.Menu>
        </Menu>
    )
}

const mapStateToProps = state => {
    return {
        auth: state.auth
    }
}
const mapDispatchToProps = dispatch => {
    return {
        signin: (email, passwd) => ActionCreators.signinRequest(email, passwd),
        logout: () => dispatch(ActionCreators.destroyAuthRequest())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)