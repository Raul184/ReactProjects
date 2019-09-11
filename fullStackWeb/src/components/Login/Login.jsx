import React, { Component , Fragment} from 'react';
import LoginForm from './LoginForm/LoginForm';

export default class Login extends Component {
  state = {
    email: '',
    password: '',
    errors: ''
  }

  //Handle Change 
  handleChange = (e) => {
    this.setState({
      [ e.target.name ] : e.target.value
    });
  }

  //Submit
  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await this.props.login(this.state);
      //local session
      localStorage.setItem( 'user', JSON.stringify( res) );
      //Awareness of Authenticated user in
      this.props.setAuthUser( res);
      //Redirect auth User
      this.props.history.push( '/' );
    }
    catch (errors) {
      this.setState({errors})
    }
  }
  render() {
    return (
      <Fragment>
        <LoginForm handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
      </Fragment>
    )
  }
}
