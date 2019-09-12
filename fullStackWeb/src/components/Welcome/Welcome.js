import React, { Component , Fragment} from 'react'
import Banner from '../Banner';
import Article from '../Article/Article';

export default class Welcome extends Component {
  state = {
    articles: null
  }

  //WIllMount
  async componentWillMount() {
    const allArticles = await this.props.getArticles();
    console.log(allArticles);
    this.setState({
      articles: allArticles
    });
  }
  render() {
    const { articles } = this.state;
    return (
      <Fragment>
      <Banner
        backgroundImage="url(assets/img/bg-gift.jpg)"
        title="Latest Blog Posts"
        subTitle="Read and get updated on how we progress."
      />
      <main className="main-content bg-gray">
        <div className="row">
          <div className="col-12 col-lg-6 offset-lg-3">
            {
              articles && articles.map( art => 
                <Article key={art.id} title={art.title} content={art.content} pic={art.imageUrl} category={art.category_id}
                  slug={art.slug} time={art.created_at}
                />
              )
            }
            <nav className="flexbox mt-50 mb-50">
              <a className="btn btn-white disabled">
                <i className="ti-arrow-left fs-9 mr-4" /> Newer</a>
              <a className="btn btn-white">Older
                <i className="ti-arrow-right fs-9 ml-4" />
              </a>
            </nav>
          </div>
        </div>
      </main>
    </Fragment>
    )
  }
}

