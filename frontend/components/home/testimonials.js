import styles from "./Home.module.css";
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import LocalActivityIcon from '@material-ui/icons/LocalActivity';
import RoomIcon from '@material-ui/icons/Room';
import DriveEtaIcon from '@material-ui/icons/DriveEta';
import Carousel from "react-bootstrap/Carousel";
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import GavelIcon from '@material-ui/icons/Gavel';

function Features() {
  return (
    <div className="my-5 auth-bg">
      <div className={`container ${styles.pySection} px-4`}>
        <h2
          className={`font-bold text-primaryColor mb-5 text-center ${styles.mobileCenter}`}
        >
          What our students have to say about us.<br />
          {/* Smart Drivers start <br />
          here */}
        </h2>
        <div className="row">

        <Carousel controls={false} indicators>
          <Carousel.Item interval={5000}>
          <div
            className={`col-12 p-2 d-flex justify-content-center ${styles.mobileCenter}`}
          >
            <div className=" col-lg-4 col-md-4 col-sm-6 col-12 rounded shadow">
              <div className="">
                <h4 className="text-primaryColor mt-4 mb-3 font-18 font-bold text-center">
                Joban Sandhu
                </h4>
                <div className="font-demi text-muted text-center mb-3 p-2">
                " I had a great experience at Road Rules Driving School.
                The instructor was very professional and helpful. Whenever I asked for
                help or was confused, she always taught me in a well manner. I would
                definitely rate this place a 5 star"
                </div>
                <div className="text-center col-12 my-5 container">
                <img src="/images/testimonial-1.svg" alt="about" className="img-fluid w-100" />
                </div>
              </div>
            </div>
          </div>
          </Carousel.Item>
          <Carousel.Item interval={5000}>
          <div
            className={`col-12 p-2 d-flex justify-content-center ${styles.mobileCenter}`}
          >
            <div className=" col-lg-4 col-md-4 col-sm-6 col-12 rounded shadow">
              <div className="">
                <h4 className="text-primaryColor mt-4 mb-3 font-18 font-bold text-center">
                Poonamdeep Kaur
                </h4>
                <div className="font-demi text-muted text-center mt-3 p-2">
                " A very professional driving school. The instructor is
                fantastic. She always pointed out my mistakes and told me where I can
                do better. Before I used to attend a different driving school, but didn’t
                receive enough help, but with Road Rules Driving school I passed my
                ICBC Class 7 road test in my first attempt!"
                </div>
                <div className="text-center col-12 my-5 container">
                <img src="/images/testimonial-2.svg" alt="about" className="img-fluid w-100" />
                </div>
              </div>
            </div>
          </div>
          </Carousel.Item>
          <Carousel.Item interval={5000}>
          <div
            className={`col-12 p-2 d-flex justify-content-center ${styles.mobileCenter}`}
          >
            <div className="col-lg-4 col-md-4 col-sm-6 col-12 rounded shadow">
              <div className="">
                <h4 className="text-primaryColor mt-4 mb-3 font-18 font-bold text-center">
                Aryan Grewal
                </h4>
                <div className="font-demi text-muted text-center mb-3 p-2">
                "I took the 10-lesson package with this driving school. I
                had a pleasant experience all the way through and instructor made
                everything really easy to do. Her techniques and tips really helped me
                understand better, and passed my Class 5 test on the first attempt.
                Thank you to Road Rules Driving School, and I would 100% recommend
                it."
                </div>
                <div className="text-center my-5  col-12 container">
                <img src="/images/testimonial-3.svg" alt="about" className="img-fluid w-100" />
                </div>
              </div>
            </div>
          </div>
          </Carousel.Item>
        <Carousel.Item interval={5000}>
          <div
            className={`col-12 p-2 d-flex justify-content-center ${styles.mobileCenter}`}
          >
            <div className="col-lg-4 col-md-4 col-sm-6 col-12  rounded shadow">
              <div className="">
                <h4 className="text-primaryColor mt-4 mb-3 font-18 font-bold text-center">
                Mary Wang
                </h4>
                <div className="font-demi text-muted text-center mb-3 p-2">
                " I am writing this review on behalf of my daughter, she took
                lessons from this place and I only heard good things about it. She had
                her class 7 road test coming up and was worried she would fail, but the
                instructor made it easy for her to understand and told her to stay
                confident and you can do it. She ended up passing her road test and
                want to give a huge thank you to Road Rules Driving School, for teaching
                in a well-mannered environment and staying professional."
                </div>
                <div className="text-center my-5 col-12 container">
                <img src="/images/testimonial-2.svg" alt="about" className="img-fluid w-100" />
                </div>
              </div>
            </div>
          </div>
          </Carousel.Item>
        </Carousel>
        </div>
      </div>
    </div>
  );
}

export default Features;
