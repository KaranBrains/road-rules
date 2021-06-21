import styles from "./Home.module.css";
import { useEffect } from "react";
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import LocalActivityIcon from '@material-ui/icons/LocalActivity';
import { useDispatch, useSelector } from "react-redux";
import RoomIcon from '@material-ui/icons/Room';
import DriveEtaIcon from '@material-ui/icons/DriveEta';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import GavelIcon from '@material-ui/icons/Gavel';
import { getAboutCards } from "../../redux/actions/aboutCards";

function Features() {
  const dispatch = useDispatch();
  const aboutCards = useSelector((state) => {
    return state.aboutCards?.aboutCardsData?.aboutCards;
  });
  console.log(aboutCards)
  useEffect(() => {
    dispatch(getAboutCards());
  }, []);
  return (
    aboutCards && aboutCards.length>0 ? (
      <div className="my-5">
      <div className="text-center my-5 container">
        <img src="/images/about.gif" alt="about" className="img-fluid" />
      </div>
      <div className={`container ${styles.pySection} px-4`}>
        <h2
          className={`font-bold text-primaryColor mb-5 text-center ${styles.mobileCenter}`}
        >
          Your key to safe Driving.<br />
          {/* Smart Drivers start <br />
          here */}
        </h2>

        <div className="row">
          <div
            className={`col-lg-4 col-md-4 col-sm-6 col-12 p-2 ${styles.mobileCenter}`}
          >
            <div className="card bg-white h-100">
              <div className="card-body rounded shadow">
                <div className="image-container text-center my-3">
                <LocalActivityIcon className="text-primaryColor mb-2" fontSize="large"></LocalActivityIcon>
                </div>
                <h4 className="text-primaryColor mt-4 mb-3 font-18 font-bold text-center">
                  {aboutCards[0].subHeading}
                </h4>
                <div className="font-demi text-muted text-center mb-3">
                {aboutCards[0].text}
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
                  <CheckBoxIcon className="text-primaryColor mb-2" fontSize="large"></CheckBoxIcon>
                </div>
                <h4 className="text-primaryColor mt-4 mb-3 font-18 font-bold text-center">
                  {aboutCards[1].subHeading}
                </h4>
                <div className="font-demi text-muted text-center mb-3">
                {aboutCards[1].text}
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
                <DriveEtaIcon className="text-primaryColor mb-2" fontSize="large"></DriveEtaIcon>
                </div>
                <h4 className="text-primaryColor mt-4 mb-3 font-18 font-bold text-center">
                  {aboutCards[2].subHeading}
                </h4>
                <div className="font-demi text-muted text-center mb-3">
                {aboutCards[2].text}
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
                <RoomIcon className="text-primaryColor mb-2" fontSize="large"></RoomIcon>
                </div>
                <h4 className="text-primaryColor mt-4 mb-3 font-18 font-bold text-center">
                  {aboutCards[3].subHeading}
                </h4>
                <div className="font-demi text-muted text-center mb-3">
                {aboutCards[3].text}
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
                <PeopleAltIcon className="text-primaryColor mb-2" fontSize="large"></PeopleAltIcon>
                </div>
                <h4 className="text-primaryColor mt-4 mb-3 font-18 font-bold text-center">
                  {aboutCards[4].subHeading}
                </h4>
                <div className="font-demi text-muted text-center mb-3">
                {aboutCards[4].text}
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
                <GavelIcon className="text-primaryColor mb-2" fontSize="large"></GavelIcon>
                </div>
                <h4 className="text-primaryColor mt-4 mb-3 font-18 font-bold text-center">
                  {aboutCards[5].subHeading}
                </h4>
                <div className="font-demi text-muted text-center mb-3">
                  {aboutCards[5].text}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    ) : ''
  );
}

export default Features;
