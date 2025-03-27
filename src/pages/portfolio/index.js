import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { dataportfolio, meta } from "../../content_option";

export const Portfolio = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Music | {meta.title} </title>{" "}
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-4 mt-3">
          <Col lg="8">
            <h1 className="display-4 mb-4"> Music </h1>{" "}
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <div className="mb-4 po_items_ho">
          <div className="po_item spotify-item">
            <iframe 
              style={{ borderRadius: '12px' }}
              src="https://open.spotify.com/embed/artist/22CBLJY6bPOw8QHOkHHKDM?utm_source=generator"
              width="100%" 
              height="500" 
              frameBorder="0" 
              allowFullScreen="" 
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
              loading="lazy">
            </iframe>
          </div>
        </div>
      </Container>
    </HelmetProvider>
  );
};
