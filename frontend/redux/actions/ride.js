import * as api from "../api";
import { CONFIRM_RIDE_CASH, GET_RIDE_BY_ID } from "../constants/index";
import swal from "sweetalert";
import jwt from "jwt-decode";

export const confirmRideCash = (slot ,router) => async (dispatch) => {
    try {
        const user = jwt(localStorage.getItem("token"));
        const formData = {
            slot : slot,
            client: user.id
        }
        const { data } = await api.confirmRideCash(formData);
        dispatch({ type: CONFIRM_RIDE_CASH, data });
        swal({
            text: "Ride Booked",
            icon: "success",
        });
        router.push('/ride-details/'+data._id)
    } catch (e) {
        console.log(e);
        swal({
            text: e.response?.data.msg,
            icon: "error",
        });
    }
};

export const getRideById = (id) => async (dispatch) => {
    try {
        const { data } = await api.getRideById(id);
        dispatch({ type: GET_RIDE_BY_ID, data });
    } catch (e) {
        console.log(e.response);
        swal({
            text: e.response?.data.msg,
            icon: "error",
        });
    }
};
  