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
        <div className="container" style={{ height: "80vh" }}>
          <div className="row center h-100">
            <div className="col-lg-7 col-md-8 col-sm-12 col-12">
              <div className="card bg-white shadow py-5 px-3 px-lg-5">
              <div className="d-flex justify-content-end">
                  <div className="text-center">
                    <button
                      className="text-white bg-secondaryColor font-demi px-5 btn-blue submit-button"
                      type="submit"
                    >
                      View All
                    </button>
                  </div>
                </div>
                <hr />
                <table class="table">
                  <thead>
                    <tr>
                      <th scope="col">
                        <div className="font-bold text-primaryColor text-center">
                          Mon
                          <br />
                          <div className="font-25">28</div>
                        </div>
                      </th>
                      <th scope="col">
                        <div className="font-bold text-primaryColor text-center">
                          Tues
                          <br />
                          <div className="font-25">29</div>
                        </div>
                      </th>
                      <th scope="col">
                        <div className="font-bold text-primaryColor text-center">
                          Wed
                          <br />
                          <div className="font-25">30</div>
                        </div>
                      </th>
                      <th scope="col">
                        <div className="font-bold text-primaryColor text-center">
                          Thur
                          <br />
                          <div className="font-25">31</div>
                        </div>
                      </th>
                      <th scope="col">
                        <div className="font-bold text-primaryColor text-center">
                          Fri
                          <br />
                          <div className="font-25">1</div>
                        </div>
                      </th>
                      <th scope="col">
                        <div className="font-bold text-primaryColor text-center">
                          Sat
                          <br />
                          <div className="font-25">2</div>
                        </div>
                      </th>
                      <th scope="col">
                        <div className="font-bold text-primaryColor text-center">
                          Sun
                          <br />
                          <div className="font-25">3</div>
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="mb-2">
                      <td>
                        <div className="text-primaryColor font-demi py-2 text-center calendar-event">
                          Event
                        </div>
                      </td>
                      <td>
                        <div className="text-primaryColor font-demi py-2 text-center calendar-event">
                          Event
                        </div>
                      </td>
                      <td>
                        <div className="text-primaryColor font-demi py-2 text-center calendar-event">
                          Event
                        </div>
                      </td>
                      <td>
                        <div className="text-primaryColor font-demi py-2 text-center calendar-event">
                          Event
                        </div>
                      </td>
                      <td>
                        <div className="text-primaryColor font-demi py-2 text-center calendar-event">
                          Event
                        </div>
                      </td>
                      <td>
                        <div className="text-primaryColor font-demi py-2 text-center calendar-event">
                          Event
                        </div>
                      </td>
                      <td>
                        <div className="text-primaryColor font-demi py-2 text-center calendar-event">
                          Event
                        </div>
                      </td>
                    </tr>
                    <tr className="mb-2">
                      <td>
                        <div className="text-primaryColor font-demi py-2 text-center calendar-event">
                          Event
                        </div>
                      </td>
                      <td>
                        <div className="text-primaryColor font-demi py-2 text-center calendar-event">
                          Event
                        </div>
                      </td>
                      <td>
                        <div className="text-primaryColor font-demi py-2 text-center calendar-event">
                          Event
                        </div>
                      </td>
                      <td>
                        <div className="text-primaryColor font-demi py-2 text-center calendar-event">
                          Event
                        </div>
                      </td>
                      <td>
                        <div className="text-primaryColor font-demi py-2 text-center calendar-event">
                          Event
                        </div>
                      </td>
                      <td>
                        <div className="text-primaryColor font-demi py-2 text-center calendar-event">
                          Event
                        </div>
                      </td>
                      <td>
                        <div className="text-primaryColor font-demi py-2 text-center calendar-event">
                          Event
                        </div>
                      </td>
                    </tr>
                    <tr className="mb-2">
                      <td>
                        <div className="text-primaryColor font-demi py-2 text-center calendar-event">
                          Event
                        </div>
                      </td>
                      <td>
                        <div className="text-primaryColor font-demi py-2 text-center calendar-event">
                          Event
                        </div>
                      </td>
                      <td>
                        <div className="text-primaryColor font-demi py-2 text-center calendar-event">
                          Event
                        </div>
                      </td>
                      <td>
                        <div className="text-primaryColor font-demi py-2 text-center calendar-event">
                          Event
                        </div>
                      </td>
                      <td></td>
                      <td>
                        <div className="text-primaryColor font-demi py-2 text-center calendar-event">
                          Event
                        </div>
                      </td>
                      <td>
                        <div className="text-primaryColor font-demi py-2 text-center calendar-event">
                          Event
                        </div>
                      </td>
                    </tr>
                    <tr className="mb-2">
                      <td>
                        <div className="text-primaryColor font-demi py-2 text-center calendar-event">
                          Event
                        </div>
                      </td>
                      <td>
                        <div className="text-primaryColor font-demi py-2 text-center calendar-event">
                          Event
                        </div>
                      </td>
                      <td>
                        <div className="text-primaryColor font-demi py-2 text-center calendar-event">
                          Event
                        </div>
                      </td>
                      <td></td>
                      <td></td>
                      <td>
                        <div className="text-primaryColor font-demi py-2 text-center calendar-event">
                          Event
                        </div>
                      </td>
                      <td>
                        <div className="text-primaryColor font-demi py-2 text-center calendar-event">
                          Event
                        </div>
                      </td>
                    </tr>
                    <tr className="mb-2">
                      <td>
                        <div className="text-primaryColor font-demi py-2 text-center calendar-event">
                          Event
                        </div>
                      </td>
                      <td>
                        <div className="text-primaryColor font-demi py-2 text-center calendar-event">
                          Event
                        </div>
                      </td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td>
                        <div className="text-primaryColor font-demi py-2 text-center calendar-event">
                          Event
                        </div>
                      </td>
                      <td></td>
                    </tr>
                    </tbody>
                </table>
                <hr />
                <div className="d-flex justify-content-end">
                  <div className="text-center">
                    <button
                      className="text-white bg-secondaryColor font-demi px-5 btn-blue submit-button"
                      type="submit"
                    >
                      Next
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeMain;
