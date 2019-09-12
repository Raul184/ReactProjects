import React from 'react';
import { Link } from 'react-router-dom';

const Article = ({title , content , pic , slug , time}) => {
  return (
    <article className="mt-90">
      <header className="text-center mb-40">
        <h3>
          <Link to={`article/${slug}`}>{title}</Link>
        </h3>
        <div className="link-color-default fs-12">
          <a>News</a>,
          <time>{(new Date(time).toDateString())}</time>
        </div>
      </header>
      <a href="blog-single.html">
        <img className="rounded" src={pic} alt="..." />
      </a>
      <div className="card-block">
        <p className="text-justify">{`${content.substring(0 , 200)}`}</p>
        <p className="text-center mt-40">
          <Link className="btn btn-primary btn-round" to={`/article/${slug}`}>Read more</Link>
        </p>
      </div>
    </article>
  );
}; 

export default Article;
