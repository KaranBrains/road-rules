import styles from "./Home.module.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getChoose } from "../../redux/actions/choose";


function Features() {
  const dispatch = useDispatch();
  const chooseOptions = useSelector((state) => {
    return (state.choose?.chooseData?.chooses)
  });
  useEffect(() => {
    dispatch(getChoose());
  }, []);

  return (
    <div className="mt-5">
      {    chooseOptions && chooseOptions.length>0 ? (
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
                    <img src="/images/test.jpg" style={{width:"100%" , height:"230px"}} className="rounded mb-5"></img>
                </div>
                <div className="col-lg-8 col-md-8 col-sm-12 col-12 text-primaryColor font-demi">
                    <p>
                      {chooseOptions[0].point}
                    </p>
                    <p>{chooseOptions[1].point}
                    </p>
                    <p>{chooseOptions[2].point}
                    </p>
                </div>
            </div>
          </div>
      ):''}
    </div>
  );
}

export default Features;
