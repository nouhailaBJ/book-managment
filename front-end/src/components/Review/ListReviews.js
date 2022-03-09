import React, { useState } from "react";
import { dateParser } from "../Utils";
import ReactStars from "react-rating-stars-component";
import { render } from "react-dom";
import axios from "axios"
import { toast } from 'react-toastify';
import { useSelector } from "react-redux";

function ListReviews({reviews, id}) {
  const [stars, setStars] = useState(0)
  const [comment, setComment] = useState("")
  const [name, setName] = useState("")
  const ratingChanged = (newRating) => {
    setStars(newRating)
  };
  const submitReview = (e) => {
    const data = {
      name: name,
      comment: comment,
      stars: stars
    }
    axios.post(`${process.env.REACT_APP_API_URL}/restaurants/review/${id}`, data).then((res) => {
      toast.success("Thank you for sharing you review");
      setName("")
      setComment("")
      setStars(0)
    }).catch((err) => toast.error("Ops there is some errors here, Please try Another Time"))
  }
  return (
    <>
      <div className="well p-4 mt-4">
        <div className="clearfix"></div>
        <div className="blog-section">
          <div className="blog-heading">
            <h2>Reviews ({reviews.length})</h2>
            <hr />
          </div>
          <ol className="comment-list">
            {reviews.length > 0 && reviews.map((review) => (
              <li className="comment">
                <div className="comment-info">
                  <div className="author-desc">
                    <div className="author-title">
                      <strong>
                        Nouhaila Bj
                      </strong>
                      <ul className="list-inline pull-right">
                        <li>
                          <a href="#">{dateParser(review.createdAt)}</a>
                        </li>
                      </ul>
                    </div>
                    <p>
                      {review.comment}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
        <div className="clearfix"></div>
        <div className="blog-section">
          <div className="commentform">
            <div className="row">
              <div className="col-md-12 col-sm-12">
              <div className="form-group">
                  <label>
                    Give it A Rating <span className="required">*</span>
                  </label>
                  <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={24}
                    activeColor="#ffd700"
                  />
                </div>
                <div className="form-group">
                  <label>
                    Your Name <span className="required">*</span>
                  </label>
                  <input
                    className="form-control"
                    placeholder="Your Name"
                    name="name"
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>
                    Comment <span className="required">*</span>
                  </label>
                  <textarea
                    className="form-control"
                    placeholder="Comment"
                    rows="8"
                    cols="6"
                    name="comment"
                    onChange={(e) => setComment(e.target.value)}
                  ></textarea>
                </div>
              </div>
              <div className="col-md-12 col-sm-12 mt-4 clearfix">
                <button onClick={submitReview} className="btn btn-theme">
                  Post Your Review
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ListReviews;
