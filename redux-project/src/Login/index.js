import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { loginRequest } from './Redux/actions';

export class index extends Component {
  static propTypes = {
    prop: PropTypes
  }
  state= {
    mail:'',
    password: '',
  }

  handleChange = (evt) => this.setState({ [evt.target.name]: evt.target.value });
  render() {
    if(this.props.loginStatus) return <div>LOGUEADO!!!</div>
    return (
      <div>    
        {this.props.error ? <div style={{ color: 'red'}}>{this.props.error}</div> : null }
        LOGIN:<br/>
        Usuario: <input value={this.state.mail} name="mail" onChange={this.handleChange} /><br/>
        Password: <input type="password" name="password" value={this.state.password} onChange={this.handleChange}/><br/>
        <button onClick={() => this.props.loginRequest(this.state)}>LOGIN</button>
      </div>
    )
  }
}

const mapStateToProps = (store) => ({
  error: store.login.error,
  loginStatus: store.login.loginStatus
})

const mapDispatchToProps = {
  loginRequest
}
/*
const mapDispatchToProps2 = dispatch => ({
    loginRequest: state => dispatch(loginRequest(state)),
  })
*/
export default connect(mapStateToProps, mapDispatchToProps)(index)

