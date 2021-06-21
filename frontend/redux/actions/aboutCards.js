import * as api from "../api";
import { GET_ABOUT_CARDS } from "../constants";
import swal from "sweetalert";

export const getAboutCards = () => async (dispatch) => {
  try {
    const { data } = await api.getAboutCards();
    dispatch({ type: GET_ABOUT_CARDS, data });
  } catch (e) {
    swal({
      text: e.response?.data.msg,
      icon: "error",
    });
  }
};
