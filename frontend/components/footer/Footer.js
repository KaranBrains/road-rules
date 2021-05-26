import { Link } from "next/link";
// import Logo from "../../public/images/logo.png";

function Footer() {
  return (
    <div className="gradient-background ">
      <div className="container py-section">
        <div className="row">
          <div className="col-lg-4 col-md-4 col-sm-12 col-12 mt-4">
            <div className="card px-3">
              <h3
                className="text-primaryColor font-bold mb-4"
                style={{ fontSize: "20px" }}
              >
                Company
              </h3>
              <Link to="">
                <div className="text-primaryColor font-demi font-15 mb-lg-3 mb-2">
                  Join Our Facebook Community
                </div>
              </Link>
              <Link to="">
                <div className="text-primaryColor font-demi font-15 mb-lg-3 mb-2">
                  Work with us
                </div>
              </Link>
              <Link to="">
                <div className="text-primaryColor font-demi font-15 mb-lg-3 mb-2">
                  Privacy Notice
                </div>
              </Link>
              <Link to="">
                <div className="text-primaryColor font-demi font-15 mb-lg-3 mb-2">
                  Term of Service
                </div>
              </Link>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12 col-12 mt-4">
            <div className="card px-3">
              <h3
                className="text-primaryColor font-bold mb-4"
                style={{ fontSize: "20px" }}
              >
                Support
              </h3>
              <Link to="">
                <div className="text-primaryColor font-demi font-15 mb-lg-3 mb-2">
                  Help Center
                </div>
              </Link>

              <Link to="">
                <div className="text-primaryColor font-demi font-15 mb-lg-3 mb-2">
                  Contact Us
                </div>
              </Link>
              <Link to="">
                <div className="text-primaryColor font-demi font-15 mb-lg-3 mb-2">
                  Request a New Feature
                </div>
              </Link>

              <Link to="">
                <div className="text-primaryColor font-demi font-15 mb-lg-3 mb-2">
                  Report an Outage
                </div>
              </Link>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12 col-12 my-4">
            <div className="card px-3">
              <h3
                className="text-primaryColor font-bold mb-4"
                style={{ fontSize: "30px" }}
              >
                {/* <img src={Logo} alt="logo" className="img-fluid mt-20 logo" /> */}
              </h3>
              <Link to="">
                <div className="text-primaryColor font-demi font-15 mb-lg-3 mb-2">
                  @ 2021 All rights reserved
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
