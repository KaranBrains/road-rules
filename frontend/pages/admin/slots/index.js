import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import dynamic from 'next/dynamic';
import { Modal } from "react-bootstrap";
import { AddSlot, AllSlots, RemoveSlot, UpdateSlot } from "../../../redux/actions/slot";
import { AllInstructor } from "../../../redux/actions/instructor";
const Sidebar = dynamic(() => import('../../../shared/sidebar/sidebar'), { ssr: false, loading: () => <div class="main-loader-div">
  <div class="loader">Loading...</div>
</div> });

export default function Slots() {
  let i = 0;
  const initialState = { date: "", time: "", clientLimit: "", instructor: "", bookings:""};
  const [showModal, setShowModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [formData, setformData] = useState(initialState);
  const dispatch = useDispatch();
  const router = useRouter();

  const setInitialState = {
    id : "",
    date: "", 
    time: "", 
    clientLimit: "", 
    instructor:"",
  }

  const [editFormData, setEditFormData] = useState(setInitialState);

  const handleShow = () => setShowModal(true);
  const handleClose = () => {
    setShowModal(false);
    setformData(initialState);
  }

  const handleEditShow = () => setEditModal(true);

  const EditSlot = (id,date,time,clientLimit,instructor) => {
    setEditFormData({ 
      id: id,
      date: date,
      time: time, 
      clientLimit: clientLimit, 
      instructor: instructor
    })
    handleEditShow();
  }

  const handleEditClose = () => {
    setEditModal(false);
    setEditFormData(setInitialState);
  }

  useEffect(() =>{
    dispatch(AllInstructor());
    dispatch(AllSlots());
  },[])

  const allInstructors = useSelector(state => state.instructor?.AllData?.instructors)
  const allSlots = useSelector(state => state.slot?.slotData?.slots);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData)
    dispatch(AddSlot(formData, router))
    .then(() =>{
      handleClose();
      dispatch(AllSlots());
    });
    setformData(initialState);
  };

  const handleSubmitUpdate = (id,e) => {
    e.preventDefault();
    dispatch(UpdateSlot(id, editFormData))
    .then(() =>{
      handleEditClose();
      dispatch(AllSlots());
    });
    setEditFormData(setInitialState);
  };

  const deleteSlot = (id) => {
    dispatch(RemoveSlot(id))
    .then(() =>{
      dispatch(AllSlots());
    });
  }

    return (
      <div>
        {editModal ? (
        <Modal className="mt-5 modal-card" show={editModal} onHide={handleEditClose}>
          <Modal.Header closeButton>
            <Modal.Title>
              <div className="font-bold ml-1">Edit a Slot</div>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <form onSubmit={() =>handleSubmitUpdate(editFormData.id,event)}>
                <div className="form-group mt-4">
                <label className="font-20 py-2">Date</label>
                  <input
                    required
                    value={editFormData.date}
                    onChange={(e) => {
                      setEditFormData({
                        ...editFormData,
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
                    value={editFormData.time}
                    onChange={(e) => {
                      setEditFormData({
                        ...editFormData,
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
                    value={editFormData.clientLimit}
                    onChange={(e) => {
                      setEditFormData({
                        ...editFormData,
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
                <select
                    name="instructor"
                    value={editFormData.instructor}
                    onChange={(e) => {
                      setEditFormData({
                        ...editFormData,
                        [e.target.name]: e.target.value,
                      });
                    }}
                    className="form-control"
                    required
                  >
                    {allInstructors && allInstructors.length>0 ? 
                    allInstructors.map((c,i)=>{
                       return <option value={c._id} key={i}>{c.fullName}</option>
                    }): ''}
                  </select>
                </div>
                <div className="text-center mt-5">
                  <button
                    className="text-white bg-secondaryColor font-demi btn-blue submit-button"
                    type="submit"
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
                <select
                    name="instructor"
                    value={formData.instructor}
                    onChange={(e) => {
                      setformData({
                        ...formData,
                        [e.target.name]: e.target.value,
                      });
                    }}
                    className="form-control"
                    required
                  >
                    <option className="hidden" value=""></option>
                    {allInstructors && allInstructors.length>0 ? 
                    allInstructors.map((c,i)=>{
                       return <option value={c._id} key={i}>{c.fullName}</option>
                    }): ''}
                  </select>
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
        <div class="d-flex justify-content-between align-items-center">
          <h3>Slots</h3>
          <button class="btn btn-primary" onClick={handleShow}>
            Add Slots
          </button>
        </div>
          <div class="row mb-5 mt-3 user-table table-responsive">
            <table class="table table-striped font-bold">
              <thead>
                <tr className="font-16 align-middle">
                  <th scope="col">S.No</th>
                  <th scope="col">Date</th>
                  <th scope="col">Time</th>    
                  <th scope="col">Client Limit</th>
                  <th scope="col">Instructor</th>  
                  <th scope="col">Bookings</th>   
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
              {allSlots? (
                        allSlots.map(val => {
                          i++;
                            return (
                              <tr className="font-demi align-middle" key={val._id}>
                               <td>{i}</td>
                               <td>{val.date}</td>
                               <td>{val.time}</td>
                               <td>{val.clientLimit}</td>
                               <td>{val.instructor}</td>
                               <td>{val.bookings}</td>
                               <td><button class="btn btn-primary" onClick={() => EditSlot(val._id, val.date, val.time, val.clientLimit , val.instructor)}>Edit</button></td>
                               <td><button class="btn btn-danger" onClick={() => deleteSlot(val._id)}>Remove</button></td>
                              </tr>
                            )
                       })
                ) : (
                      ''
                    )}   
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
  