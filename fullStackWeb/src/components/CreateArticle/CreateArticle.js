import React, { Component , Fragment } from 'react'
import ArticleForm from './CreateArticleForm/index';


export default class CreateArticle extends Component {
  state = {
    title: '',
    image: null,
    content: '',
    channel: null,
    errors: {}
  };

  //on Change 
  handleChange = (e) => {

    this.setState({
      [e.target.name] : e.target.type === 'file' ? e.target.files[0] : e.target.value
    });
  }

  render() {
    return (
      <Fragment>
        <ArticleForm onChang={this.handleChange} />
      </Fragment>
    )
  }
}
