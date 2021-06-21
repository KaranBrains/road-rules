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
    <div className="mt-5">
      <div className={`container ${styles.pySection} px-4`}>
        <h2
          className={`font-bold text-primaryColor mb-5 text-center ${styles.mobileCenter}`}
        >
          Why Choose Us? <br />
          {/* Smart Drivers start <br />
          here */}
        </h2>

        <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                <img src="/images/test.jpg" style={{width:"100%"}} className="rounded mb-5"></img>
            </div>
            <div className="col-lg-8 col-md-8 col-sm-12 col-12 text-primaryColor font-demi">
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </p>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </p>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </p>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
