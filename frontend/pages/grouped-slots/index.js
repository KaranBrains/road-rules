import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { GetSlotById } from "../../redux/actions/slot";
import jwt_decode from "jwt-decode";
import swal from "sweetalert";
import Form from 'react-bootstrap/Form'
import Head from "next/head";

export default function InstructorId() {
  const dispatch = useDispatch();
  const [profile, setprofile] = useState(null);
  let decode = null;
  const router = useRouter();
  const [roadTest, setRoadTest] = useState(false);
  const [vehicle, setVehicle] = useState(false);
  let price ;
  const location = router?.query?.location;
  const type = router?.query?.type;

  if (type, location) {
    if (type =="six") {
      price = location=="within" ? 240 : 270;
    } else {
      price = location=="within" ? 400 : 450;
    }
    //setTotal(price);
  }

  const [total, setTotal] = useState(0);

  const today = (new Date()).getDate();
  useEffect(() => {
    const data = localStorage.getItem("token");
    if (data) {
      decode = jwt_decode(data);
    }
    setprofile(decode);
  }, []);

  const openModal = () => {
      const bookingDetails = {
        type: type,
        location: location,
        vehicle: vehicle,
        roadTest: roadTest,
        total: total + price
      }
      console.log(bookingDetails);
      localStorage.setItem("bookingDetails",JSON.stringify(bookingDetails));
      console.log(profile);
      if(profile){
        router.push("/confirm-address/booking");
      }else{
        swal({
          text: `You need to login to continue`,
          icon: "info",
        });
        router.push("/auth/login");
      }
  };

  return (
    <>
     <Head>
        <title>Ride Details</title>
      </Head>
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-lg-7 col-md-8 col-sm-2 col-12">
            <div className="card">
              <h2
                className="card my-2 text-primaryColor text-center font-bold"
                style={{ fontSize: "35px" }}
              >
                Booking Details
              </h2>
              <hr className="grey-hr" />
              <div className="d-flex justify-content-between px-3 mt-1">
                <div className="text-muted font-demi font-18">Start Date</div>
                <div className="text-primaryColor font-bold font-18">
                  {today.toString()}
                </div>
              </div>
              <div className="d-flex justify-content-between px-3 mt-3 mb-1">
                <div className="text-muted font-demi font-18">Total Hours</div>
                <div className="text-primaryColor font-bold font-18">
                  {type && type=="six" ? (
                    '6'
                  ): '10'}
                </div>
              </div>
              <hr className="grey-hr" />
              <div className="d-flex justify-content-between px-3 mt-3 mb-1">
                <div className="text-muted font-demi font-18">Class Price</div>
                <div className="text-green font-bold font-18">
                    ${price}
                </div>
              </div>
              <hr className="grey-hr" />
              <div className="d-flex justify-content-between px-3 mt-3 mb-1">
                <div className="text-muted font-demi font-18">Total</div>
                <div className="text-green font-bold font-18">
                    ${total + price}
                </div>
              </div>
              <hr className="grey-hr" />
            </div>
            <div>
            <div className="my-3 ml-2">
            <Form.Group controlId="formBasicCheckbox1">
              {location=="within"? (
                type=="six"? (
                  <Form.Check type="checkbox" label="Add Road Test ($120)" className="ml-2" onClick={()=>{
                    roadTest ? setTotal( total - 120) : setTotal( total + 120);
                    setRoadTest(!roadTest);
                }}/>
                ) : (
                  <Form.Check type="checkbox" label="Add Road Test ($110)" className="ml-2" onClick={()=>{
                    roadTest ? setTotal( total - 110) : setTotal( total + 110);
                    setRoadTest(!roadTest);
                }}/>
                )
              ) : (
                type=="six"? (
                  <Form.Check type="checkbox" label="Add Road Test ($200)" className="ml-2" onClick={()=>{
                    roadTest ? setTotal( total - 200) : setTotal( total + 200);
                    setRoadTest(!roadTest);
                }}/>
                ) : (
                  <Form.Check type="checkbox" label="Add Road Test ($190)" className="ml-2" onClick={()=>{
                    roadTest ? setTotal( total - 190) : setTotal( total + 190);
                    setRoadTest(!roadTest);
                }}/>
                )
              )}
            </Form.Group>
            </div>
            <div className="my-3 ml-2">
            <Form.Group controlId="formBasicCheckbox2">
                <Form.Check type="checkbox" label="Rent School Vehicle ($120)" className="ml-2" onClick={()=>{
                  vehicle ? setTotal( total - 120) : setTotal( total + 120);
                  setVehicle(!vehicle);
                }}/>
            </Form.Group>
            </div>
            </div>
            <div className="text-center mt-4 mb-5">
            <button
                className="text-white bg-secondaryColor font-demi btn-blue submit-button"
              >
                <a href="/pdf/pricing.pdf" target = "_blank" className="text-white">View Pricing Policy</a>
              </button>
            </div>
            <div className="text-center mt-4 mb-5">
              <button
                className="text-white bg-secondaryColor font-demi btn-blue submit-button"
                onClick={openModal}
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
