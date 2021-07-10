import dynamic from "next/dynamic";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { Modal } from "react-bootstrap";
import { getChoose, updateChoose } from "../../../redux/actions/choose";
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
    point: "",
  };

  const chooseOptions = useSelector((state) => {
    return state.choose?.chooseData?.chooses;
  });
  useEffect(() => {
    dispatch(getChoose());
  }, [editFormData]);

  const handleEditShow = () => setEditModal(true);

  const EditSlot = (id, point) => {
    setEditFormData({
      id: id,
      point: point,
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
    dispatch(updateChoose(editFormData, router)).then(() => {
      handleEditClose();
    });
  };

  return (
    <div>
      <Head>
        <title>Admin | All Choices</title>
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
              <div className="font-bold ml-1">Edit a Choice</div>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form onSubmit={(e) => handleSubmitUpdate(editFormData.id, e)}>
              <div className="form-group mt-4">
                <label className="font-20 py-2">Choice</label>
                <textarea
                  required
                  value={editFormData.point}
                  onChange={(e) => {
                    setEditFormData({
                      ...editFormData,
                      [e.target.name]: e.target.value,
                    });
                  }}
                  name="point"
                  type="text"
                  className="form-control"
                  placeholder="Heading"
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
          <h3>Why Choose Us </h3>
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
              {chooseOptions && chooseOptions.length > 0
                ? chooseOptions.map((val) => {
                    i++;
                    return (
                      <tr className="font-demi align-middle" key={val._id}>
                        <td>{i}</td>
                        <th className="user-name">Point {i}</th>
                        <td>
                          <a>
                            <div
                              class="btn btn-primary user-button"
                              onClick={() => EditSlot(val._id, val.point)}
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
