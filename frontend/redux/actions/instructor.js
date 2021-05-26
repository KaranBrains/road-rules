import * as api from "../api";
import { ADMIN_INSTRUCTOR_ADD } from "../constants/index";
import swal from "sweetalert";

export const AddInstructor = (formData, router) => async (dispatch) => {
    try {
      const { data } = await api.addInstructor(formData);
      dispatch({ type: ADMIN_INSTRUCTOR_ADD, data });
      console.log(data);
      swal({
        text: "Instructor Added",
        icon: "success",
      });
      router.push("/admin/instructor");
    } catch (e) {
      console.log(e.response);
      swal({
        text: "Error Occured",
        icon: "error",
      });
    }
  };
  