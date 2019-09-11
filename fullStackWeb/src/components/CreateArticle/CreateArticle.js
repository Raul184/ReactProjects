import React, { Component , Fragment } from 'react'
import ArticleForm from './CreateArticleForm/CreateArticleForm';


export default class CreateArticle extends Component {
  state = {
    title: '',
    image: null,
    content: '',
    category: null,
    errors: {},
    categories: []
  };

  async componentWillMount() {
    const req = await this.props.articleService();
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

  render() {
    const { categories } = this.state;
    return (
      <Fragment>
        <ArticleForm
          onChang={this.handleChange}
          categories={categories}
        />
      </Fragment>
    )
  }
}
