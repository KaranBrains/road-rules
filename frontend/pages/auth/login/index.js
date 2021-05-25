import { useState } from "react";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { signIn } from "../../../redux/actions/auth";
import styles from "../../../styles/Form.module.css";

function Login() {
  const initialState = { email: "", password: "" };
  const [formData, setformData] = useState(initialState);
  const dispatch = useDispatch();
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signIn(formData, router));
    setformData(initialState);
  };

  return (
    <>
      <div className="container my-5">
        <div className="row d-flex justify-content-center">
          <div className="col-lg-8 col-md-8 col-sm-12 col-12">
            <div className="card">
              <h1 className="text-center font-bold text-primaryColor mb-4">
                Sign in to your account
              </h1>
              <form onSubmit={handleSubmit}>
                <div className="input-group mt-4">
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
                    type="text"
                    className="form-control"
                    placeholder="Email/Number"
                  />
                </div>
                <div className="input-group mt-4">
                  <input
                    required
                    value={formData.password}
                    onChange={(e) => {
                      setformData({
                        ...formData,
                        [e.target.name]: e.target.value,
                      });
                    }}
                    name="password"
                    type="password"
                    className="form-control"
                    placeholder="Password"
                  />
                </div>
                <div className="d-flex justify-content-between">
                  <Link href="/client/signup">
                    <div
                      className={`font-demi text-primaryColor mt-4 py-3 px-3 ${styles.greyHover}`}
                    >
                      Become a member{" "}
                      <span className="ml-2 text-secondaryColor">Signup</span>
                    </div>
                  </Link>
                  <Link href="/forgot">
                    <p
                      className={`text-secondaryColor font-demi mt-4 py-3 px-3 ${styles.greyHover}`}
                    >
                      Forgot Password
                    </p>
                  </Link>
                </div>
                <div className="text-center mt-5">
                  <button
                    className="text-white bg-secondaryColor font-demi btn-blue submit-button"
                    type="submit"
                  >
                    Signin
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

export default Login;
