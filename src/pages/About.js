import React from "react";

function About() {
  return (
    <main>
      <header className="my-5 py-5 my-auto d-flex flex-row about-header">
        <div className="shape sm-none ms-3"></div>
        <div className="px-5 header-text me-5">
          <h1 className="my-5 pp-color display-4">About Us And Our Mission.</h1>
          <p className="fs-5">
            With 40 years combined experience in the industry, we have established ourselves as a
            trusted name in delivering top-tier services to our clients in the
            UK and beyond. We are dedicated to providing innovative, reliable,
            and sustainable solutions that propel our clients' projects towards
            success. Through our commitment to quality workmanship, safety, and
            customer satisfaction, we strive to exceed expectations and foster
            long-lasting partnerships with our clients.
          </p>
        </div>
      </header>
      <main>
        <div className="about-container">
          <div className="panel">
            <h3 className="mb-5 pp-color">Team of Experts</h3>
            <p className="fs-5">
              Our success is driven by our exceptional team of skilled
              professionals. Each member of our team brings a wealth of
              knowledge and experience to the table, ensuring that every project
              is met with precision and expertise. From our certified
              electricians to our accomplished mechanical engineers, we take
              pride in our diverse skill set that enables us to tackle projects
              of any complexity with confidence.
            </p>
          </div>
          <div className="panel">
            <h3 className="mb-5 pp-color">Client-Centric Approach</h3>
            <p className="fs-5">
              At PP Electrical, our clients are at the heart of everything we
              do. We believe in building strong relationships based on trust,
              open communication, and a deep understanding of our clients'
              unique requirements. We listen attentively to your needs and
              collaborate closely with you to develop tailored solutions that
              align with your objectives and budget.
            </p>
          </div>
          <div className="panel">
            <h3 className="mb-5 pp-color">Commitment to Safety</h3>
            <p className="fs-5">
              Safety is our topmost priority. We maintain rigorous safety
              protocols throughout every project, ensuring the well-being of our
              team, clients, and the communities we serve. Our commitment to
              safety extends beyond compliance; it reflects our genuine concern
              for the people impacted by our work.
            </p>
          </div>
          <div className="panel">
            <h4 className="mb-5 pp-color">Sustainability and Environmental Responsibility</h4>
            <p className="fs-5">
              Our success is driven by our exceptional team of skilled
              professionals. Each member of our team brings a wealth of
              knowledge and experience to the table, ensuring that every project
              is met with precision and expertise. From our certified
              electricians to our accomplished mechanical engineers, we take
              pride in our diverse skill set that enables us to tackle projects
              of any complexity with confidence.
            </p>
          </div>
        </div>
      </main>
    </main>
  );
}

export default About;
