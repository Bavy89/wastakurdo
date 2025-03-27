import React, { useState, useEffect } from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { introdata, meta } from "../../content_option";
import { Link } from "react-router-dom";

export const Home = () => {
  const [currentImage, setCurrentImage] = useState(0);
  
  const images = [
    "https://images.pexels.com/photos/3784566/pexels-photo-3784566.jpeg?auto=compress&cs=tinysrgb&w=1920", // Dark recording studio
    "https://images.unsplash.com/photo-1627987469780-fc77d8c9a586?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Kurdish landscape
    "https://images.unsplash.com/photo-1614331623322-b326820cd270?q=80&w=3369&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // New studio image
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <HelmetProvider>
      <section id="home" className="home">
        <Helmet>
          <meta charSet="utf-8" />
          <title> {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <div className="intro_sec">
          <div className="h_bg-image">
            {images.map((img, index) => (
              <div
                key={index}
                className={`carousel-image ${index === currentImage ? 'active' : ''}`}
                style={{ backgroundImage: `url(${img})` }}
              ></div>
            ))}
          </div>
          <div className="text">
            <div className="align-self-center">
              <div className="intro mx-auto">
                <h2 className="mb-1x">{introdata.title}</h2>
                <p className="mb-1x">{introdata.description}</p>
                <div className="intro_btn-action pb-5">
                  <Link to="/music" className="text_2">
                    <div id="button_p" className="ac_btn btn">
                      My Music
                      <div className="ring one"></div>
                      <div className="ring two"></div>
                      <div className="ring three"></div>
                    </div>
                  </Link>
                  <Link to="/contact">
                    <div id="button_h" className="ac_btn btn">
                      Contact Me
                      <div className="ring one"></div>
                      <div className="ring two"></div>
                      <div className="ring three"></div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </HelmetProvider>
  );
};
