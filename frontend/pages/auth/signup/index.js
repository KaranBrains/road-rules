import { useState } from "react";
import Link from "next/link";
import styles from "../../../styles/Form.module.css";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { signUp } from "../../../redux/actions/auth";

function Signup() {
  const initialState = {
    fullName: "",
    email: "",
    password: "",
    phone: "",
    dialcode: "1",
  };
  const [formData, setformData] = useState(initialState);
  const dispatch = useDispatch();
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    formData.phone = formData.dialcode + formData.phone;
    dispatch(signUp(formData, router));
    localStorage.setItem("userProfile", JSON.stringify(formData));
    setformData(initialState);
  };

  return (
    <>
      <div className="container my-5">
        <div className="row d-flex justify-content-center">
          <div className="col-lg-8 col-md-8 col-sm-12 col-12">
            <div className="card">
              <h1 className="text-center font-bold text-primaryColor mb-4">
                Welcome to RideSharing, Signup here...
              </h1>
              <form onSubmit={handleSubmit}>
                <div className="input-group mt-4">
                  <input
                    value={formData.fullName}
                    onChange={(e) => {
                      setformData({
                        ...formData,
                        [e.target.name]: e.target.value,
                      });
                    }}
                    required
                    name="fullName"
                    type="text"
                    className="form-control"
                    placeholder="Full Name"
                  />
                </div>
                <div className="input-group mt-4">
                  <input
                    value={formData.email}
                    onChange={(e) => {
                      setformData({
                        ...formData,
                        [e.target.name]: e.target.value,
                      });
                    }}
                    required
                    name="email"
                    type="email"
                    className="form-control"
                    placeholder="Email"
                  />
                </div>
                <div className="input-group mt-4">
                  <div className="input-group-prepend">
                    <select
                      name="dialcode"
                      className={`${styles.formDropdown}`}
                      value={formData.dialcode}
                      onChange={(e) => {
                        setformData({
                          ...formData,
                          [e.target.name]: e.target.value,
                        });
                      }}
                    >
                      <option value="1" selected>
                        +1
                      </option>
                      <option value="91">+91</option>
                      <option value="221">+221</option>
                    </select>
                  </div>
                  <input
                    value={formData.phone}
                    onChange={(e) => {
                      setformData({
                        ...formData,
                        [e.target.name]: e.target.value,
                      });
                    }}
                    required
                    name="phone"
                    type="text"
                    className="form-control mt-1"
                    placeholder="Phone Number"
                  />
                </div>
                <div className="input-group mt-4">
                  <input
                    value={formData.password}
                    onChange={(e) => {
                      setformData({
                        ...formData,
                        [e.target.name]: e.target.value,
                      });
                    }}
                    required
                    name="password"
                    type="password"
                    className="form-control"
                    placeholder="Password"
                  />
                </div>
                <Link href="/auth/login">
                  <div
                    className={`font-demi text-primaryColor mt-4 py-3 px-3 ${styles.greyHover}`}
                  >
                    Already a member?{" "}
                    <span className="ml-2 text-secondaryColor">Signin</span>
                  </div>
                </Link>
                <div className="text-center mt-4">
                  <button
                    className="text-white bg-secondaryColor font-demi btn-blue submit-button"
                    type="submit"
                  >
                    Signup
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

export default Signup;
