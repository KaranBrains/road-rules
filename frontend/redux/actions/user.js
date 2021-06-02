import * as api from "../api";
import { ALL_USERS } from "../constants/index";
import swal from "sweetalert";

export const AllUser = () => async (dispatch) => {
    try {
      const { data } = await api.allUser();
      dispatch({ type: ALL_USERS, data });
    } catch (e) {
      console.log(e.response);
      swal({
        text: e.response.data.msg,
        icon: "error",
    });
  }
  };
  