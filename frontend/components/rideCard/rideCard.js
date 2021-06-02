import React from "react";
import Link from "next/link";

function RideCard(props) {
  return (
    <>
      <div className="container mb-2">
        <div className="row d-flex justify-content-center">
          <div className="w-100">
            <div className="card">
              <div
                className="card mt-4 ride-card text-primaryColor font-medium p-3 font-18"
                style={{ borderRadius: "10px" }}
              >
                <div className="row ">
                  <div className="col-lg-9 col-md-8 col-sm-8 col-8">
                    <div className="font-bold text-green">
                      {props?.ride?.date} {props?.ride?.time}
                    </div>
                    <hr className="my-2" />
                    <div className="row ">
                      <div className="col-lg-1 col-md-1 col-sm-1 col-1">
                        <div className="circle-ride-from"></div>
                        <div className="line-ride"></div>
                        <div className="circle-ride-to"></div>
                      </div>
                      <div className="col-lg-10 col-md-10 col-sm-10 col-10 px-0">
                        <div
                          style={{ marginTop: "-6px" }}
                          className="text-orange"
                        >
                          {props?.ride?.from}
                          <br />
                          <div className="font-regular">
                            {props?.ride?.pickup}
                          </div>
                        </div>
                        <div></div>
                        <div
                          style={{ marginTop: "20px" }}
                          className="text-primary"
                        >
                          {props?.ride?.to} <br />
                          <div className="font-regular">
                            {props?.ride?.drop}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-4 col-sm-4 col-4 text-primaryColor font-bold">
                    <div className="d-flex justify-content-end text-muted">
                      &#36;{props?.ride?.price}
                    </div>
                    <Link href={"/client/ride-details?id=" + props?.ride?._id}>
                      <div className="text-center mt-2 d-flex justify-content-end  ">
                        <button
                          className="text-white bg-secondaryColor font-demi rounded"
                          style={{ border: "none" }}
                        >
                          Details
                        </button>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default RideCard;
