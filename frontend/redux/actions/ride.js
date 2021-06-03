import * as api from "../api";
import { CONFIRM_RIDE_CASH } from "../constants/index";
import swal from "sweetalert";
import jwt from "jwt-decode";

export const confirmRideCash = (slot) => async (dispatch) => {
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
    } catch (e) {
        console.log(e.response);
        swal({
            text: e.response?.data.msg,
            icon: "error",
        });
    }
};

  