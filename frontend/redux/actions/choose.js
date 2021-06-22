import * as api from "../api";
import { GET_CHOOSE } from "../constants";
import swal from "sweetalert";

export const getChoose = () => async (dispatch) => {
  try {
    const { data } = await api.getChoose();
    dispatch({ type: GET_CHOOSE, data });
  } catch (e) {
    swal({
      text: e.response?.data.msg,
      icon: "error",
    });
  }
};
