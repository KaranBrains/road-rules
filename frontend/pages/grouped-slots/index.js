import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { GetSlotById } from "../../redux/actions/slot";
import jwt_decode from "jwt-decode";
import swal from "sweetalert";
import Form from 'react-bootstrap/Form'

export default function InstructorId() {
//   const dispatch = useDispatch();
//   const [profile, setprofile] = useState(null);
//   let decode = null;
//   const router = useRouter();
//   const id = router.query.id;
//   const slot = useSelector((state) => {
//     return state.slot?.slot?.slot;
//   });
//   useEffect(() => {
//     const data = localStorage.getItem("token");
//     if (data) {
//       decode = jwt_decode(data);
//     }
//     setprofile(decode);
//     const id = router.query.id;
//     if (id) {
//       dispatch(GetSlotById(id));
//     }
//   }, [id]);
//   const openModal = () => {
//       if(profile){
//         router.push("/confirm-address/" + id);
//       }else{
//         swal({
//           text: `You need to login to continue`,
//           icon: "info",
//         });
//         router.push("/auth/login");
//       }
    
//   };

  const today = (new Date()).getDate();

  return (
    <>
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
                  6
                </div>
              </div>
              <hr className="grey-hr" />
              <div className="d-flex justify-content-between px-3 mt-1">
                <div className="text-muted font-demi font-18">Instructor</div>
                <div className="text-primaryColor font-bold font-18">
                  Test
                </div>
              </div>
              <div className="d-flex justify-content-between px-3 mt-3 mb-1">
                <div className="text-muted font-demi font-18">Price</div>
                <div className="text-green font-bold font-18">
                  &#36;240
                </div>
              </div>
              <hr className="grey-hr" />
            </div>
            <div>
            <div className="my-3 ml-2">
            <Form.Group controlId="formBasicCheckbox1">
                <Form.Check type="checkbox" label="Add Road Test ($120)" className="ml-2"/>
            </Form.Group>
            </div>
            <div className="my-3 ml-2">
            <Form.Group controlId="formBasicCheckbox2">
                <Form.Check type="checkbox" label="Rent School Vehicle ($120)" className="ml-2" onClick={()=>{
                    console.log("hello");
                }}/>
            </Form.Group>
            </div>
            </div>
            <div className="text-center mt-4 mb-5">
              <button
                className="text-white bg-secondaryColor font-demi btn-blue submit-button"
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
