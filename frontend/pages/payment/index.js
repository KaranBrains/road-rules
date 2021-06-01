import { useDispatch , useSelector} from "react-redux";
import {AddPayment} from "../../redux/actions/payment";

export default function Payments() {

  const dispatch = useDispatch();
  
  const handleClick = async (event) => {
    dispatch(AddPayment());
  };

  return(
    <button role="link" class="btn btn-primary" onClick={handleClick}>Checkout</button>
  )
}