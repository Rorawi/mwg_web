import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";
import Services from "./components/Services";
import Projects from "./components/Projects";
import ContactUs from "./components/ContactUs";
import Career from "./components/Career";
import BlogLinkComponent from "./components/BlogSection";
// import TeamSection from "./components/Team";
import MainBlog from "./components/MainBlog";
// import SingleBlogPost from "./components/SingleBlogPost";
import ScrollToTop from "./components/ScrollToTop";
import Testimonial from "./components/Testimonial";
import Events from "./components/Events";
import OverView from "./components/OverView";


const Router = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
<ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} >
            <Route path="history" element={<Testimonial/>}/>
          </Route>
            <Route path="/overview" element={<OverView/>} />
          <Route path="/event" element={<Events/>} />
          <Route path="/services" element={<Services/>} />
          <Route path="/blogcomp" element={<BlogLinkComponent/>} />
          <Route path="/project" element={<Projects/>} />
          <Route path="/contact" element={<ContactUs/>} />
          <Route path="/career" element={<Career/>} />
          <Route path="/blog" element={<MainBlog/>}/>
          {/* <Route path="/singleblog" element={<SingleBlogPost/>} /> */}
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
};

export default Router;
