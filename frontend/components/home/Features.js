import styles from "./Home.module.css";

function Features() {
  return (
    <div className="my-5">
      <div className={`container ${styles.pySection} px-4`}>
        <h2
          className={`font-bold text-primaryColor mb-5 ${styles.mobileCenter}`}
        >
          Go literally anywhere. <br />
          From anywhere.
        </h2>

        <div className="row">
          <div
            className={`col-lg-4 col-md-4 col-sm-6 col-12 p-2 ${styles.mobileCenter}`}
          >
            <div className="card bg-white h-100">
              <div className="card-body rounded shadow">
                <div className="image-container text-center my-3">
                  <i className="text-primaryColor fas fa-map-signs fa-3x mb-2"></i>
                </div>
                <h4 className="text-primaryColor mt-4 mb-3 font-18 font-bold text-center">
                  Choice
                </h4>
                <div className="font-demi text-muted text-center mb-3">
                  We go everywhere. Literally thousands of destinations. No
                  station required.
                </div>
              </div>
            </div>
          </div>
          <div
            className={`col-lg-4 col-md-4 col-sm-6 col-12 p-2 ${styles.mobileCenter}`}
          >
            <div className="card bg-white h-100">
              <div className="card-body rounded shadow">
                <div className="image-container text-center my-3">
                  <i className="text-primaryColor fas fa-map-marker-alt fa-3x mb-2"></i>
                </div>
                <h4 className="text-primaryColor mt-4 mb-3 font-18 font-bold text-center">
                  Carpool with confidence
                </h4>
                <div className="font-demi text-muted text-center  mb-3">
                  Government ID verification adds another level of security to
                  member profiles.
                </div>
              </div>
            </div>
          </div>

          <div
            className={`col-lg-4 col-md-4 col-sm-6 col-12 p-2 ${styles.mobileCenter}`}
          >
            <div className="card bg-white h-100">
              <div className="card-body rounded shadow">
                <div className="image-container text-center my-3">
                  <i className="text-primaryColor fas fa-car fa-3x mb-2"></i>
                </div>
                <h4 className="text-primaryColor mt-4 mb-3 font-18 font-bold text-center">
                  Get going faster
                </h4>
                <div className="font-demi text-muted text-center  mb-3">
                  No need to travel across town, catch a ride leaving near you.
                </div>
              </div>
            </div>
          </div>

          <div
            className={`col-lg-4 col-md-4 col-sm-6 col-12 p-2 ${styles.mobileCenter}`}
          >
            <div className="card bg-white h-100">
              <div className="card-body rounded shadow">
                <div className="image-container text-center my-3">
                  <i className="text-primaryColor fas fa-map-signs fa-3x mb-2"></i>
                </div>
                <h4 className="text-primaryColor mt-4 mb-3 font-18 font-bold text-center">
                  Choice
                </h4>
                <div className="font-demi text-muted text-center  mb-3">
                  We go everywhere. Literally thousands of destinations. No
                  station required.
                </div>
              </div>
            </div>
          </div>

          <div
            className={`col-lg-4 col-md-4 col-sm-6 col-12 p-2 ${styles.mobileCenter}`}
          >
            <div className="card bg-white h-100">
              <div className="card-body rounded shadow">
                <div className="image-container text-center my-3">
                  <i className="text-primaryColor fas fa-map-marker-alt fa-3x mb-2"></i>
                </div>
                <h4 className="text-primaryColor mt-4 mb-3 font-18 font-bold text-center">
                  Carpool with confidence
                </h4>
                <div className="font-demi text-muted text-center  mb-3">
                  Government ID verification adds another level of security to
                  member profiles.
                </div>
              </div>
            </div>
          </div>

          <div
            className={`col-lg-4 col-md-4 col-sm-6 col-12 p-2 ${styles.mobileCenter}`}
          >
            <div className="card bg-white h-100">
              <div className="card-body rounded shadow">
                <div className="image-container text-center my-3">
                  <i className="text-primaryColor fas fa-car fa-3x mb-2"></i>
                </div>
                <h4 className="text-primaryColor mt-4 mb-3 font-18 font-bold text-center">
                  Get going faster
                </h4>
                <div className="font-demi text-muted text-center  mb-3">
                  No need to travel across town, catch a ride leaving near you.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
