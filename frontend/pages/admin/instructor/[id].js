import { useState, useContext, useEffect } from "react";
import { useDispatch , useSelector} from "react-redux";
import { ReactReduxContext } from 'react-redux'
import { useRouter } from "next/router";
import { Modal } from "react-bootstrap";
import { GetInstructorById } from "../../../redux/actions/instructor";
import {baseUrl} from "../../../redux/api/index"
import dynamic from 'next/dynamic';
const Sidebar = dynamic(() => import('../../../shared/sidebar/sidebar'), { ssr: false });

export default function InstructorId(){

  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() =>{
    // dispatch(GetInstructorById(router.asPath.slice(18)));
    dispatch(GetInstructorById(router.query.id));
    console.log(router.query.id)
  },[])

  const instructorById = useSelector(state => state.instructor?.instructorById?.instructor);
  // console.log(instructorById);

    return(
      <div>
        <Sidebar />
        <div class="container mb-5">
        <div className="row">
          <div className="col-lg-3 col-md-4 col-sm-12 col-12 ">
            <div className="py-3 bg-tertiaryColor">
              <div className="font-25 text-center mb-3 font-demi text-primaryColor">
                Instructor Profile
              </div>
              <div class="text-center">
                  <img src={baseUrl + instructorById.img} alt="img" class="mb-3 img-fluid user-img" />
              </div>
            </div>
          </div>
          <div className="col-lg-9 col-md-8 col-sm-12 col-12">
          <div className="bg-tertiaryColor h-100 py-5 px-5">
            <div>
              <h3>Name</h3>
              <p className="font-20">{instructorById.fullName}</p>
            </div>
            <div className="d-flex">
              <div>
              <h3>Email</h3>
              <p className="font-20">{instructorById.email}</p>
              </div>
              <div className="px-5">
              <h3>Phone</h3>
              <p className="font-20">{instructorById.phone}</p>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}