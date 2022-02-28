import React from "react";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Faqs from "../pages/Faqs";
import Home from "../pages/Home"
import NotFound from "../pages/NotFound";
import Connection from "../components/Log/index"
import NewBook from "../pages/NewBook";
import Books from "../pages/Books";
import Profile from "../pages/Profile";
import ReviewBook from "../pages/ReviewBook";
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
        <Route path="/books" element={<Books />} />
        <Route
          path="/profile"
          element={
            <RequireAuth>
              <Profile editibale={false} />
            </RequireAuth>
          }
        />
        <Route path="/settings" element={<RequireAuth><Profile editibale={true} /></RequireAuth>} />
        <Route path="/addNewBook" element={<RequireAuth><NewBook /></RequireAuth>} />
        <Route path="/book/:BookId" element={<ReviewBook />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default index;
