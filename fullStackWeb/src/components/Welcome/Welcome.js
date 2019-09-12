import React, { Component , Fragment} from 'react'
import Banner from '../Banner';
import Article from '../Article/Article';

export default class Welcome extends Component {
  state = {
    articles: null
  }

  //WillMount
  async componentWillMount() {
    const allArticles = await this.props.getArticles();

    this.setState({
      articles: allArticles.data,
      nextUrl: allArticles.next_page_url,
      prevUrl: allArticles.prev_page_url
    });
  }

  //Pagination
  handlePagination = async (url) => {
    const allArticles = await this.props.getArticles(url);
    
    this.setState({
      articles: allArticles.data,
      nextUrl: allArticles.next_page_url,
      prevUrl: allArticles.prev_page_url
    });
  }
  render() {
    const { articles  , nextUrl , prevUrl} = this.state;
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
                <Article
                  key={art.id}
                  title={art.title}
                  content={art.content}
                  pic={art.imageUrl}
                  category={art.category_id}
                  slug={art.slug} time={art.created_at}
                />
              )
            }
            <nav className="flexbox mt-50 mb-50">
              <button className={`btn btn-white ${prevUrl ? '' : "disabled"}`} onClick={() => this.handlePagination(prevUrl)}>
                <i className="ti-arrow-left fs-9 mr-4"/>
                Older
              </button>
              <button className="btn btn-white" onClick={() => this.handlePagination(nextUrl)}>
                Newer
                <i className="ti-arrow-right fs-9 ml-4"/>
              </button>
            </nav>
          </div>
        </div>
      </main>
    </Fragment>
    )
  }
}

