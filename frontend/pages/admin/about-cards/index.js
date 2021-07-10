import dynamic from 'next/dynamic';
import { useState, useEffect } from "react";
import { useDispatch , useSelector} from "react-redux";
import { useRouter } from "next/router";
import { Modal } from "react-bootstrap";
import { getAboutCards,updateAboutCards } from "../../../redux/actions/aboutCards";
import Link from "next/link";
import Head from "next/head";

const Sidebar = dynamic(() => import('../../../shared/sidebar/sidebar'), { ssr: false, loading: () => <div class="main-loader-div">
  <div class="loader">Loading...</div>
</div> });

export default function AllRides() {
  var i = 0;
  const dispatch = useDispatch();
  const router = useRouter();
  const [editModal, setEditModal] = useState(false);
  const [editFormData, setEditFormData] = useState(setInitialState);
  const setInitialState = {
    id : "",
    subHeading : "",
    text : ""
  }

  useEffect(() =>{
    dispatch(getAboutCards());
  },[editFormData])

  const handleEditShow = () => setEditModal(true);

  const EditSlot = (id,subHeading,text) => {
    setEditFormData({
      id: id,
      subHeading: subHeading,
      text: text
      // price: price
    })
    handleEditShow();
  }
  const handleEditClose = () => {
    setEditModal(false);
    setEditFormData(setInitialState);
  }

  const aboutCards = useSelector((state) => {
    return state.aboutCards?.aboutCardsData?.aboutCards;
  });

  const handleSubmitUpdate = (id,e) => {
    e.preventDefault();
    dispatch(updateAboutCards(editFormData,router))
    .then(()=>{
      handleEditClose();
    });
  };


  return (
      <div>
        <Head>
        <title>Admin | About Cards</title>
      </Head>
        <Sidebar />
        {editModal ? (
        <Modal className="mt-5 modal-card" show={editModal} onHide={handleEditClose}>
          <Modal.Header closeButton>
            <Modal.Title>
              <div className="font-bold ml-1">Edit a Slot</div>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <form onSubmit={(e) =>handleSubmitUpdate(editFormData.id,e)}>
                <div className="form-group mt-4">
                <label className="font-20 py-2">Heading</label>
                  <input
                    required
                    value={editFormData.subHeading}
                    onChange={(e) => {
                      setEditFormData({
                        ...editFormData,
                        [e.target.name]: e.target.value,
                      });
                    }}
                    name="subHeading"
                    type="text"
                    className="form-control"
                    placeholder="Heading"
                  />
                </div>
                <div className="form-group mt-4">
                <label className="font-20 py-2">Text</label>
                  <textarea
                    required
                    value={editFormData.text}
                    onChange={(e) => {
                      setEditFormData({
                        ...editFormData,
                        [e.target.name]: e.target.value,
                      });
                    }}
                    name="text"
                    type="text"
                    className="form-control"
                    placeholder="Text"
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
          <h3>About Cards</h3>
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
              {aboutCards && aboutCards.length > 0? (
                        aboutCards.map(val => {
                          i++;
                            return (
                              <tr className="font-demi align-middle" key={val._id}>
                              <td>{i}</td>
                              <th className="user-name">{val?.subHeading}</th>
                              <td>
                                <a>
                                <div class="btn btn-primary user-button" onClick={()=>EditSlot(val._id,val.subHeading,val.text)}>Edit</div>
                                </a>
                              </td>
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
