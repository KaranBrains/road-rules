import styles from "../../components/home/Home.module.css";
import Tabs from "react-bootstrap/Tabs";
import router from "next/router";
import Tab from "react-bootstrap/Tab";
import Head from "next/head";

function Features() {
  return (
    <>
      <Head>
        <title>Booking | Roadrules </title>
      </Head>
      <div className="my-5 auth-bg">
        <Tabs
          defaultActiveKey="profile"
          id="uncontrolled-tab-example"
          defaultActiveKey="withinSurrey"
        >
          <Tab eventKey="withinSurrey" title="Within Surrey">
            <div className={`container ${styles.pySection} px-4`}>
              <h2
                className={`font-bold text-primaryColor mb-5 text-center ${styles.mobileCenter}`}
              >
                Current Offers
                <br />
                <span className="font-18 mt-5">
                  {" "}
                  Call us at +1&nbsp;(778)&nbsp;889-7804 for special offers.
                </span>
                <br />
                {/* Smart Drivers start <br />
            here */}
              </h2>

              <div className="row">
                <div
                  className={`col-lg-4 col-md-4 col-sm-6 col-12 p-2 hoverable ${styles.mobileCenter}`}
                >
                  <div className="card bg-white h-100">
                    <div className="card-body rounded shadow">
                      <h4 className="text-primaryColor mt-4 mb-3 font-18 font-bold text-center">
                        1-Hour Auto Package
                      </h4>
                      <div className="font-demi text-muted text-center mb-3">
                        1 hour of automatic one on one driving lesson. (select
                        the date)
                      </div>
                      <h1 className="text-primaryColor mt-4 mb-3 font-18 font-bold text-center">
                        $45
                      </h1>
                      <div className="container justify-content-center w-100 d-flex">
                        <button
                          className="text-white bg-secondaryColor font-demi px-lg-5 btn-blue submit-button"
                          onClick={() =>
                            router.push("/fullCalendar?location=within")
                          }
                        >
                          Book Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className={`col-lg-4 col-md-4 col-sm-6 col-12 p-2 hoverable ${styles.mobileCenter}`}
                >
                  <div className="card bg-white h-100">
                    <div className="card-body rounded shadow">
                      <h4 className="text-primaryColor mt-4 mb-3 font-18 font-bold text-center">
                        6-Hour Auto Package
                      </h4>
                      <div className="font-demi text-muted text-center mb-3">
                        6 hours of automatic one on one driving lessons.
                        (expires in 6 months)
                      </div>
                      <h1 className="text-primaryColor mt-4 mb-3 font-18 font-bold text-center">
                        $240
                      </h1>
                      <div className="container justify-content-center w-100 d-flex">
                        <button
                          className="text-white bg-secondaryColor font-demi px-lg-5 btn-blue submit-button"
                          onClick={() =>
                            router.push(
                              "/grouped-slots?type=six&location=within"
                            )
                          }
                        >
                          Book Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className={`col-lg-4 col-md-4 col-sm-6 col-12 p-2 hoverable ${styles.mobileCenter}`}
                >
                  <div className="card bg-white h-100">
                    <div className="card-body rounded shadow">
                      <h4 className="text-primaryColor mt-4 mb-3 font-18 font-bold text-center">
                        10-Hour Auto Package
                      </h4>
                      <div className="font-demi text-muted text-center mb-3">
                        10 hours of automatic one on one driving lessons.
                        (expires in 6 months)
                      </div>
                      <h1 className="text-primaryColor mt-4 mb-3 font-18 font-bold text-center">
                        $400
                      </h1>
                      <div className="container justify-content-center w-100 d-flex">
                        <button
                          className="text-white bg-secondaryColor font-demi px-lg-5 btn-blue submit-button"
                          onClick={() =>
                            router.push(
                              "/grouped-slots?type=ten&location=within"
                            )
                          }
                        >
                          Book Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row d-flex justify-content-center">
                <div
                  className={`col-lg-4 col-md-4 col-sm-6 col-12 p-2 hoverable ${styles.mobileCenter}`}
                >
                  <div className="card bg-white h-100">
                    <div className="card-body rounded shadow">
                      <h4 className="text-primaryColor mt-4 mb-3 font-18 font-bold text-center">
                        Rent School Vehicle
                      </h4>
                      <div className="font-demi text-muted text-center mb-3">
                        Rent School Vehicle for Road Test.
                      </div>
                      <h1 className="text-primaryColor mt-4 mb-3 font-18 font-bold text-center">
                        $120
                      </h1>
                      <div className="container justify-content-center w-100 d-flex">
                        <button
                          className="text-white bg-secondaryColor font-demi px-lg-5 btn-blue submit-button"
                          onClick={() => router.push("/contact")}
                        >
                          Book Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="container justify-content-center w-100 d-flex" style={{marginTop:"100px"}}>
                    <button className="text-white bg-secondaryColor font-demi px-lg-5 btn-blue submit-button"
                        onClick={()=>
                            router.push('/contact')
                        }>
                    Check All Prices
                </button>
            </div> */}
            </div>
          </Tab>
          <Tab eventKey="outsideSurrey" title="Outside Surrey">
            <div className={`container ${styles.pySection} px-4`}>
              <h2
                className={`font-bold text-primaryColor mb-5 text-center ${styles.mobileCenter}`}
              >
                Current Offers
                <br />
                <span className="font-18 mt-5">
                  {" "}
                  Call us at +1&nbsp;(778)&nbsp;889-7804 for special offers.
                </span>
                <br />
                <span className="text-center font-18">
                  (Port Coquitlam, Coquitlam, Langley, Richmond, Burnaby,
                  New-West etc.)
                </span>
                {/* Smart Drivers start <br />
          here */}
              </h2>

              <div className="row">
                <div
                  className={`col-lg-4 col-md-4 col-sm-6 col-12 p-2 hoverable ${styles.mobileCenter}`}
                >
                  <div className="card bg-white h-100">
                    <div className="card-body rounded shadow">
                      <h4 className="text-primaryColor mt-4 mb-3 font-18 font-bold text-center">
                        1-Hour Auto Package
                      </h4>
                      <div className="font-demi text-muted text-center mb-3">
                        1 hour of automatic one on one driving lesson. (select
                        the date)
                      </div>
                      <h1 className="text-primaryColor mt-4 mb-3 font-18 font-bold text-center">
                        $50
                      </h1>
                      <div className="container justify-content-center w-100 d-flex">
                        <button
                          className="text-white bg-secondaryColor font-demi px-lg-5 btn-blue submit-button"
                          onClick={() =>
                            router.push("/fullCalendar?location=outside")
                          }
                        >
                          Book Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className={`col-lg-4 col-md-4 col-sm-6 col-12 p-2 hoverable ${styles.mobileCenter}`}
                >
                  <div className="card bg-white h-100">
                    <div className="card-body rounded shadow">
                      <h4 className="text-primaryColor mt-4 mb-3 font-18 font-bold text-center">
                        6-Hour Auto Package
                      </h4>
                      <div className="font-demi text-muted text-center mb-3">
                        6 hours of automatic one on one driving lessons.
                        (expires in 6 months)
                      </div>
                      <h1 className="text-primaryColor mt-4 mb-3 font-18 font-bold text-center">
                        $270
                      </h1>
                      <div className="container justify-content-center w-100 d-flex">
                        <button
                          className="text-white bg-secondaryColor font-demi px-lg-5 btn-blue submit-button"
                          onClick={() =>
                            router.push(
                              "/grouped-slots?type=six&location=outside"
                            )
                          }
                        >
                          Book Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className={`col-lg-4 col-md-4 col-sm-6 col-12 p-2 hoverable ${styles.mobileCenter}`}
                >
                  <div className="card bg-white h-100">
                    <div className="card-body rounded shadow">
                      <h4 className="text-primaryColor mt-4 mb-3 font-18 font-bold text-center">
                        10-Hour Auto Package
                      </h4>
                      <div className="font-demi text-muted text-center mb-3">
                        10 hours of automatic one on one driving lessons.
                        (expires in 6 months)
                      </div>
                      <h1 className="text-primaryColor mt-4 mb-3 font-18 font-bold text-center">
                        $450
                      </h1>
                      <div className="container justify-content-center w-100 d-flex">
                        <button
                          className="text-white bg-secondaryColor font-demi px-lg-5 btn-blue submit-button"
                          onClick={() =>
                            router.push(
                              "/grouped-slots?type=ten&location=outside"
                            )
                          }
                        >
                          Book Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row d-flex justify-content-center">
                <div
                  className={`col-lg-4 col-md-4 col-sm-6 col-12 p-2 hoverable ${styles.mobileCenter}`}
                >
                  <div className="card bg-white h-100">
                    <div className="card-body rounded shadow">
                      <h4 className="text-primaryColor mt-4 mb-3 font-18 font-bold text-center">
                        Rent School Vehicle
                      </h4>
                      <div className="font-demi text-muted text-center mb-3">
                        Rent School Vehicle for Road Test.
                      </div>
                      <h1 className="text-primaryColor mt-4 mb-3 font-18 font-bold text-center">
                        $200
                      </h1>
                      <div className="container justify-content-center w-100 d-flex">
                        <button
                          className="text-white bg-secondaryColor font-demi px-lg-5 btn-blue submit-button"
                          onClick={() => router.push("/contact")}
                        >
                          Book Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="container justify-content-center w-100 d-flex" style={{marginTop:"100px"}}>
                <button className="text-white bg-secondaryColor font-demi px-lg-5 btn-blue submit-button"
                    onClick={()=>
                        router.push('/contact')
                    }>
                Check All Prices
            </button>
        </div> */}
            </div>
          </Tab>
        </Tabs>
      </div>
    </>
  );
}

export default Features;
