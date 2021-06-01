import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";

function MyCalendar() {
  const localizer = momentLocalizer(moment);
  const myEventsList = [
    {
      id: 1,
      color: "#00000",
      from: "2021-05-05T18:00:00+00:00",
      to: "2021-05-06T19:00:00+00:00",
      title: "This is an event",
    },
    {
      id: 2,
      color: "#1ccb9e",
      from: "2021-05-07T13:00:00+00:00",
      to: "2021-05-08T14:00:00+00:00",
      title: "This is another event",
    },
    {
      id: 3,
      color: "#3694DF",
      from: "2021-05-12T13:00:00+00:00",
      to: "2021-05-21T20:00:00+00:00",
      title: "This is also another event",
    },
  ];

  return (
    <div className="container my-5 text-primaryColor font-bold" id="#home">
      <Calendar
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
