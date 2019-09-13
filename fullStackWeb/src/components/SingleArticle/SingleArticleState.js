import React, { Component } from 'react'
import SingleArticle from './SingleArticle';

export default class SingleArticleState extends Component {
  state = {
    article: null 
  }

  async componentWillMount() {
    const { articles, getSingleArt, match } = this.props;
    //Check if available on state
    let article = articles.find( art => art.slug === match.params.slug )
    console.log('Single Page article', article);

    if (article) {
      this.setState({ article })
    }
    else
    {
      article = await getSingleArt(match.params.slug)
      this.setState({  article })
    }  
  }
  render() { 
    return (
      <div>
        {this.state.article && <SingleArticle key={this.state.article.id} singleArt={this.state.article} />}
      </div>
    )
  }
}
