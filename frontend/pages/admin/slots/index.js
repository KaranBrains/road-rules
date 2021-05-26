import { useState } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import dynamic from 'next/dynamic';
const Sidebar = dynamic(() => import('../../../shared/sidebar/sidebar'), { ssr: false });
import { Modal } from "react-bootstrap";
import { AddSlot } from "../../../redux/actions/slot";

export default function Slots() {

  const initialState = { date: "", time: "", clientLimit: "", instructor:"", bookings:""};
  const [showModal, setShowModal] = useState(false);
  const [formData, setformData] = useState(initialState);
  const dispatch = useDispatch();
  const router = useRouter();

  const handleShow = () => setShowModal(true);
  const handleClose = () => {
    setShowModal(false);
    setformData(initialState);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(AddSlot(formData, router))
    .then(() =>{
      handleClose();
    });
    setformData(initialState);
  };


    return (
      <div>
      {showModal ? (
        <Modal className="mt-5 modal-card" show={showModal} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>
              <div className="font-bold ml-1">Add a Slot</div>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <form onSubmit={handleSubmit}>
                <div className="form-group mt-4">
                <label className="font-20 py-2">Date</label>
                  <input
                    required
                    value={formData.date}
                    onChange={(e) => {
                      setformData({
                        ...formData,
                        [e.target.name]: e.target.value,
                      });
                    }}
                    name="date"
                    type="date"
                    className="form-control"
                    placeholder="Date"
                  />
                </div>
                <div className="form-group mt-4">
                <label className="font-20 py-2">Time</label>
                  <input
                    required
                    value={formData.time}
                    onChange={(e) => {
                      setformData({
                        ...formData,
                        [e.target.name]: e.target.value,
                      });
                    }}
                    name="time"
                    type="time"
                    className="form-control"
                    placeholder="Time"
                  />
                </div>
                <div className="form-group mt-4">
                <label className="font-20 py-2">Client Limit</label>
                  <input
                    required
                    value={formData.clientLimit}
                    onChange={(e) => {
                      setformData({
                        ...formData,
                        [e.target.name]: e.target.value,
                      });
                    }}
                    name="clientLimit"
                    type="number"
                    className="form-control"
                    placeholder="Client Limit"
                  />
                </div>
                <div className="form-group mt-4">
                <label className="font-20 py-2">Instructor</label>
                  <input
                    required
                    value={formData.instructor}
                    onChange={(e) => {
                      setformData({
                        ...formData,
                        [e.target.name]: e.target.value,
                      });
                    }}
                    name="instructor"
                    type="text"
                    className="form-control"
                    placeholder="Instructor"
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
          <h3>Slots</h3>
          <button class="btn btn-primary" onClick={handleShow}>
                Add Slots
              </button>
          <div class="row mb-5 mt-3 user-table">
            <table class="table table-striped font-bold table-responsive-sm">
              <thead>
                <tr className="font-16">
                  <th scope="col">Date</th>
                  <th scope="col">Time</th>    
                  <th scope="col">Client Limit</th>
                  <th scope="col">Instructor</th>  
                  <th scope="col">Bookings</th>   
                </tr>
              </thead>
              <tbody>
              <tr className="font-demi">
                  <td>11/10/19</td>
                  <td>09:10</td>
                  <td>4</td>
                  <td>Abhi</td>
                  <td>2</td>
                  <td><button class="btn btn-danger">Remove</button></td>
              </tr>   
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
  