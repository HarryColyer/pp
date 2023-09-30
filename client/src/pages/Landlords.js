import React, { Fragment } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Landlords() {
  return (
    <Fragment>
      <header className="my-5 py-5 my-auto d-flex flex-row about-header">
        <div className="shape sm-none ms-3"></div>
        <div className="px-5 header-text me-5">
          <h1 className="my-5 pp-color display-4">Landlord Services</h1>
          <p className="fs-5">
            Our mechanical and electrical company offers a wide range of
            services tailored specifically for landlords to ensure that your
            properties are well-maintained and compliant with all safety
            regulations. Whether you own a single property or manage a portfolio
            of rental properties, we are here to support you with our
            comprehensive services.
          </p>
        </div>
      </header>
      <main style={{ marginTop: "5em" }}>
        <Container>
          <Row xs={1} md={2} className="mb-5">
            <Col>
              <h4 className="pp-color">
                Electrical Services for Occupied & Void Properties
              </h4>
              <p>
                Our experienced electricians are proficient in handling both
                occupied and void properties. From minor electrical repairs to
                complete rewiring projects, we ensure that your properties are
                safe and compliant with electrical regulations.
              </p>
            </Col>
            <Col>
              <h4 className="pp-color">
                Landlords Periodic Electrical Testing (EICR)
              </h4>
              <p>
                Stay compliant with the law and ensure the safety of your
                tenants with our Electrical Installation Condition Reports
                (EICR). Our qualified electricians conduct thorough inspections
                and provide detailed reports, giving you peace of mind.
              </p>
            </Col>
          </Row>
          <Row xs={1} md={2} className="mb-5">
            <Col>
              <h4 className="pp-color">Decent Homes Electrical Works</h4>
              <p>
                Enhance the comfort and livability of your properties with our
                decent homes electrical works. We offer modern solutions to
                improve the electrical infrastructure and make your properties
                more attractive to tenants.
              </p>
            </Col>
            <Col>
              <h4 className="pp-color">Communal Lighting</h4>
              <p>
                Create a well-lit and secure environment for your tenants with
                our communal lighting solutions. We design and install efficient
                lighting systems for shared spaces in your rental properties.
              </p>
            </Col>
          </Row>
          <Row xs={1} md={2} className="mb-5">
            <Col>
              <h4 className="pp-color">Programmed Electrical Works</h4>
              <p>
                Our team can work with you to create a tailored electrical
                maintenance schedule for your properties. Regular maintenance
                ensures the longevity of electrical systems and reduces the risk
                of unexpected breakdowns.
              </p>
            </Col>
            <Col>
              <h4 className="pp-color">Remedial Electrical Works</h4>
              <p>
                If your properties require corrective electrical works based on
                inspection reports, we can efficiently address any issues and
                bring them up to the required safety standards.
              </p>
            </Col>
          </Row>
          <Row xs={1} md={2} className="mb-5">
            <Col>
              <h4 className="pp-color">Electrical Maintenance</h4>
              <p>
                Ensure that your properties remain in top condition with our
                ongoing electrical maintenance services. From minor repairs to
                system checks, we'll keep your properties in excellent shape.
              </p>
            </Col>
            <Col>
              <h4 className="pp-color">EV Charge Point Installations</h4>
              <p>
                Stay ahead of the curve with our EV charge point installation
                services. Offer your tenants the convenience of charging their
                electric vehicles on-site, making your properties more
                desirable.
              </p>
            </Col>
          </Row>
          <Row xs={1} md={2} className="mb-5">
            <Col>
              <h4 className="pp-color">Consumer Unit Upgrades</h4>
              <p>
                Modern consumer units enhance safety and protect against
                electrical hazards. Upgrade your properties' consumer units to
                meet the latest safety standards.
              </p>
            </Col>
            <Col>
              <h4 className="pp-color">CCTV Installations</h4>
              <p>
                Increase security and peace of mind for your tenants with our
                CCTV installation services. Monitor your properties and deter
                potential intruders effectively.
              </p>
            </Col>
          </Row>
          <Row xs={1} md={2} className="mb-5">
            <Col>
              <h4 className="pp-color">PAT Testing</h4>
              <p>
                Stay compliant with Portable Appliance Testing (PAT)
                regulations. Our experts inspect and certify your portable
                appliances for safe use.
              </p>
            </Col>
            <Col>
              <h4 className="pp-color">Installation of Smoke/Heat Detectors</h4>
              <p>
                Ensure the safety of your properties with the installation of
                smoke and heat detectors, protecting your tenants from potential
                fire hazards.
              </p>
            </Col>
          </Row>
        </Container>
      </main>
    </Fragment>
  );
}

export default Landlords;
