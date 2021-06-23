import * as api from "../api";
import { GET_CHOOSE , UPDATE_CHOICE} from "../constants";
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

export const updateChoose = (formdata,router) => async (dispatch) => {
  try {
    const body = {
      point : formdata.point,
    }
    const { data } = await api.updateChoose(body,formdata.id);
    console.log(data);
    dispatch({ type: UPDATE_CHOICE, data });
  } catch (e) {
    console.log(e);
    swal({
      text: e.response?.data.msg,
      icon: "error",
    });
  }
};