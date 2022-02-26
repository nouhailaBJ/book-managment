import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Faqs from "./pages/Faqs";
import Home from "./pages/Home"
import NotFound from "./pages/NotFound";
import Connection from "./components/Log/index"
import NewBook from "./pages/NewBook";
import Books from "./pages/Books";
import Profile from "./pages/Profile";
import ReviewBook from "./pages/ReviewBook";
function App() {
  return (
    <div className="App">
      <Header />
      <div className="main-content-area clearfix">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/faqs" element={<Faqs />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/connection" element={<Connection />} />
          <Route path="/addNewBook" element={<NewBook />} />
          <Route path="/books" element={<Books />} />
          <Route path="/profile" element={<Profile editibale={false} />} />
          <Route path="/settings" element={<Profile editibale={true}  />} />
          <Route path="/book/:BookId" element={<ReviewBook />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
