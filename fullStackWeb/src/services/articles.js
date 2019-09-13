import axios from 'axios';
import React, { Component , Fragment  } from 'react'
//config
import config from '../config/index';
//validations
import { validateAll } from 'indicative/validator'

export default class articles extends Component {

  //Get Categories for Select on Create Article page
  async getCategories() {

    const categories = JSON.parse(localStorage.getItem('categories'));
    if (categories) return categories;

    const req = axios.get(`${ config.apiUrl }/categories`);
    //cache purposes
    localStorage.setItem('categories', JSON.stringify(req.data.categories));
    return req;
  }

  async getSingleArt(slug) {
    const req = await axios.get(`${ config.apiUrl }/article/${ slug }`);
    return req.data.data;
  }

  //Create Article SECTION ====================

  //Get Articles
  async getArticles(url=`${ config.apiUrl }/articles`) {
    const req = await axios.get(url);
    return req.data.data;
  }

  //Upload Img   
  createArticle = async (data, token) => {
    if (!data.image) return Promise.reject([
      { message: "Sorry bro, an image is required"}
    ])
    //Validations
    const rules = {
      title: 'required|string',
      content: 'required',
      category: 'required'
    }
    //messages to display
    const messages = {
      required: 'Sorry, all fields are required',
    }

    try {
      await validateAll( data, rules, messages );
      const image = await this.uploadPics(data.image);
      const req = await axios.post(`${ config.apiUrl }/articles`, {
        title: data.title,
        content: data.content,
        category_id: data.category,
        imageUrl: image.secure_url
      }, //authorization header
        {
          headers: {
            Authorization: `Bearer ${ token }`
          }
        });
      
      console.log(req);
      return req.data;
    }
    catch (error)
    // prefer  promise reject erros => Elint config to jump off the rule 
    {
      //errors on res/req data
      error.response && Promise.reject(error.response.data);
      //validation errors
      return Promise.reject(error);
    }
  }

  //Upload Imgs
  uploadPics = async (img) => {
    //Global class on window Obj to create forms
    const form = new FormData();
    //appending img 
    form.append('file', img);
    //settings to use this image on cloud (upload presets)
    form.append('upload_preset', 'g5ziunzg');

    const req = await axios.post(`https://api.cloudinary.com/v1_1/bahcoder/image/upload`, form);
    console.log(req);

    return req.data;
  }
  render() {
    return (
      <Fragment>   
      </Fragment>
    )
  }
}
