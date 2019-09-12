import React, { Component } from 'react'
import SingleArticle from './SingleArticle';

export default class SingleArticleState extends Component {
  state = {
    article: null 
  }

  async componentWillMount() {
    const slug = this.props.match.params.slug;
    const article = await this.props.getSingleArt(slug);
    
    this.setState({
      article
    });
  }
  render() { 
    return (
      <div>
        {this.state.article && <SingleArticle key={this.state.article.id} singleArt={this.state.article} />}
      </div>
    )
  }
}
