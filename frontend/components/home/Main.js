import styles from "./Home.module.css";
// import FullCalendar from "@fullcalendar/react";
// import dayGridPlugin from "@fullcalendar/daygrid";

function HomeMain() {
  const myEventsList = [
    {
      id: 1,
      color: "#fd3153",
      from: "2019-05-02T18:00:00+00:00",
      to: "2019-05-05T19:00:00+00:00",
      title: "This is an event",
    },
    {
      id: 2,
      color: "#1ccb9e",
      from: "2019-05-01T13:00:00+00:00",
      to: "2019-05-05T14:00:00+00:00",
      title: "This is another event",
    },
    {
      id: 3,
      color: "#3694DF",
      from: "2019-05-05T13:00:00+00:00",
      to: "2019-05-05T20:00:00+00:00",
      title: "This is also another event",
    },
  ];

  return (
    <>
      <div className={`${styles.home}`}>
        <div className="container">
          {/* <FullCalendar plugins={[dayGridPlugin]} initialView="dayGridMonth" /> */}
        </div>
      </div>
    </>
  );
}

export default HomeMain;
