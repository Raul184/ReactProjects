import React, { Component } from 'react';
//validations
import { validateAll } from 'indicative/validator'

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
  handleSubmit = ( e ) => {
    e.preventDefault();
    
    //Validations
    const data = this.state;
    //rules to apply
    const rules = {
      name: 'required|string',
      email: 'required|email',
      password: 'required|min:6|confirmed'
    }
    //messages to display
    const messages = {
      required: 'Sorry, this field is required',
      'email.required' : "Invalid email address",
      'password.confirmed': "Passwords don't match"
    }

    validateAll( data, rules , messages)
      .then( () => { 
        console.log( 'Success' )
      })
      .catch( errors => {
        //format Errors
        const formatErrors = {};
        errors.forEach( error => formatErrors[ error.field ] = error.message );
        //Stock erros in State
        this.setState( { errors : formatErrors  });
      });
  }

  render() {
    return (
      <div className="mh-fullscreen bg-img center-vh p-20" style={{ backgroundImage: 'url(assets/img/bg-girl.jpg)' }}>
        <div className="card card-shadowed p-50 w-400 mb-0" style={{ maxWidth: '100%' }}>
          <h5 className="text-uppercase text-center">Register</h5>
          <br />
          <br />
          <form className="form-type-material" onSubmit={this.handleSubmit}>
            <div className="form-group">
              <input type="text" name="name" className="form-control" placeholder="Username" onChange={this.handleChange} />
              {this.state.errors[ 'name' ] &&
                <small className="text-danger">{this.state.errors[ 'name' ]}</small>
              }
            </div>
            <div className="form-group">
              <input type="text" name="email" className="form-control" placeholder="Email address" onChange={this.handleChange} />
              {this.state.errors[ 'email' ] &&
                <small className="text-danger">{this.state.errors[ 'email' ]}</small>
              }
            </div>
            <div className="form-group">
              <input type="password" name="password" className="form-control" placeholder="Password" onChange={this.handleChange} />
              {this.state.errors[ 'password' ] &&
                <small className="text-danger">{this.state.errors[ 'password' ]}</small>
              }
            </div>
            <div className="form-group">
              <input type="password" name="password_confirmation" className="form-control" placeholder="Password (confirm)" onChange={this.handleChange}/>
            </div>
            <br />
            <button className="btn btn-bold btn-block btn-primary" type="submit">Register</button>
          </form>
          <hr className="w-30" />
          <p className="text-center text-muted fs-13 mt-20">Already have an account?
          <a href="login.html">Sign in</a>
          </p>
        </div>    
      </div>
    )
  }
}
