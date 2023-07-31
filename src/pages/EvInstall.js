import React, { Fragment } from "react";
import evImg from "../images/ev-charging.jpg";

function EvInstall() {
  return (
    <Fragment>
      <header className="my-5 py-5 my-auto d-flex flex-row about-header">
        <div className="shape sm-none ms-3"></div>
        <div className="px-5 header-text me-5">
          <h1 className="my-5 pp-color display-4">
            EV Charging Installation <br />- Embrace Electric Mobility
          </h1>
          <p className="fs-5">
            We are proud to offer cutting-edge EV charging installation services
            to support the growing demand for electric vehicles. Our expert team
            is dedicated to helping businesses and individuals embrace electric
            mobility with reliable and efficient EV charger installations.
          </p>
        </div>
      </header>
      <main className="ev-main">
        <div className="d-flex flex-row ev-sec-1">
          <div className="text">
            <h2 className="display-5 pp-color">
              Why Invest in EV Charging Infrastructure?
            </h2>
            <p>
              Electric vehicles are leading the way toward a sustainable and
              eco-friendly future. By investing in EV charging infrastructure,
              you can enjoy a range of benefits
            </p>
            <ul>
              <li>
                Cater to EV Users
                <p>
                  Attract EV owners and visitors to your location by providing
                  convenient charging solutions.
                </p>
              </li>
              <li>
                Promote Sustainability
                <p>
                  Demonstrate your commitment to environmental responsibility
                  and a greener future.
                </p>
              </li>
              <li>
                Customer Retention
                <p>
                  Offer added value to your customers or tenants, encouraging
                  loyalty and repeat business.
                </p>
              </li>
              <li>
                Stay Ahead of the Curve
                <p>
                  Prepare for the increasing popularity of electric vehicles and
                  stay competitive in the market.
                </p>
              </li>
            </ul>
          </div>
          <div className="trap-shape sm-none"></div>
          <img
            src={evImg}
            alt="electric vehicle charging"
            className="sm-none"
          />
        </div>
        <section className="ev-sec-2">
          <h3 className="display-5 pp-color">
            Our EV Charging Installation Services
          </h3>
          <p>
            At PP Electrical, we offer thorough EV charging installation
            solutions tailored to meet your unique needs
          </p>
          <ul>
            <li>
              Site Assessment
              <p>
                Our experienced team conducts detailed site assessments to
                determine the most strategic and convenient locations for EV
                chargers on your property.
              </p>
            </li>
            <li>
              Customized Charging Solutions
              <p>
                We design and install EV charging stations that suit your
                specific requirements, whether you need a single charger or a
                network of chargers for a larger facility.
              </p>
            </li>
            <li>
              Fast and Efficient Charging
              <p>
                Our EV charging installations offer fast and reliable charging
                times, ensuring quick turnaround for EV owners.
              </p>
            </li>
            <li>
              Safety and Compliance
              <p>
                Safety is our priority. We adhere to all industry regulations
                and safety standards to deliver a secure and compliant charging
                infrastructure.
              </p>
            </li>
            <li>
              Scalability and Future-Readiness
              <p>
                Our installations are designed with scalability in mind,
                allowing for easy expansion as EV adoption increases.
              </p>
            </li>
          </ul>
        </section>
      </main>
    </Fragment>
  );
}

export default EvInstall;
