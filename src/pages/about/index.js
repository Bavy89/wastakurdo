import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import {
  dataabout,
  meta,
  worktimeline,
} from "../../content_option";

export const About = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> About | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">About me</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="12" className="about-text">
            <h3 className="color_sec py-4">{dataabout.title}</h3>
            <div className="about-content">
              <p>{dataabout.aboutme}</p>
            </div>
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="12">
            <h3 className="color_sec py-4">Latest Releases</h3>
            <div className="timeline-wrapper">
              {worktimeline.map((data, i) => {
                return (
                  <div key={i} className="timeline-item">
                    <h4 className="timeline-title">{data.jobtitle}</h4>
                    <p className="timeline-location">{data.where}</p>
                    <p className="timeline-date">{data.date}</p>
                  </div>
                );
              })}
            </div>
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};
