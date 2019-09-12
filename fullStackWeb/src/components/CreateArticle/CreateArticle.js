import React, { Component , Fragment } from 'react'
import ArticleForm from './CreateArticleForm/ArticleForm';
import PropTypes from 'prop-types';

export default class CreateArticle extends Component {
  state = {
    title: '',
    image: null,
    content: '',
    category: null,
    errors: [],
    categories: []
  };

  async componentWillMount() {
    const req = await this.props.articleCategories();
    console.log(req.data.categories);
    
    this.setState({
      categories: req.data.categories
    });
  }
  //on Change 
  handleChange = (e) => {
    this.setState({
      [e.target.name] : e.target.type === 'file' ? e.target.files[0] : e.target.value
    });
  }

  //on Submit
  handleSubmit = async (e) => {
    e.preventDefault();

    try {
      //Article Created
      await this.props.createArticle(this.state, this.props.token);  
      //Redirect
      this.props.history.push('/'); 
    }
    catch (error) {
      this.setState({
        errors: error
      });
    }
    
  }
  render() {
    const { categories , errors } = this.state;
    return (
      <Fragment>
        <ArticleForm
          onChang={this.handleChange}
          categories={categories}
          handleSubmit={this.handleSubmit} 
          errors={errors}
        />
      </Fragment>
    )
  }
}

CreateArticle.propTypes = {
  articleCategories: PropTypes.func.isRequired,
  createArticle: PropTypes.func.isRequired,
  token: PropTypes.string.isRequired,
}