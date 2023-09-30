import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

// images
import indEleImg from "../images/elect.jpg";
import duct from "../images/duct.jpg";
import evCharImg from "../images/ev-charging.webp";
import renewableEle from "../images/Renewable Electrical.jpg";

function Services() {
  return (
    <div>
      <header className="my-5 py-5 my-auto d-flex flex-row about-header">
        <div className="shape sm-none ms-3"></div>
        <div className="px-5 header-text me-5">
          <h1 className="my-5 pp-color display-4">Our Services</h1>
          <p className="fs-5">
            At PP Electrical, we take pride in being your trusted mechanical and
            electrical solutions provider. Our thorough range of services spans
            across industrial, commercial, and domestic sectors, making us your
            one-stop destination for all your project needs. With a team of
            highly skilled professionals and cutting-edge technology, we deliver
            innovative and reliable solutions that meet the highest industry
            standards.
          </p>
        </div>
      </header>
      <main className="my-5 py-5">
        <section>
          <Container xxl="true">
            <Row lg={2} >
              <Col md={8} xl={6} className="mx-auto mb-5">
                {/* Card 1 */}
                <Card style={{ width: "100%" }}>
                  <Card.Img
                    variant="top"
                    src={indEleImg}
                    style={{ height: "420px" }}
                  />
                  <Card.Body>
                    <Card.Title className="text-center my-3 pp-color">
                      Electrical Installation
                    </Card.Title>
                    <Card.Text>
                      Our team of certified electricians ensures safe and
                      efficient electrical installations for industrial,
                      commercial, and residential projects. Our electrical
                      services include:
                    </Card.Text>
                  </Card.Body>
                  <ListGroup className="list-group-flush">
                    <ListGroup.Item>
                      Power Distribution Systems: Customized power distribution
                      to optimize electricity flow and usage.
                    </ListGroup.Item>
                    <ListGroup.Item>
                      Lighting Solutions: Expert lighting design and
                      installation for enhanced productivity and energy
                      efficiency.
                    </ListGroup.Item>
                    <ListGroup.Item>
                      Energy Management Systems: Implementing smart solutions to
                      reduce energy consumption and costs.
                    </ListGroup.Item>
                    <ListGroup.Item>
                      Emergency Backup Systems: Reliable backup systems to
                      ensure uninterrupted power supply.
                    </ListGroup.Item>
                  </ListGroup>
                </Card>
              </Col>
              <Col md={8} xl={6} className="mx-auto mb-5">
                {/* Card 2 */}
                <Card style={{ width: "100%" }}>
                  <Card.Img
                    variant="top"
                    src={duct}
                    style={{ height: "420px" }}
                  />
                  <Card.Body>
                    <Card.Title className="text-center my-3 pp-color">
                      Mechanical Installation
                    </Card.Title>
                    <Card.Text>
                      Our team of mechanical engineers specializes in designing
                      and implementing efficient mechanical systems for various
                      applications. From heating and cooling solutions to
                      plumbing and ventilation, we provide:
                    </Card.Text>
                  </Card.Body>
                  <ListGroup className="list-group-flush">
                    <ListGroup.Item>
                      HVAC Systems: Customized heating, ventilation, and air
                      conditioning installations for optimal indoor comfort.
                    </ListGroup.Item>
                    <ListGroup.Item>
                      Plumbing Solutions: Expert plumbing design and
                      installation for efficient water distribution and waste
                      management.
                    </ListGroup.Item>
                    <ListGroup.Item>
                      Ventilation Systems: Ensuring proper air circulation and
                      ventilation for healthier indoor environments.
                    </ListGroup.Item>
                    <ListGroup.Item>
                      Fire Protection Systems: Comprehensive fire safety
                      solutions to protect lives and properties.
                    </ListGroup.Item>
                  </ListGroup>
                </Card>
              </Col>
              </Row>
              <Row lg={2} >
              <Col md={8} xl={6} className="mx-auto mb-5">
                <Card style={{ width: "100%" }}>
                  <Card.Img
                    variant="top"
                    src={renewableEle}
                    style={{ height: "420px" }}
                  />
                  <Card.Body>
                    <Card.Title className="text-center my-3 pp-color">
                      Energy Solutions
                    </Card.Title>
                    <Card.Text>
                      We are committed to sustainability and offer
                      energy-efficient solutions to help businesses reduce their
                      carbon footprint and lower energy costs. Our energy
                      services include:
                    </Card.Text>
                  </Card.Body>
                  <ListGroup className="list-group-flush">
                    <ListGroup.Item>
                      Energy Audits: In-depth assessments to identify
                      opportunities for energy optimization.
                    </ListGroup.Item>
                    <ListGroup.Item>
                      Renewable Energy Integration: Harnessing clean power
                      through solar panels and other renewable sources.
                    </ListGroup.Item>
                    <ListGroup.Item>
                      Energy-Efficient Lighting: Upgrading to LED lighting
                      systems for reduced energy consumption.
                    </ListGroup.Item>
                    <ListGroup.Item>
                      Building Energy Management Systems (BEMS): Implementing
                      smart systems for centralized control and efficiency.
                    </ListGroup.Item>
                  </ListGroup>
                </Card>
              </Col>
              <Col md={8} xl={6} className="mx-auto mb-5">
                <Card style={{ width: "100%" }}>
                  <Card.Img
                    variant="top"
                    src={evCharImg}
                    style={{ height: "420px" }}
                  />
                  <Card.Body>
                    <Card.Title className="text-center my-3 pp-color">
                      EV Charger Installation
                    </Card.Title>
                    <Card.Text>
                      As electric vehicles gain popularity, we offer EV charger
                      installation services to support the transition to
                      sustainable transportation. Our EV charger solutions
                      include:
                    </Card.Text>
                  </Card.Body>
                  <ListGroup className="list-group-flush">
                    <ListGroup.Item>
                      Comprehensive Site Assessment: Determining optimal
                      locations for EV charging stations.
                    </ListGroup.Item>
                    <ListGroup.Item>
                      Customized Charging Solutions: Tailoring installations to
                      fit individual client needs.
                    </ListGroup.Item>
                    <ListGroup.Item>
                      Fast and Reliable Charging: Efficient charging stations
                      for quick charging times.
                    </ListGroup.Item>
                    <ListGroup.Item>
                      Safety Compliance: Adhering to all safety regulations for
                      secure charging infrastructure.
                    </ListGroup.Item>
                  </ListGroup>
                </Card>
              </Col>
            </Row>
          </Container>
        </section>
      </main>
    </div>
  );
}

export default Services;
