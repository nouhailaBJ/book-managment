import React from "react";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Faqs from "../pages/Faqs";
import Home from "../pages/Home"
import NotFound from "../pages/NotFound";
import Connection from "../components/Log/index"
import NewRestaurant from "../pages/NewRestaurant";
import Restaurants from "../pages/Restaurants";
import Profile from "../pages/Profile";
import Review from "../pages/Review";
import { Route, Routes } from "react-router-dom";
import RequireAuth from "../middleware/RequireAuth";

function index() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/faqs" element={<Faqs />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/connection" element={<Connection />} />
        <Route path="/restaurants" element={<Restaurants />} />
        <Route
          path="/profile"
          element={
            <RequireAuth>
              <Profile editibale={false} />
            </RequireAuth>
          }
        />
        <Route path="/settings" element={<RequireAuth><Profile editibale={true} /></RequireAuth>} />
        <Route path="/addNewRestaurant" element={<RequireAuth><NewRestaurant /></RequireAuth>} />
        <Route path="/restaurant/:id" element={<Review />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default index;
