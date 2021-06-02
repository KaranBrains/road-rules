import { useState } from "react";
import Link from "next/link";

function ModePayment() {
  const initialState = { email: "", password: "" };
  const [formData, setformData] = useState(initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="auth-bg">
      <div className="container my-5">
        <div className="row d-flex justify-content-center">
          <div className="col-lg-6 col-md-8 col-sm-12 col-12">
            <div className="card shadow px-3 px-lg-5 py-5 bg-white">
              <h1 className="text-center font-bold text-primaryColor mb-4">
                Choose mode of Payment
              </h1>
              <form onSubmit={handleSubmit}>
                <div className="input-group">
                  <select
                    name="dialcode"
                    className="form-control"
                    value=""
                    onChange={(e) => {
                      setformData({
                        ...formData,
                        [e.target.name]: e.target.value,
                      });
                    }}
                  >
                    <option value="91">Cash</option>
                    <option value="221">Online</option>
                  </select>
                </div>
                <div className="text-center mt-5 mb-3">
                  <button
                    className="text-white bg-secondaryColor font-demi btn-blue w-100 submit-button"
                    type="submit"
                  >
                    Proceed
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModePayment;
