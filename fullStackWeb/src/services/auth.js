//validations
import { validateAll } from 'indicative/validator'
//api
import axios from 'axios';
//url
import config from '../config';


export default class AuthService {
  async registerUser( data ) {
    //Validations
    // const data = this.state;
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

    try {
      await validateAll( data, rules, messages );
      // VALIDATE ? 
      //Success ? Req to API
      const response = await axios.post( `${ config.apiUrl }/auth/register`, {
        name: data.name,
        email: data.email,
        password: data.password
      } );

      return response.data.data
    }
    catch ( errors ) {
      const formatErrors = {};
      
      // 1 SERVER ERROR
      if ( errors.status === 422 )
      { 
        //Server's only response with 'email' errors
        formatErrors[ 'email' ] = errors.response.data[ 'email' ][ 0 ];
        
        return Promise.reject( formatErrors );
      }
      // 2 VALIDATE ERROR
      errors.forEach( error => formatErrors[ error.field ] = error.message );
      //Stock erros in State
      
      return Promise.reject( formatErrors );
    }
  }
}