import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

// images
import headerImg from "../images/main-img.jpg";
import img from '../images/the-current.png'
import imgText from '../images/logo-text.png'

// Credential imgs
import napit from "../images/napit.png";
import candg from "../images/candg.png";
import chas from "../images/chas.jpg";
import paxton from "../images/paxton.jpg";
import safeContract from "../images/SafeContractor.webp";
import trustmark from "../images/trustmark.png";

function Home() {
  return (
    <React.Fragment>
      <header className="mb-5 position-relative">
        {/* <div className="home-header-img d-flex justify-content-center">
          <img src={img} alt="" className="w-50"/>
        </div> */}
        <div className="sm-none">
          <div className="home-header">
            <h1
              className="display-1 pb-4 text-nowrap text-center"
              style={{ color: "#fff" }}
            >
              Welcome to PP Electrical
            </h1>
            <h4
              className="display-6 pt-4 text-center"
              style={{ color: "#fff" }}
            >
              Your Trusted Mechanical and Electrical Solutions Provider
            </h4>
          </div>
          <div className="img-gradient"></div>
          <img src={headerImg} alt="team meeting" className="img-fluid" />
        </div>
        <div className="mt-5 lg-none">
          <div className="d-flex flex-column align-items-center my-3 w-100 px-5">
            <img src={imgText} alt="PP Electrical ltd" className="w-75" />
            <img src={img} alt="The current specialists" className="w-75"  />
          </div>
        </div>
      </header>
      <section className="my-4 sm-none">
        <Container fluid>
          <Row>
            <Col className="cred-img-wrapper">
              <img src={napit} alt="Napit" className="cred-img" />
            </Col>
            <Col className="cred-img-wrapper">
              <img src={candg} alt="City and Guilds" className="cred-img" />
            </Col>
            <Col className="cred-img-wrapper">
              <img src={chas} alt="CHAS" className="cred-img" />
            </Col>
            <Col className="cred-img-wrapper">
              <img src={safeContract} alt="Paxton" className="cred-img" />
            </Col>
            <Col className="cred-img-wrapper">
              <img src={paxton} alt="Trustmark" className="cred-img" />
            </Col>
            <Col className="cred-img-wrapper">
              <img
                src={trustmark}
                alt="safe contractor"
                className="cred-img"
              />
            </Col>
          </Row>
        </Container>
      </section>
      <main className="my-4">
        <Container className="mt-5 mx-auto">
          <Row className="mt-5 my-4">
            <Col xxl={6} className="mx-auto mb-5">
              <h5 className="display-4 my-4 pp-color">Our Services</h5>
              <p className="fs-4 mb-3">
                As a comprehensive mechanical and electrical solutions provider,
                we offer a wide range of services tailored to meet the unique
                requirements of your projects. Our core services include:
              </p>
              <ul className="service-list ps-3">
                <li>
                  <h6 className="pp-color my-2 fs-3">
                    Electrical Installations
                  </h6>
                  <p className="fs-5">
                    Our certified electricians are equipped to handle electrical
                    installations, repairs, and maintenance for industrial,
                    commercial, and residential properties. From power
                    distribution systems to lighting solutions, we ensure
                    seamless electrical functionality.
                  </p>
                </li>
                <li>
                  <h6 className="pp-color my-2 fs-3">Mechanical Engineering</h6>
                  <p className="fs-5">
                    Our team of mechanical engineers specializes in designing
                    and implementing efficient mechanical systems. From HVAC
                    installations to plumbing and ventilation, we ensure optimal
                    performance and energy efficiency.
                  </p>
                </li>

                <li>
                  <h6 className="pp-color my-2 fs-3">Energy Solutions</h6>
                  <p className="fs-5">
                    With a focus on sustainability, we offer energy-efficient
                    maximizing cost savings for your facility.
                  </p>
                </li>
                <li>
                  <h6 className="pp-color my-2 fs-3">EV Charger Installers</h6>
                  <p className="fs-5">
                    As the electric vehicle revolution accelerates, PP
                    Electrical is leading the charge in sustainable
                    transportation solutions. Our EV charger installation
                    service empowers businesses and individuals to embrace
                    electric mobility seamlessly. With expert site assessments,
                    customized solutions, and future-proof installations, we're
                    your trusted partner in building a cleaner and greener
                    tomorrow.
                  </p>
                </li>
              </ul>
            </Col>
          </Row>
          {/* <Row>
            <Col xxl={6} className="-5 mx-auto">
              <h5 className="display-5 my-4 pp-color">Our Projects</h5>
              <p className="fs-5 mb-3">
                PP Electrical takes immense pride in our successful projects
                that span various industries. Our portfolio includes projects in
                manufacturing plants, commercial buildings, healthcare
                facilities, educational institutions, and more. Every project we
                undertake reflects our unwavering commitment to excellence and
                attention to detail. Client satisfaction is at the heart of our
                success, and we continuously strive to exceed expectations with
                our quality workmanship, reliable solutions, and timely project
                completion.
              </p>
            </Col>
          </Row> */}
          <Row>
            <Col xxl={6} className="mb-5 mx-auto my-4">
              <h5 className="display-5 my-4 pp-color">Why Choose Us?</h5>
              <ul className="service-list ps-3">
                <li>
                  <h6 className="pp-color my-2 fs-3">Expert Team</h6>
                  <p className="fs-5">
                    Our team consists of highly skilled and certified
                    professionals who bring years of experience to every
                    project, ensuring superior craftsmanship and reliable
                    service.
                  </p>
                </li>
                <li>
                  <h6 className="pp-color my-2 fs-3">
                    Customer-Centric Approach
                  </h6>
                  <p className="fs-5">
                    We prioritize our clients' needs and preferences, working
                    closely with them to deliver customized solutions that align
                    with their specific goals.
                  </p>
                </li>
                <li>
                  <h6 className="pp-color my-2 fs-3">Quality Assurance</h6>
                  <p className="fs-5">
                    From the selection of materials to the execution of
                    projects, we maintain rigorous quality control standards to
                    ensure the highest level of excellence.
                  </p>
                </li>
                <li>
                  <h6 className="pp-color my-2 fs-3">Timely Delivery</h6>
                  <p className="fs-5">
                    We understand the value of time in the business world. Our
                    streamlined processes and project management expertise
                    ensure timely delivery without compromising on quality.
                  </p>
                </li>
                <li>
                  <h6 className="pp-color my-2 fs-3">Safety First</h6>
                  <p className="fs-5">
                    Safety is at the core of everything we do. We adhere to
                    strict safety protocols to protect our clients, our team,
                    and the communities we serve.
                  </p>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </main>
    </React.Fragment>
  );
}

export default Home;
