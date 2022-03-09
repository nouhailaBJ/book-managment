import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router";
import "../styles/Review.scss";
import axios from "axios";
import ReviewDetails from "../components/Review/ReviewDetails";
import ReviewMenu from "../components/Review/ReviewMenu";
import { ToastContainer } from "react-bootstrap";

function Review() {
  const params = useParams();
  const restaurantId = params.id;
  const navigate = useNavigate();
  const [restaurant, setRestaurant] = useState();
  const [loading, setLoading] = useState(false);
  useEffect(async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_API_URL}/restaurants/${restaurantId}`
      );
      setRestaurant(res.data);
      setLoading(true);
    } catch (err) {
      navigate("/404");
    }
  }, []);
  return (
    <section className="section-padding gray ">
      <div className="container">
        {loading && (
          <div className="row">
            <ReviewDetails restaurant={restaurant} />
            <ReviewMenu restaurant={restaurant}/>
            <ToastContainer />
          </div>
        )}
      </div>
    </section>
  );
}

export default Review;
