import axios from 'axios';
import React, { Component , Fragment  } from 'react'
//config
import config from '../config/index';


export default class articles extends Component {
  async getCategories() {
    const req = axios.get(`${ config.apiUrl }/categories`);

    return req;
  }
  render() {
    return (
      <Fragment>
        
      </Fragment>
    )
  }
}
