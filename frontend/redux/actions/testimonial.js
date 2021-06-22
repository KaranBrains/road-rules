import * as api from "../api";
import { GET_TESTIMONIAL,UPDATE_TESTIMONIAL } from "../constants";
import swal from "sweetalert";

export const getTestimonial = () => async (dispatch) => {
  try {
    const { data } = await api.getTestimonial();
    dispatch({ type: GET_TESTIMONIAL, data });
  } catch (e) {
    swal({
      text: e.response?.data.msg,
      icon: "error",
    });
  }
};

export const updateTestimonial = (formdata,router) => async (dispatch) => {
  try {
    const body = {
      name : formdata.name,
      comment: formdata.comment
    }
    const { data } = await api.updateTestimonial(formdata.id,body);
    dispatch({ type: UPDATE_TESTIMONIAL, data });
  } catch (e) {
    console.log(e);
    swal({
      text: e.response?.data.msg,
      icon: "error",
    });
  }
};
