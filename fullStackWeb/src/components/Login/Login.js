import React, { Component , Fragment} from 'react';
import LoginForm from './LoginForm/LoginForm';
import PropTypes from 'prop-types';

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
      const user = await this.props.login(this.state);
      //local session
      if (user) {
        console.log('Login component' ,user);
      localStorage.setItem('user', JSON.stringify(user) );
      
      //Awareness of Authenticated user in
      this.props.setAuthUser(user);
      
      //Redirect auth User
      this.props.history.push( '/' );  
      }
    }
    catch (errors) {
      this.setState({ errors })
      console.log(errors);
    }
  }
  render() {
    return (
      <Fragment>
        <LoginForm handleChange={this.handleChange} handleSubmit={this.handleSubmit} errors={this.state.errors}/>
      </Fragment>
    )
  }
}


Login.propTypes = {
  login: PropTypes.func.isRequired,
  setAuthUser: PropTypes.func.isRequired,
  // history: PropTypes.shape({
    // push: PropTypes.func.isRequired
  // }).isRequired,
}