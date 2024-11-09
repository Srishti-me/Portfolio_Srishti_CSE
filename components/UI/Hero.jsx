import React from "react";
import SectionSubtitle from "./SectionSubtitle";
import { Container, Row, Col } from "reactstrap";

import BgAnimation from './BackgroundAnimation';
import Link from "next/link";

import classes from "../../styles/hero.module.css";

const Hero = () => {
  return (
    <section className={`${classes.hero}`}>
      <Container>
        <Row>
          {/* ========== hero content ============= */}
          <Col lg="6" md="6">
            <div className={`${classes.hero__content}`}>
              <SectionSubtitle subtitle="Hello" />
              <h2 className="mt-3 mb-3">I&apos;m Srishti Yadav</h2>
              <h5 className="mb-4">Computer Science Student</h5>
              <p>
              I have extensive experience creating impactful front-end and full-stack projects, both independently and through collaborative team efforts.
              </p>
              <div className="mt-5">
                <button className="primary__btn">
                  <Link href="https://github.com/Srishti-me">Connect on GitHub</Link>
                </button>

                <button className="secondary__btn">
                  <Link href="https://www.linkedin.com/in/srishti-yadav-223276267/">Linkedin</Link>
                </button>
              </div>
            </div>
          </Col>

          {/* ========== hero img ============= */}
          <Col lg="6" md="6">
            <div className={`${classes.hero__img} text-end`}>
            <div className="hero__img"><BgAnimation /></div>
              </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
