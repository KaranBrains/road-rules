import { useEffect } from "react";
import { Calendar, momentLocalizer, Views } from "react-big-calendar";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { AllSlots } from "../../redux/actions/slot";


function MyCalendar() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(AllSlots());
  }, []);

  const now = new Date();
  const myEventsList = [];
  const allSlots = useSelector((state) => state.slot?.slotData?.slots);
  if (allSlots) {
    const filterSlots = allSlots.map((slot) =>
      myEventsList.push({
        id: slot.id,
        start: new Date(slot.date),
        end: new Date(slot.date),
        title: slot.time,
      })
    );
  }

  const localizer = momentLocalizer(moment);
  let allViews = Object.keys(Views).map((k) => Views[k]);
  allViews.pop();
  
  return (
    <div className="container my-5 text-primaryColor font-bold" id="#home">
      <Calendar
        views={allViews}
        localizer={localizer}
        events={myEventsList}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
      />
    </div>
  );
}

export default MyCalendar;
