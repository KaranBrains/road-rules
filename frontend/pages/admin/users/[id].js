import dynamic from 'next/dynamic';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useRouter } from "next/router";
import { UserById } from "../../../redux/actions/user";
import Link from "next/link";
const Sidebar = dynamic(() => import('../../../shared/sidebar/sidebar'), { ssr: false, loading: () => <div class="main-loader-div">
  <div class="loader">Loading...</div>
</div> });

export default function Users() {
  var i = 0;
  const dispatch = useDispatch();
  const router = useRouter();
  const id = router.query.id;

  useEffect(() =>{
    if(id !== undefined){
    dispatch(UserById(id));
    }
  },[id])

  const user = useSelector(state => state.user?.UsersById);
  console.log(user?.user?.address)

    return (
      <div>
        <Sidebar />
        <div class="container mb-5 padding-left-mobile-table">
        <h3 className="mb-4">User Details</h3>
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-12">
          <div className="bg-customColor h-100 py-5">
            <div>
            <input className="form-control bg-customColor font-20" value={user?.user?.fullName} disabled></input>
            </div>
            <div className="d-flex flex-column flex-lg-row flex-sm-column flex-md-column">
              <input className="form-control bg-customColor font-20" value={user?.user?.email} disabled></input>
              <input className="ml-2 form-control bg-customColor font-20" value={user?.user?.phone} disabled></input>
            </div>
          </div>
          </div>
         </div>
        </div>
        <div class="container padding-left-mobile-table">
          <h3>Rides</h3>
          <div class="row mb-5 mt-3 user-table table-responsive">
            <table class="table table-striped font-bold">
              <thead>
                <tr className="font-16  align-middle">
                  <th scope="col">S.No</th>
                  <th scope="col">Client</th>
                  <th scope="col">Instructor</th>
                  <th scope="col">Payment</th>  
                  <th scope="col">Status</th>   
                  <th scope="col">Ratings</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
              {user?.rides && user?.rides.length>0? (
                        user?.rides.map(val => {
                          i++;
                            return (
                              <tr className="font-demi align-middle" key={val._id}>
                              <td>{i}</td>
                              <td className="user-name">{val?.clientName}</td>
                              <td className="user-name">{val?.instructorName}</td>
                              <td>{val.modeOfPayment}</td>
                              <td>{val?.status}</td>
                              <td>{val.rating?(<span>{val.rating} &#9733;</span>):"No Ratings"}</td>
                              <td>
                              <Link href={'/admin/all-rides/'+val._id}>
                                <a>
                                <div class="btn btn-primary user-button" onClick={() => router.push('/admin/all-rides/'+[val._id])} >View Details</div>
                                </a>
                              </Link>
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
  