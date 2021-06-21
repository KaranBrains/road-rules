import styles from "./Home.module.css";
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import LocalActivityIcon from '@material-ui/icons/LocalActivity';
import RoomIcon from '@material-ui/icons/Room';
import DriveEtaIcon from '@material-ui/icons/DriveEta';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import GavelIcon from '@material-ui/icons/Gavel';
import router from "next/router";

function Features() {
  return (
    <div className="mb-5 auth-bg">
      <div className={`container ${styles.pySection} px-4`}>
        <h2
          className={`font-bold text-primaryColor mb-5 text-center ${styles.mobileCenter}`}
        >
          Booking in three easy steps <br />
          {/* Smart Drivers start <br />
          here */}
        </h2>

        <div className="row">
          <div
            className={`col-lg-12 col-md-12 col-sm-12 col-12 p-2 ${styles.mobileCenter}`}
          >
            <div className="card animated-card bg-white h-100" onClick={()=>{
              router.push("/auth/login");
            }}>
              <div className="card-body rounded shadow">
                <h4 className="text-primaryColor mt-4 mb-3 font-20 font-bold">
                  Step 1
                </h4>
                <div className="font-demi text-muted mb-3">
                Go to Login/Signup and create an account.
                </div>
              </div>
            </div>
          </div>
          <div
            className={`col-lg-12 col-md-12 col-sm-12 col-12 p-2 ${styles.mobileCenter}`}
          >
            <div className="card animated-card  bg-white h-100" onClick={()=>{
              router.push("/booking");
            }}>
              <div className="card-body rounded shadow">
                <h4 className="text-primaryColor mt-4 mb-3 font-22 font-bold">
                  Step 2
                </h4>
                <div className="font-demi text-muted  mb-3">
                  Go to the Bookings tab and select a suitable time slot.
                </div>
              </div>
            </div>
          </div>

          <div
            className={`col-lg-12 col-md-12 col-sm-12 col-12 p-2 ${styles.mobileCenter}`}
          >
            <div className="card animated-card  bg-white h-100">
              <div className="card-body rounded shadow">
                <h4 className="text-primaryColor mt-4 mb-3 font-22 font-bold">
                  Step 3
                </h4>
                <div className="font-demi text-muted  mb-3">
                Pay for the booked slots.
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
