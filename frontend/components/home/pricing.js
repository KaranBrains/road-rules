import styles from "./Home.module.css";
import router from "next/router";

function Features() {
  return (
    <div className="my-5 auth-bg">
      <div className={`container ${styles.pySection} px-4`}>
        <h2
          className={`font-bold text-primaryColor mb-5 text-center ${styles.mobileCenter}`}
        >
          Current Offers<br />
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
                1 hour of automatic one on one driving lesson. (select the date)
                </div>
                <h1 className="text-primaryColor mt-4 mb-3 font-18 font-bold text-center">
                  $45
                </h1>
                <div className="container justify-content-center w-100 d-flex">
                        <button className="text-white bg-secondaryColor font-demi px-lg-5 btn-blue submit-button"
                            onClick={()=>
                                router.push('/booking')
                            }>
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
                6 hours of automatic one on one driving lessons. (expires in 6 months)
                </div>
                <h1 className="text-primaryColor mt-4 mb-3 font-18 font-bold text-center">
                  $240
                </h1>
                <div className="container justify-content-center w-100 d-flex">
                        <button className="text-white bg-secondaryColor font-demi px-lg-5 btn-blue submit-button"
                            onClick={()=>
                                router.push('/booking')
                            }>
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
                10 hours of automatic one on one driving lessons. (expires in 6 months)
                </div>
                <h1 className="text-primaryColor mt-4 mb-3 font-18 font-bold text-center">
                  $400
                </h1>
                <div className="container justify-content-center w-100 d-flex">
                        <button className="text-white bg-secondaryColor font-demi px-lg-5 btn-blue submit-button"
                            onClick={()=>
                                router.push('/booking')
                            }>
                        Book Now
                    </button>
                </div>
              </div>
            </div>
          </div>


        </div>
        <div className="container justify-content-center w-100 d-flex" style={{marginTop:"100px"}}>
                <button className="text-white bg-secondaryColor font-demi px-lg-5 btn-blue submit-button"
                    onClick={()=>
                        router.push('/booking')
                    }>
                Check All Prices
            </button>
        </div>
      </div>
    </div>
  );
}

export default Features;
