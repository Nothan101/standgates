import React from 'react'

function StoreFooter() {
  return (
    <div>
      <footer className="text-center text-lg-start">
        {/* Grid container */}
        <div className="container-fluid p-4">
          <div className="row">
            <div className="col-md-6 mb-4 mb-md-0 d-flex justify-content-center justify-content-md-start align-items-center">
              <strong>Get connected with us on social networks</strong>
            </div>
            <div className="col-md-6 d-flex justify-content-center justify-content-md-end">
              {/* Facebook */}
              <a
                className="btn btn-primary btn-sm btn-floating me-2"
                style={{ backgroundColor: "#3b5998" }}
                href="#!"
                role="button"
              >
                <i className="fab fa-facebook-f" />
              </a>
              {/* Twitter */}
              <a
                className="btn text-white btn-sm btn-floating me-2"
                style={{ backgroundColor: "#55acee" }}
                href="#!"
                role="button"
              >
                <i className="fab fa-twitter" />
              </a>
              {/* Pinterest */}
              <a
                className="btn text-white btn-sm btn-floating me-2"
                style={{ backgroundColor: "#c61118" }}
                href="#!"
                role="button"
              >
                <i className="fab fa-pinterest" />
              </a>
              {/* Youtube */}
              <a
                className="btn text-white btn-sm btn-floating me-2"
                style={{ backgroundColor: "#ed302f" }}
                href="#!"
                role="button"
              >
                <i className="fab fa-youtube" />
              </a>
              {/* Instagram */}
              <a
                className="btn text-white btn-sm btn-floating me-2"
                style={{ backgroundColor: "#ac2bac" }}
                href="#!"
                role="button"
              >
                <i className="fab fa-instagram" />
              </a>
            </div>
          </div>
          <hr className="my-3" />
          {/*Grid row*/}
          <div className="row">
            {/*Grid column*/}
            <div className="col-lg-4 mb-4 mb-lg-0">
              <p>
                <strong>About us</strong>
              </p>
              <p>
              Welcome to STANDGATES, a dynamic multi-vendor eCommerce marketplace
              connecting buyers with trusted sellers across diverse categories. We empower
              businesses of all sizes to showcase their products to a global audience, offering
              a seamless shopping experience for customers. Our platform ensures secure transactions,
              reliable shipping, and responsive customer support, making online shopping effortless and
              enjoyable. At STANDGATES, we prioritize quality, transparency, and innovation, 
              fostering a thriving digital marketplace where vendors can grow their businesses 
              and customers can find unique, high-quality products. Join us today and discover a 
              world of endless possibilities, all in one place!
              </p>
            </div>
            {/*Grid column*/}
            {/*Grid column*/}
            <div className="col-lg-3 mb-4 mb-lg-0">
              <p>
                <strong>Useful links</strong>
              </p>
              <ul className="list-unstyled mb-0">
                <li>
                  <a href="#!" className="text-white">
                    Privacy policy
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    Media
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    Job offers
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    Cooperation
                  </a>
                </li>
              </ul>
            </div>
            {/*Grid column*/}
            {/*Grid column*/}
            <div className="col-lg-3 mb-4 mb-lg-0">
              <p>
                <strong>Products</strong>
              </p>
              <ul className="list-unstyled">
                <li>
                  <a href="#!" className="text-white">
                    Electronics
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    Fashion
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    Beauty
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    Automotive
                  </a>
                </li>
              </ul>
            </div>
            {/*Grid column*/}
            {/*Grid column*/}
            <div className="col-lg-2 mb-4 mb-lg-0">
              <p>
                <strong>Support</strong>
              </p>
              <ul className="list-unstyled">
                <li>
                  <a href="#!" className="text-white">
                    Complaints
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    Help center
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    Community
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
            {/*Grid column*/}
          </div>
          {/*Grid row*/}
        </div>
        {/* Grid container */}
        {/* Copyright */}
        <div
          className="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          © 2025 Copyright:
          <a className="" href="/">
            STANDGATES.COM
          </a>
        </div>
        {/* Copyright */}
      </footer>

    </div>
  )
}

export default StoreFooter