import * as api from "../api";
import { ADMIN_SLOT_ADD } from "../constants/index";
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
  