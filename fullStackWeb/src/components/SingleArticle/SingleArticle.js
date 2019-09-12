import React from 'react';
import { Link } from 'react-router-dom';


const SingleArticle = (props) => {
  const { content, imageUrl, title ,category ,user} = props.singleArt;
  return (
    <div>
      {/* Header */}
      <header className="header header-inverse h-fullscreen pb-80" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/assets/img/bg-cup.jpg)` }} data-overlay={8}>
        <div className="container text-center">
          <div className="row h-full">
            <div className="col-12 col-lg-8 offset-lg-2 align-self-center">
              <p className="opacity-70">{category.name}</p>
              <br />
              <h1 className="display-4 hidden-sm-down">{title}</h1>
              <h1 className="hidden-md-up">{user.name}</h1>
              <br />
              <br />
              <p>
                <span className="opacity-70 mr-8">By</span>
                <a className="text-white" >Hossein Shams</a>
              </p>
              <p>
                <img className="rounded-circle w-40" src={`${process.env.PUBLIC_URL}/assets/img/avatar/2.jpg`} alt="..." />
              </p>
            </div>
            <div className="col-12 align-self-end text-center">
              <a className="scroll-down-1 scroll-down-inverse" data-scrollto="section-content">
                <span />
              </a>
            </div>
          </div>
        </div>
      </header>
      {/* END Header */}
      {/* Main container */}
      <main className="main-content">
        {/*
|‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒
| Blog content
|‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒
!*/}
        <div className="section" id="section-content">
          <div className="container">
            <div className="row">
              <div className="col-12 col-lg-8 offset-lg-2">
                <p className="lead">{title}</p>
                <hr className="w-100" />
                <p>{content}</p>
              </div>
            </div>
            <br />
            <p>
              <img src={imageUrl} alt="..." />
            </p>
            <br />
          </div>
        </div>
        {/*
|‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒
| Comments
|‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒
!*/}
        <div className="section bt-1 bg-grey">
          <div className="container">
            <div className="row text-center">
              <div className="text-center p-5">
                COMMENTS HERE.
              </div>
            </div>
          </div>
        </div>
      </main>
      {/* END Main container */}
    </div>
  );
};

export default SingleArticle;
