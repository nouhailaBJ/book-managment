import React from "react";
import { useParams } from "react-router";
import "../styles/Review.scss";
function ReviewBook() {
  const params = useParams();
  const bookId = params.BookId;

  return (
    <section class="section-padding gray ">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="heading-zone">
              <h1>Land Rover Freelander 2 Se</h1>
              <div class="short-history">
                <ul>
                  <li>
                    <b>June 20, 2017</b>
                  </li>
                  <li>
                    Category:{" "}
                    <b>
                      <a href="#">Land Rover </a>
                    </b>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-md-8 col-xs-12 col-sm-12">
            <div class="featured-slider-single">
              <img alt="Carspot" src="/images/4.jpg" class="img-responsive" />
              <div class="information-book">
                <div class="singlepage-detail ">
                  <div class="content-box-grid">
                    <div class="short-features">
                      <div class="heading-panel">
                        <h3 class="main-title text-left">Description</h3>
                      </div>
                      <p>
                        Bank Leased 5 Year plan 2013 Honda Civic 1.8 Vti Oriel
                        Prosmatec Automatic ( New Shape ) Attractive Silver
                        Color 1 year installments paid Lahore Reg number Well
                        Maintained Insurance + tracker etc included Options:
                        Sunroof
                      </p>
                    </div>
                    <div class="clearfix"></div>
                  </div>
                </div>
              </div>
            </div>
            <div class="alert-box-container margin-top-30">
              <div class="well p-4 text-center">
                <h3>Downoald Free this Book</h3>
                <button class="btn btn-theme mt-4 w-50 ">Review</button>
                <button class="btn btn-theme mt-4 w-50 m-2">Download</button>
              </div>
            </div>
            <div class="well p-4">
              <div class="clearfix"></div>
              <div class="blog-section">
                <div class="blog-heading">
                  <h2>Reviews (20)</h2>
                  <hr />
                </div>
                <ol class="comment-list">
                  <li class="comment">
                    <div class="comment-info">
                      <div class="author-desc">
                        <div class="author-title">
                          <strong><img class="pull-left hidden-xs img-circle" src="/images/4.jpg" alt="author" /> Curt Alex</strong>
                          <ul class="list-inline pull-right">
                            <li>
                              <a href="#">22 Feb 2017</a>
                            </li>
                          </ul>
                        </div>
                        <p>
                          You wanna be where everyboody knows Your name. And a
                          we knooow Flipper lives in a world full of wonder
                          flying there-under under the sea creepy and kooky
                        </p>
                      </div>
                    </div>
                  </li>
                </ol>
              </div>
              <div class="clearfix"></div>
              <div class="blog-section">
                <div class="blog-heading">
                  <h2>leave your Review </h2>
                  <hr />
                </div>
                <div class="commentform">
                  <form>
                    <div class="row">
                      <div class="col-md-6 col-sm-12">
                        <div class="form-group">
                          <label>
                            Name <span class="required">*</span>
                          </label>
                          <input
                            type="text"
                            class="form-control"
                            placeholder=""
                          />
                        </div>
                      </div>
                      <div class="col-md-6 col-sm-12">
                        <div class="form-group">
                          <label>
                            Email <span class="required">*</span>
                          </label>
                          <input
                            type="email"
                            class="form-control"
                            placeholder=""
                          />
                        </div>
                      </div>
                      <div class="col-md-12 col-sm-12">
                        <div class="form-group">
                          <label>
                            Comment <span class="required">*</span>
                          </label>
                          <textarea
                            class="form-control"
                            placeholder=""
                            rows="8"
                            cols="6"
                          ></textarea>
                        </div>
                      </div>
                      <div class="col-md-12 col-sm-12 mt-4 clearfix">
                        <button type="submit" class="btn btn-theme">
                          Post Your Review
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
		  <div class="col-md-4 col-xs-12 col-sm-12">
		  <div class="sidebar">
                        <div class="white-bg user-contact-info">
                           <div class="user-info-card">
                              <div class="user-photo text-center col-md-4 col-sm-3  col-xs-4">
                                 <img class="img-circle" src="/images/4.jpg" alt="" />
                              </div>
                              <div class="user-information  col-md-8 col-sm-9 col-xs-8">
                                 <span class="user-name"><a class="hover-color" href="">Sonu Monu</a></span>
                              </div>
                           </div>
                        </div>
						<div class="widget">
                           <div class="widget-heading">
                              <h4 class="panel-title"><a>Categories</a></h4>
                           </div>
                           <div class="widget-content categories">
                              <ul>
                                 <li> <a href=""> Computer and IT <span>(121)</span> </a> </li>
                                 <li> <a href=""> Animal <span>(54)</span> </a> </li>
                                 <li> <a href=""> Electronics<span>(313)</span> </a> </li>
                                 <li> <a href=""> Real Estate<span>(23)</span> </a> </li>
                                 <li> <a href=""> Mobile / Laptop <span>(142)</span> </a> </li>
                                 <li> <a href=""> Car / Bike <span>(120)</span> </a> </li>
                              </ul>
                           </div>
                        </div>
                        <div class="widget">
                           <div class="widget-heading">
                              <h4 class="panel-title"><a>Recent Books</a></h4>
                           </div>
                           <div class="widget-content recent-ads">
                              <div class="recent-ads-list">
                                 <div class="recent-ads-container">
                                    <div class="recent-ads-list-image">
                                       <a href="#" class="recent-ads-list-image-inner">
                                       <img src="images/posting/thumb-1.jpg" alt="" />
                                       </a>
                                    </div>
                                    <div class="recent-ads-list-content">
                                       <h3 class="recent-ads-list-title">
                                          <a href="#">2010 Audi A5 Auto Premium quattro MY10</a>
                                       </h3>
                                       <ul class="recent-ads-list-location">
                                          <li><a href="#">New York</a></li>
                                       </ul>
                                    </div>
                                 </div>
                              </div>
                             
                           </div>
                        </div>
                     </div>
		  </div>
        </div>
      </div>
    </section>
  );
}

export default ReviewBook;
