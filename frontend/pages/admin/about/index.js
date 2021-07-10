import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { Stepper } from "react-form-stepper";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { about, updateAbout } from "../../../redux/actions/auth";
import Head from "next/head";

const Sidebar = dynamic(() => import("../../../shared/sidebar/sidebar"), {
  ssr: false,
  loading: () => (
    <div class="main-loader-div">
      <div class="loader">Loading...</div>
    </div>
  ),
});

function ConfirmAddress() {
  const [text, setText] = useState("");

  const dispatch = useDispatch();
  const router = useRouter();
  const aboutFe = useSelector((state) => {
    return state.main?.authData?.about;
  });

  useEffect(() => {
    dispatch(about());
  }, []);

  const handleSubmit = () => {
    dispatch(updateAbout(text));
  };

  return (
    <>
      <Head>
        <title>Admin | About</title>
      </Head>
      <Sidebar />
      <div className="container my-5">
        <div className="row d-flex justify-content-center">
          <div className="col-lg-6 col-md-8 col-sm-12 col-12">
            <div className="card shadow px-lg-5 py-5 px-3 bg-white">
              <h1 className="text-center font-bold text-primaryColor mb-4">
                About
              </h1>
              <form onSubmit={handleSubmit}>
                <div className="mt-4">
                  <textarea
                    value={text ? text : aboutFe?.text}
                    onChange={(e) => {
                      setText(e.target.value);
                    }}
                    required
                    cols="10"
                    style={{ height: "200px" }}
                    name="about"
                    className="form-control"
                  />
                </div>
                <div className="text-center mt-5 mb-3">
                  <button
                    className="text-white bg-secondaryColor font-demi btn-blue w-100 submit-button"
                    type="submit"
                  >
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ConfirmAddress;
