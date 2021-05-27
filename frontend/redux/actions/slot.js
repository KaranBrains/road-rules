import * as api from "../api";
import { ADMIN_SLOT_ADD, ADMIN_ALL_SLOT, ADMIN_REMOVE_SLOT } from "../constants/index";
import swal from "sweetalert";

export const AddSlot = (formData, router) => async (dispatch) => {
    try {
      const { data } = await api.addSlot(formData);
      dispatch({ type: ADMIN_SLOT_ADD, data });
      console.log(data);
      swal({
        text: "Slot Added",
        icon: "success",
      });
      router.push("/admin/slots");
    } catch (e) {
      console.log(e.response);
      swal({
        text: e.response.data.msg,
        icon: "error",
      });
    }
};

export const AllSlots = () => async (dispatch) => {
  try {
    const { data } = await api.allSlot();
    dispatch({ type: ADMIN_ALL_SLOT, data });
  } catch (e) {
    console.log(e.response);
    swal({
      text:"Error",
      icon: "error",
  });
}
};

export const RemoveSlot = (id) => async (dispatch) => {
  try {
    const { data } = await api.removeSlot(id);
    dispatch({ type: ADMIN_REMOVE_SLOT, data });
    swal({
      text: "Slot Removed",
      icon: "success",
    });
  } catch (e) {
    console.log(e.response);
    swal({
      text:"Error",
      icon: "error",
  });
}
};


  