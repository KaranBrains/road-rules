import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import RideCard from "../../components/rideCard/rideCard";

function MyRides() {
  const dispatch = useDispatch();
  let myRides = useSelector((state) => state.ride?.rideData?.clientRides);

  return (
    <>
      <div className="container home mt-3">
        <div className="row d-flex justify-content-center">
          <div className="col-lg-7 col-md-8 col-sm-2 col-12 mb-2 mt-2">
            <h5 className="text-secondaryColor">
              <span className="recent">All Rides</span>
            </h5>
            {myRides && myRides.length > 0 ? (
              myRides.map((r) => {
                return <RideCard ride={r} />;
              })
            ) : (
              <span className="mb-4">No Rides Available</span>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default MyRides;
