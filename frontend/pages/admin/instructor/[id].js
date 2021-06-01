import { useState, useContext, useEffect } from "react";
import { useDispatch , useSelector} from "react-redux";
import { ReactReduxContext } from 'react-redux'
import { useRouter } from "next/router";
import { Modal } from "react-bootstrap";
import { GetInstructorById, UpdateInstructorById } from "../../../redux/actions/instructor";
import {baseUrl} from "../../../redux/api/index"
import dynamic from 'next/dynamic';
const Sidebar = dynamic(() => import('../../../shared/sidebar/sidebar'), { ssr: false });

export default function InstructorId() {

  const dispatch = useDispatch();
  const router = useRouter();
  const id = router.query.id;

  useEffect(() =>{
    if(id !== undefined){
    dispatch(GetInstructorById(id))
    .then(() =>{
      setShowText(true);
    });;
    }
  },[id])

  const instructorById = useSelector(state => state.instructor?.instructorById?.instructor);

  const initialState = { fullName: instructorById?.fullName, img: instructorById?.img, phone: instructorById?.phone, email:instructorById?.email};
  const [showModal, setShowModal] = useState(false);
  const [showText, setShowText] = useState(false);
  const [formData, setformData] = useState(initialState);
  const [fileOneValue, setFileOneValue] = useState('');
  const [fileOne, setFileOne] = useState(baseUrl + instructorById?.img);

  const handleShow = () => 
  { dispatch(GetInstructorById(router.query.id))
    setformData(initialState);
    setFileOne(baseUrl + instructorById?.img);
    setShowModal(true);
  }
  
  const handleClose = () => {
    setShowModal(false);
    setformData(initialState);
    setFileOne(baseUrl + instructorById?.img);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(UpdateInstructorById(router.query.id, formData))
    .then(() =>{
      handleClose();
      dispatch(GetInstructorById(router.query.id));
    }).catch(() =>{
    });
  };

  const toBase64 = file => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
});

    return(
      <div>
        {showModal ? (
        <Modal className="mt-5 modal-card" show={showModal} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>
              <div className="font-bold ml-1">Edit a Instructor</div>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <form>
                <div className="form-group mt-4">
                <label className="font-20 py-2">Full Name</label>
                  <input
                    required
                    value={formData.fullName}
                    onChange={(e) => {
                      setformData({
                        ...formData,
                        [e.target.name]: e.target.value,
                      });
                    }}
                    name="fullName"
                    type="text"
                    className="form-control"
                    placeholder="Full Name"
                  />
                </div>
                <div className="form-group">
                  <label className="font-20 py-2">Image</label>
                  <img src={fileOne} className="img-fluid"/>
                  <div className="btn font-20 font-bold bg-tertiaryColor w-100 mt-2" onClick={()=>document.getElementById('uploading')?.click()}>Upload</div>
                  <input
                    onChange={(e) =>{
                      setFileOne(URL.createObjectURL(e.target.files[0]));
                      toBase64(e.target.files[0]).then(res=>{
                        setFileOneValue(res);
                        setformData({
                          ...formData,
                          img: res
                        });
                      })
                    }}
                    type="file"
                    class="hidden"
                    id="uploading"
                    accept=".png, .jpg, .jpeg"
                    placeholder="Instructor Image"
                    required
                  />
                </div>
                <div className="form-group mt-4">
                <label className="font-20 py-2">Phone</label>
                  <input
                    required
                    value={formData.phone}
                    onChange={(e) => {
                      setformData({
                        ...formData,
                        [e.target.name]: e.target.value,
                      });
                    }}
                    name="phone"
                    type="text"
                    className="form-control"
                    placeholder="Mobile Number"
                  />
                </div>
                <div className="form-group mt-4">
                <label className="font-20 py-2">Email</label>
                  <input
                    required
                    value={formData.email}
                    onChange={(e) => {
                      setformData({
                        ...formData,
                        [e.target.name]: e.target.value,
                      });
                    }}
                    name="email"
                    type="email"
                    className="form-control"
                    placeholder="Email"
                  />
                </div>
                <div className="text-center mt-5">
                  <button
                    className="text-white bg-secondaryColor font-demi btn-blue submit-button"
                    type="submit"
                    onClick={handleSubmit}
                  >
                    Update
                  </button>
                </div>
              </form>
          </Modal.Body>
        </Modal>
      ) : (
        ""
      )}
        <Sidebar />
       { showText ? (
       <div class="container mb-5">
        <div className="row">
          <div class="d-flex justify-content-between mb-3">
            <div className="font-25 text-center font-demi text-primaryColor">
                Instructor Profile
            </div>
            <button class="btn btn-primary" onClick={handleShow}>
                Edit Instructor
            </button>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-12 col-12 ">
            <div className="py-3 bg-tertiaryColor">
              <div class="text-center">
                  <img src={baseUrl + instructorById?.img} alt="img" class="mb-3 img-fluid user-img" />
              </div>
            </div>
          </div>
          <div className="col-lg-9 col-md-8 col-sm-12 col-12">
          <div className="bg-tertiaryColor h-100 py-5 px-5">
            <div>
              <h3>Name</h3>
              <p className="font-20">{instructorById?.fullName}</p>
            </div>
            <div className="d-flex">
              <div>
              <h3>Email</h3>
              <p className="font-20">{instructorById?.email}</p>
              </div>
              <div className="px-5">
              <h3>Phone</h3>
              <p className="font-20">{instructorById?.phone}</p>
              </div>
            </div>
          </div>
          </div>
         </div>
        </div> ) : (
        ""
      )}
    </div>
  )
}