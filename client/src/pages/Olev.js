import React, { Fragment } from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function Olev() {
  return (
    <Fragment>
      <header className="my-5 py-5 my-auto d-flex flex-row about-header">
        <div className="shape sm-none ms-3"></div>
        <div className="px-5 header-text me-5">
          <h1 className="my-5 pp-color display-4">
            OLEV Grants <br /> - Making EV Charging Affordable
          </h1>
          <p className="fs-5">
            At PP Electrical, we believe in making electric vehicle charging
            infrastructure accessible and affordable. As part of our commitment
            to sustainability, we offer assistance with OLEV grants to help
            businesses and individuals reduce the costs of EV charger
            installations.
          </p>
        </div>
      </header>
      <main>
        <Container>
          <Row style={{ margin: "5em 0" }}>
            <h2 className="fs-3 pp-color">What are OLEV Grants?</h2>
            <p className="fs-5">
              OLEV grants are government incentives designed to encourage the
              widespread adoption of electric vehicles. These grants provide
              financial support to businesses, homeowners, and local
              authorities, facilitating the installation of EV charging
              infrastructure across the UK. You can see the Goverments lastest
              grant scheme{" "}
              <a
                style={{
                  textDecorationColor: "#d5192c",
                  textDecoration: "underline",
                }}
                href="https://www.gov.uk/government/collections/government-grants-for-low-emission-vehicles#electric-vehicle-homecharge-scheme"
              >
                here
              </a>
            </p>
          </Row>
          <Row xs={1} md={2} style={{ margin: "5em 0" }}>
            <Col>
              <h3 className="pp-color fs-3">Support For Businesses</h3>
              <p className="fs-5">
                For businesses, OLEV grants present a unique opportunity to
                enhance their corporate social responsibility initiatives and
                reduce their carbon footprint. By installing EV charging points
                with the help of OLEV grants, businesses can create a more
                sustainable and eco-friendly environment for employees,
                customers, and visitors.
              </p>
            </Col>
            <Col>
              <h3 className="pp-color fs-3">Support For Homeowners</h3>
              <p className="fs-5">
                Homeowners can also benefit from OLEV grants by installing
                domestic EV charging points. These grants contribute to lowering
                the costs associated with EV charger installations, making it
                more convenient for homeowners to transition to electric
                vehicles.
              </p>
            </Col>
          </Row>
          <Row className="mb-5">
            <Col>
              <h3 className="pp-color">Our OLEV Grant Services Include</h3>
              <ul className="olev-services-list">
                <li className="fs-4">
                  Expert Consultation
                  <p className="fs-5">
                    Our knowledgeable team provides expert consultation,
                    ensuring you understand the eligibility criteria and
                    benefits of OLEV grants.
                  </p>
                </li>
                <li className="fs-4">
                  Grant Application Assistance
                  <p className="fs-5">
                    We assist with the grant application process, ensuring all
                    necessary paperwork is completed accurately and promptly.
                  </p>
                </li>
                <li className="fs-4">
                  Quality Installations
                  <p className="fs-5">
                    Our skilled technicians ensure that EV charging points are
                    installed to the highest standards, complying with OLEV
                    guidelines and safety regulations.
                  </p>
                </li>
                <li className="fs-4">
                  Cost-Effectiveness
                  <p className="fs-5">
                    By availing OLEV grants, you can significantly reduce the
                    upfront costs of EV charger installations, making the
                    transition to electric mobility more affordable.
                  </p>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </main>
    </Fragment>
  );
}

export default Olev;
