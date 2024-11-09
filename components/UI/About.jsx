import React from "react";
import { Container, Row, Col } from "reactstrap";
import SectionSubtitle from "./SectionSubtitle";
import classes from "../../styles/about.module.css";

const About = () => {
  return (
    <section id="about">
      <Container>
        <Row>
          <Col lg="10" className={`${classes.about__content}`}>
            <SectionSubtitle subtitle="About me" />
            <h3 className="mt-4">I&apos;m open</h3>
            <h3 className="mb-4">to new opportunities and projects.</h3>
            <p>
              As a B.Tech student in Computer Science with hands-on experience in frontend and full-stack development, I bring both technical skills and a deep understanding of how to balance user needs with business objectives. Through various project-based experiences, like building a hostel management system, a mentor connect portal and many more, I’ve developed a practical approach to solving real-world challenges. My involvement in competitive coding, open-source contributions, and technical chapters has equipped me to adapt quickly to diverse team dynamics and foster productive collaboration. I’m always eager to listen to stakeholders, understand their requirements, and craft solutions that are efficient, sustainable, and user-friendly.
            </p>

            <div className="d-flex align-items-center gap-5">
              <div>
                <h6 className="d-flex align-items-center gap-2 mt-3 fw-normal">
                  <span className={`${classes.about__icon}`}>
                    <i className="ri-checkbox-circle-line"></i>
                  </span>
                  Problem Solving
                </h6>

                <h6 className="d-flex align-items-center gap-2 mt-3 fw-normal">
                  <span className={`${classes.about__icon}`}>
                    <i className="ri-checkbox-circle-line"></i>
                  </span>
                  Fast Learner
                </h6>
              </div>

              <div>
                <h6 className="d-flex align-items-center gap-2 mt-3 fw-normal">
                  <span className={`${classes.about__icon}`}>
                    <i className="ri-checkbox-circle-line"></i>
                  </span>
                  Creative Ideas
                </h6>

                <h6 className="d-flex align-items-center gap-2 mt-3 fw-normal">
                  <span className={`${classes.about__icon}`}>
                    <i className="ri-checkbox-circle-line"></i>
                  </span>
                  Good Communication
                </h6>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
