import dynamic from "next/dynamic";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { Modal } from "react-bootstrap";
import {
  getTestimonial,
  updateTestimonial,
} from "../../../redux/actions/testimonial";
import Link from "next/link";
import Head from "next/head";

const Sidebar = dynamic(() => import("../../../shared/sidebar/sidebar"), {
  ssr: false,
  loading: () => (
    <div class="main-loader-div">
      <div class="loader">Loading...</div>
    </div>
  ),
});

export default function AllRides() {
  var i = 0;
  const dispatch = useDispatch();
  const router = useRouter();
  const [editModal, setEditModal] = useState(false);
  const [editFormData, setEditFormData] = useState(setInitialState);
  const setInitialState = {
    id: "",
    name: "",
    comment: "",
  };

  const testimonialOptions = useSelector((state) => {
    return state.testimonial?.testimonialData?.testimonials;
  });
  useEffect(() => {
    dispatch(getTestimonial());
  }, [editFormData]);

  const handleEditShow = () => setEditModal(true);

  const EditSlot = (id, name, comment) => {
    setEditFormData({
      id: id,
      name: name,
      comment: comment,
      // price: price
    });
    handleEditShow();
  };
  const handleEditClose = () => {
    setEditModal(false);
    setEditFormData(setInitialState);
  };

  const handleSubmitUpdate = (id, e) => {
    e.preventDefault();
    dispatch(updateTestimonial(editFormData, router)).then(() => {
      handleEditClose();
    });
  };

  return (
    <div>
      <Head>
        <title>Admin | Testimonials</title>
      </Head>
      <Sidebar />
      {editModal ? (
        <Modal
          className="mt-5 modal-card"
          show={editModal}
          onHide={handleEditClose}
        >
          <Modal.Header closeButton>
            <Modal.Title>
              <div className="font-bold ml-1">Edit a Testimonial</div>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form onSubmit={(e) => handleSubmitUpdate(editFormData.id, e)}>
              <div className="form-group mt-4">
                <label className="font-20 py-2">Heading</label>
                <input
                  required
                  value={editFormData.name}
                  onChange={(e) => {
                    setEditFormData({
                      ...editFormData,
                      [e.target.name]: e.target.value,
                    });
                  }}
                  name="name"
                  type="text"
                  className="form-control"
                  placeholder="Heading"
                />
              </div>
              <div className="form-group mt-4">
                <label className="font-20 py-2">Comment</label>
                <textarea
                  required
                  value={editFormData.comment}
                  onChange={(e) => {
                    setEditFormData({
                      ...editFormData,
                      [e.target.name]: e.target.value,
                    });
                  }}
                  name="comment"
                  type="text"
                  className="form-control"
                  placeholder="Comment"
                />
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
      <div class="container padding-left-mobile-table">
        <div class="d-flex justify-content-between align-items-center">
          <h3>Testimonials</h3>
        </div>
        <div class="row mb-5 mt-3 user-table table-responsive">
          <table class="table table-striped font-bold">
            <thead>
              <tr className="font-16  align-middle">
                <th scope="col">S.No</th>
                <th scope="col">Name</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {testimonialOptions && testimonialOptions.length > 0
                ? testimonialOptions.map((val) => {
                    i++;
                    return (
                      <tr className="font-demi align-middle" key={val._id}>
                        <td>{i}</td>
                        <th className="user-name">{val?.name}</th>
                        <td>
                          <a>
                            <div
                              class="btn btn-primary user-button"
                              onClick={() =>
                                EditSlot(val._id, val.name, val.comment)
                              }
                            >
                              Edit
                            </div>
                          </a>
                        </td>
                      </tr>
                    );
                  })
                : ""}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
