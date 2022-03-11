import styles from "./Home.module.css";
import router from "next/router";

function Features() {
  return (
    <div className="my-5 auth-bg">
      <div className={`container ${styles.pySection} px-4`}>
        <h2
          className={`font-bold text-primaryColor mb-5 text-center ${styles.mobileCenter}`}
        >
 Call us at +1&nbsp;(778)&nbsp;889-7804 for pricing.
        </h2>
       


      </div>
    </div>
  );
}

export default Features;
