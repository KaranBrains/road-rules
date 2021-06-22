import * as api from "../api";
import { GET_ABOUT_CARDS ,UPDATE_ABOUT_CARDS} from "../constants";
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

export const updateAboutCards = (formdata,router) => async (dispatch) => {
  try {
    const body = {
      subHeading : formdata.subHeading,
      text: formdata.text
    }
    console.log(formdata)
    const { data } = await api.updateAboutCards(formdata.id,body);
    dispatch({ type: UPDATE_ABOUT_CARDS, data });
  } catch (e) {
    console.log(e);
    swal({
      text: e.response?.data.msg,
      icon: "error",
    });
  }
};
