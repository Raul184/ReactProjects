import React from 'react';

import Banner from '../../Banner';
import PropTypes from 'prop-types';


const ArticleForm = ({onChang ,categories , handleSubmit , errors}) => {
  return (
    <div>
      <Banner 
        backgroundImage={`url(${process.env.PUBLIC_URL}/assets/img/bg-laptop.jpg)`}
        title="Write an article"
      />
      {/* END Header */}
      {/* Main container */}
      <main className="main-content">
        <section className="section">
          <div className="container">
            <div className="row">
              <div className="col-12 col-lg-12">
                {errors[ 0 ] ?
                  <li className="list-group-item text-danger">{errors[ 0 ][ "message" ]}</li>    
                  :
                  null
                }
                <form className="p-30 bg-gray rounded" method="POST" data-form="mailer" onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="form-group col-md-12 my-5">
                      <input type="file" className="form-control" onChange={onChang} name="image" />
                    </div>
                    <div className="form-group col-12 col-md-6">
                      <input className="form-control form-control-lg" type="text" onChange={onChang} name="title" placeholder="Title" />
                    </div>
                    <div className="form-group col-12 col-md-6">
                      <select name="category" onChange={onChang} className="form-control form-control-lg">
                        <option value>Select category</option>
                        {
                          categories.map(item =>
                            <option key={item.id} value={item.id}>{item.name}</option>)
                        } 
                      </select>
                    </div>
                  </div>
                  <div className="form-group">
                    <textarea
                      className="form-control form-control-lg"
                      rows={4} placeholder="Content"
                      name="content" onChange={onChang}
                      defaultValue={""}
                    />
                  </div>
                  <div className="text-center">
                    <button className="btn btn-lg btn-primary" type="submit">Create Article</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      {/* END Main container */}
    </div>
  );
};

ArticleForm.propTypes = {
  onChang: PropTypes.func.isRequired,
}


export default ArticleForm;
