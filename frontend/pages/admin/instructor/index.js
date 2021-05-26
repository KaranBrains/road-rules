import dynamic from 'next/dynamic';
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
const Sidebar = dynamic(() => import('../../../shared/sidebar/sidebar'), { ssr: false });
import { Modal } from "react-bootstrap";
import { AddInstructor } from "../../../redux/actions/instructor";

export default function Instructor() {

  const initialState = { fullName: "", img: "", phone: "", email:""};
  const [showModal, setShowModal] = useState(false);
  const [formData, setformData] = useState(initialState);
  const [fileOneValue, setFileOneValue] = useState('');
  const [fileOne, setFileOne] = useState("");
  const dispatch = useDispatch();
  const router = useRouter();

  const handleShow = () => setShowModal(true);
  const handleClose = () => {
    setShowModal(false);
    setformData(initialState);
    setFileOne("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(AddInstructor(formData, router))
    .then(() =>{
      handleClose();
    }).catch(() =>{
      console.log("Error")
    });
    setformData(initialState);
    setFileOne("");
  };

  const toBase64 = file => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
});

    return (
      <div>
      {showModal ? (
        <Modal className="mt-5 modal-card" show={showModal} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>
              <div className="font-bold ml-1">Add a Instructor</div>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <form onSubmit={handleSubmit}>
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
                  <button className="font-20 font-bold bg-tertiaryColor w-100 mt-2" onClick={()=>document.getElementById('upload')?.click()}>Upload</button>
                  <input
                    onChange={(e) =>{
                      setFileOne(URL.createObjectURL(e.target.files[0]));
                      toBase64(e.target.files[0]).then(res=>{
                        setFileOneValue(res);
                        console.log(res);
                        setformData({
                          ...formData,
                          img: res
                        });
                      })
                      console.log(formData);
                    }}
                    type="file"
                    class="hidden"
                    id="upload"
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
                  >
                    Submit
                  </button>
                </div>
              </form>
          </Modal.Body>
        </Modal>
      ) : (
        ""
      )}
        <Sidebar />
        <div class="container padding-left-mobile">
          <h3>Instructor</h3>
          <button class="btn btn-primary" onClick={handleShow}>
                Add Instructor
              </button>
          <div class="row mb-5 mt-3 user-table">
            <table class="table table-striped font-bold table-responsive-sm">
              <thead>
                <tr className="font-16">
                  <th scope="col">S.No</th>
                  <th scope="col">Image</th>    
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>  
                  <th scope="col">Phone</th>   
                  <th scope="col">Ratings</th>                    
                </tr>
              </thead>
              <tbody>
              <tr className="font-demi">
                  <td>1</td>
                  <td><img></img></td>
                  <td>Ayush</td>
                  <td>ayush@gmail.com</td>
                  <td>9335639735</td>
                  <td>4/5</td>
                  <td><button class="btn btn-danger">Remove</button></td>
              </tr>   
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
  