import dynamic from 'next/dynamic';
import { useState, useEffect } from "react";
import { useDispatch , useSelector} from "react-redux";
import { useRouter } from "next/router";
import { Modal } from "react-bootstrap";
import { AllRidesDetails } from "../../../redux/actions/rides";
import Link from "next/link";
const Sidebar = dynamic(() => import('../../../shared/sidebar/sidebar'), { ssr: false, loading: () => <div class="main-loader-div">
  <div class="loader">Loading...</div>
</div> });

export default function AllRides() {
  var i = 0;
  const dispatch = useDispatch();

  useEffect(() =>{
    dispatch(AllRidesDetails());
  },[])

  const allRides = useSelector(state => state.rides?.AllRides?.allRides);
  console.log(allRides);
    return (
      <div>
        <Sidebar />
        <div class="container padding-left-mobile-table">
          <div class="d-flex justify-content-between align-items-center">
          <h3>All Rides</h3>
          </div>
          <div class="row mb-5 mt-3 user-table table-responsive">
            <table class="table table-striped font-bold">
              <thead>
                <tr className="font-16  align-middle">
                  <th scope="col">S.No</th>
                  <th scope="col">Client</th>    
                  <th scope="col">Instructor</th>
                  <th scope="col">Slot</th>  
                  <th scope="col">Status</th>   
                  <th scope="col">Payment Mode</th>   
                  <th scope="col">Feedback</th> 
                  <th scope="col">Ratings</th> 
                  <th scope="col">Action</th>  
                  <th scope="col">Refund</th>             
                </tr>
              </thead>
              <tbody>
              {allRides && allRides.length > 0? (
                        allRides.map(val => {
                          i++;
                            return (
                              <tr className="font-demi align-middle" key={val._id}>
                              <td>{i}</td>
                              <td className="user-name">{val.clientName}</td>
                              <td>{val.instructorName}</td>
                              <td>{val.slot}</td>
                              <td>{val.status}</td>
                              <td>{val.modeOfPayment}</td>
                              <td>{val.feedback}</td>
                              <td>{val.rating}</td>
                              <td>
                              <Link href={'/admin/all-rides/'+val._id}>
                                <a>
                                <div class="btn btn-primary user-button" onClick={() => router.push('/admin/all-rides/'+[val._id])} >View Details</div>
                                </a>
                              </Link>
                              </td>
                              <td><div class="btn btn-danger" >Refund</div></td>
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
  