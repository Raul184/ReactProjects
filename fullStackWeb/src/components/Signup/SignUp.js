import React , {Component} from 'react';
//FOrm
import Form from "./SignUpForm";

export default class index extends Component {
    state = {
      name: '',
      email: '',
      password: '',
      password_confirmation: '',
      errors: {}
    }  
  
  //ON Change 
  handleChange = ( e ) => {
    this.setState( {
      [ e.target.name ]: e.target.value
    } );
  }

  //On Submit
  handleSubmit = async ( e ) => {
    e.preventDefault();
    const data = this.state; 

    try {
      //Imported Service
      const response = await this.props.registerUser( data );
      //local session
      localStorage.setItem( 'user', JSON.stringify( response) );
      //Awareness of Authenticated user in
      this.props.setAuthUser( response);
      //Redirect auth User
      this.props.history.push( '/' );
    }
    catch ( errors ) {
      this.setState( {
        errors
      })
    }
  }

  render() {
    return (
      <Form
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        errors={this.state.errors}
      />
    )
  }
}
