import styles from "./Home.module.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTestimonial } from "../../redux/actions/testimonial";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Features() {
  const dispatch = useDispatch();
  const testimonialOptions = useSelector((state) => {
    return (state.testimonial?.testimonialData?.testimonials)
  });
  useEffect(() => {
    dispatch(getTestimonial());
  }, []);
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 5000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    testimonialOptions && testimonialOptions.length>0 ? (
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
        <Slider {...settings} className="bg-white">
            <div className=" col-lg-3 col-md-4 col-sm-6 col-12 rounded mr-2">
              <div className="">
                <h4 className="text-primaryColor mt-4 mb-3 font-18 font-bold text-center">
                {testimonialOptions[0].name}
                </h4>
                <div className="font-demi text-muted text-center testimonial-card-1 p-4">
                "{testimonialOptions[0].comment}"
                </div>
                <div className="text-center col-12 my-5 container">
                <img src="/images/testimonial-1.svg" alt="about" className="img-fluid w-100" />
                </div>
              </div>
            </div>
            <div className=" col-lg-3 col-md-4 col-sm-6 col-12 rounded mr-2">
              <div className="">
              <h4 className="text-primaryColor mt-4 mb-3 font-18 font-bold text-center">
                {testimonialOptions[1].name}
                </h4>
                <div className="font-demi text-muted text-center testimonial-card p-4">
                "{testimonialOptions[1].comment}"
                </div>
                <div className="text-center col-12 my-5 container">
                <img src="/images/testimonial-2.svg" alt="about" className="img-fluid w-100" />
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 col-12 rounded mr-2">
              <div className="">
              <h4 className="text-primaryColor mt-4 mb-3 font-18 font-bold text-center">
                {testimonialOptions[2].name}
                </h4>
                <div className="font-demi text-muted text-center testimonial-card-2 p-4">
                "{testimonialOptions[2].comment}"
                </div>
                <div className="text-center my-5  col-12 container">
                <img src="/images/testimonial-3.svg" alt="about" className="img-fluid w-100" />
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 col-12  rounded mr-2">
              <div className="">
              <h4 className="text-primaryColor mt-4 mb-3 font-18 font-bold text-center">
                {testimonialOptions[3].name}
                </h4>
                <div className="font-demi text-muted text-center testimonial-card p-4">
                "{testimonialOptions[3].comment}"
                </div>
                <div className="text-center my-5 col-12 container">
                <img src="/images/testimonial-2.svg" alt="about" className="img-fluid w-100" />
                </div>
              </div>
            </div>
        </Slider>
        </div>
      </div>
    </div>
    ) : ''
  );
}

export default Features;
