import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { getUserByEmail } from "../../redux/actions/auth";
import { useDispatch, useSelector } from "react-redux";

function Address() {
  const dispatch = useDispatch();
  let user = useSelector((state) => state.main?.authData?.user);
  useEffect(() => {
    dispatch(getUserByEmail());
  }, []);
  console.log("abc");
  console.log(user?.address);
  const router = useRouter();
  const handleChange = () => {
    router.push("/add-new-address/address");
  };
  return (
    <div className="auth-bg">
      <div className="container">
        <h1 className="text-primaryColor font-bold text-center">
          Add Address{" "}
          <button onClick={handleChange} className="btn">
            <div className="text-primaryColor bg-white">
              <i className="fas fa-2x fa-plus"></i>
            </div>
          </button>
        </h1>
        <div className="row my-5 d-flex justify-content-center">
          <div className="col-lg-9 col-md-8 col-sm-12 col-12">
            <form>
              {user?.address.map((add) => (
                <>
                  <div className="bg-tertiaryColor h-100 py-5 px-3 mb-3">
                    <div className="input-group font-medium mt-3">
                      <input
                        required
                        name="Name"
                        type="text"
                        value={add?.city}
                        className="form-control"
                        disabled
                      />
                    </div>
                    <div className="d-flex">
                      {" "}
                      <div
                        className="input-group font-medium mt-3 w-50"
                        style={{ marginRight: "20px" }}
                      >
                        <input
                          required
                          name="Name"
                          type="text"
                          value={add?.house}
                          className="form-control"
                          disabled
                        />
                      </div>
                      <div className="input-group font-medium mt-3 w-50">
                        <input
                          required
                          name="Name"
                          type="text"
                          value={add?.pincode}
                          className="form-control"
                          disabled
                        />
                      </div>
                    </div>

                    <div className="input-group font-medium mt-3">
                      <input
                        required
                        name="Name"
                        type="text"
                        value={add?.province}
                        className="form-control"
                        disabled
                      />
                    </div>
                  </div>
                </>
              ))}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Address;
