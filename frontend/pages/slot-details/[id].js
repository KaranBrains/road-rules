import { useEffect } from "react";
import { useDispatch , useSelector} from "react-redux";
import { useRouter } from "next/router";
import { GetSlotById } from "../../redux/actions/slot";

export default function InstructorId() {

    const dispatch = useDispatch();
    const router = useRouter();
    const id = router.query.id;
    const slot = useSelector(state => {return state.slot?.slot?.slot});
    useEffect(() =>{
        const id = router.query.id;
        if(id) {
            dispatch(GetSlotById(id))
        }
    },[id])
    const openModal = ()=>{
        router.push("/confirm-address/"+id)
    }

    return(
        slot ? (
                <>
                    <div className="container">
                    <div className="row d-flex justify-content-center">
                        <div className="col-lg-7 col-md-8 col-sm-2 col-12">
                        <div className="card">
                            <h2
                            className="card my-2 text-primaryColor text-center font-bold"
                            style={{ fontSize: "35px" }}
                            >
                             Slot Details
                            </h2>
                            <hr className="grey-hr" />
                            <div className="d-flex justify-content-between px-3 mt-1">
                            <div className="text-muted font-demi font-18">
                                Instructor
                            </div>
                            <div className="text-primaryColor font-bold font-18">
                                {slot.instructorName}
                            </div>
                            </div>
                            <div className="d-flex justify-content-between px-3 mt-3 mb-1">
                            <div className="text-muted font-demi font-18">
                                Price
                            </div>
                            <div className="text-green font-bold font-18">
                                &#36;500
                            </div>
                            </div>
                            <hr className="grey-hr" />
                        </div>
                        <div className="text-center mt-4 mb-5">
                            <button className="text-white bg-secondaryColor font-demi btn-blue submit-button" onClick={openModal}>
                            Continue
                            </button>
                        </div>
                        </div>
                    </div>
                    </div>
                </>
            ) : ''
    )
}