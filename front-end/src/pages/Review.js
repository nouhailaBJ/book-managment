import React from "react";
import { useParams } from "react-router";
import Stars from "../components/Restaurants/Stars";
import "../styles/Review.scss";
function ReviewBook() {
  const params = useParams();
  const bookId = params.BookId;

  return (
    <section className="section-padding gray ">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="heading-zone">
              <h1>Lavie Gastrobar</h1>
              <div className="short-history">
                <ul>
                  <li>
                    <b>June 20, 2017</b>
                  </li>

                  <li>
                    City:{" "}
                    <b>
                      <a href="#">Land Rover </a>
                    </b>
                  </li>
                  <li>
                    <Stars />
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-8 col-xs-12 col-sm-12">
            <div className="featured-slider-single">
              <img alt="Carspot" src="/images/restaurant/1.jpg" className="img-responsive" />
              <div className="information-book">
                <div className="singlepage-detail ">
                  <div className="content-box-grid">
                    <div className="short-features">
                      <div className="heading-panel">
                        <h3 className="main-title text-left">Details</h3>
                      </div>
                      <p>
                        Bank Leased 5 Year plan 2013 Honda Civic 1.8 Vti Oriel
                        Prosmatec Automatic ( New Shape ) Attractive Silver
                        Color 1 year installments paid Lahore Reg number Well
                        Maintained Insurance + tracker etc included Options:
                        Sunroof
                      </p>
                      <div className="heading-panel">
                        <h3 className="main-title text-left">PRICE RANGE</h3>
                      </div>
                      <p> MAD 128 - MAD 638</p>
                      <div className="heading-panel">
                        <h3 className="main-title text-left">SPECIAL DIETS</h3>
                      </div>
                      <p> Vegetarian Friendly, Vegan Options, Gluten Free Options</p>
                    </div>
                    <div className="clearfix"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="alert-box-container margin-top-30">
              <div className="well p-4 text-center">
                <h3>You can Book fro here</h3>
                <button className="btn btn-theme mt-4 w-50 ">Book</button>
              </div>
            </div>
            <div className="well p-4">
              <div className="clearfix"></div>
              <div className="blog-section">
                <div className="blog-heading">
                  <h2>Reviews (20)</h2>
                  <hr />
                </div>
                <ol className="comment-list">
                  <li className="comment">
                    <div className="comment-info">
                      <div className="author-desc">
                        <div className="author-title">
                          <strong><img className="pull-left hidden-xs img-circle" src="/images/4.jpg" alt="author" /> Curt Alex</strong>
                          <ul className="list-inline pull-right">
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
              <div className="clearfix"></div>
              <div className="blog-section">
                <div className="blog-heading">
                  <h2>leave your Review </h2>
                  <hr />
                </div>
                <div className="commentform">
                    <div className="row">
                      <div className="col-md-12 col-sm-12">
                        <div className="form-group">
                          <label>
                            Comment <span className="required">*</span>
                          </label>
                          <textarea
                            className="form-control"
                            placeholder=""
                            rows="8"
                            cols="6"
                          ></textarea>
                        </div>
                      </div>
                      <div className="col-md-12 col-sm-12 mt-4 clearfix">
                        <button type="submit" className="btn btn-theme">
                          Post Your Review
                        </button>
                      </div>
                    </div>
                </div>
              </div>
            </div>
          </div>
		  <div className="col-md-4 col-xs-12 col-sm-12">
		  <div className="sidebar">
                        <div className="white-bg user-contact-info">
                        <div class="ad-listing-meta">
                              <ul>
                                 <li><i class="fa fa-map-marker"></i> : <span class="color">Calle Geltoki 14, Spain</span></li>
                                 <li><i class="fa fa-phone"></i>  : <span class="color">+2343243243</span></li>
                                 <li><i class="fa fa-envelope"></i> : <span class="color">email@email.com</span></li>
                                 <li><i class="fa fa-clock-o"></i> : <span class="color">1:00 PM - 11:45 PM</span></li>
                              </ul>
                           </div>
                        </div>
						<div className="widget">
                           <div className="widget-heading">
                              <h4 className="panel-title"><a>Cities</a></h4>
                           </div>
                           <div className="widget-content categories">
                              <ul>
                                 <li> <a href=""> Fes<span>(121)</span> </a> </li>
                                 <li> <a href=""> Animal <span>(54)</span> </a> </li>
                                 <li> <a href=""> Electronics<span>(313)</span> </a> </li>
                                 <li> <a href=""> Real<span>(23)</span> </a> </li>
                                 <li> <a href=""> Car / Bike <span>(120)</span> </a> </li>
                              </ul>
                           </div>
                        </div>
                        <div className="widget">
                           <div className="widget-heading">
                              <h4 className="panel-title"><a>Best nearby</a></h4>
                           </div>
                           <div className="widget-content recent-ads">
                              <div className="recent-ads-list">
                                 <div className="recent-ads-container">
                                    <div className="recent-ads-list-image">
                                       <a href="#" className="recent-ads-list-image-inner">
                                       <img src="images/posting/thumb-1.jpg" alt="" />
                                       </a>
                                    </div>
                                    <div className="recent-ads-list-content">
                                       <h3 className="recent-ads-list-title">
                                          <a href="#">Restaurante Txartel Txoko</a>
                                       </h3>
                                       <ul className="recent-ads-list-location">
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
