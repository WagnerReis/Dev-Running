import React, { Component } from 'react'
import ActionCreators from '../../redux/actionCreators'
import { connect } from 'react-redux'
import { Button, Segment, Form, Label } from 'semantic-ui-react'

class CreateRun extends Component {
    state = {
        friendly_name: '',
        duration: 0,
        distance: 0,
        created: new Date(),
        error: ''
    }
    componentDidMount() {
        this.props.reset()
    }
    handleChange = fieldname => event => {
        this.setState({
            [fieldname]: event.target.value
        })
    }
    handleSave = () => {
        this.props.create({
            friendly_name: this.state.friendly_name,
            duration: this.state.duration,
            distance: this.state.distance,
            created: this.state.created
        })
    }
    render() {
        return (
            <div>
                <h1>Criar corrida</h1>
                {!this.props.auth.saved &&
                    <Form>
                        <Form.Field>
                            <label>Nome:</label>
                            <input type='text' value={this.state.friendly_name} onChange={this.handleChange('friendly_name')} />
                        </Form.Field>
                        <Form.Field>
                            <label>Duração em segundos:</label>
                            <input type='number' value={this.state.duration} onChange={this.handleChange('duration')} />
                        </Form.Field>
                        <Form.Field>
                            <label>Distâcia:({this.props.auth.user.unit === 'metric' ? 'km' : 'mi'})</label>
                            <input type='number' value={this.state.distance} onChange={this.handleChange('distance')} />
                        </Form.Field>
                        <Form.Field>
                            <label>Criação:</label>
                            <input type='text' value={this.state.created} onChange={this.handleChange('created')} />
                        </Form.Field>
                        <Button onClick={this.handleSave}>Criar corrida</Button>
                    </Form>
                }
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        auth: state.auth
    }
}

const mapDispatchToProps = dispatch => {
    return {
        create: (run) => dispatch(ActionCreators.createRunRequest(run)),
        reset: () => dispatch(ActionCreators.updateProfileReset())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateRun)