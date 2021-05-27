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
                <table class="table">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">First</th>
                      <th scope="col">Last</th>
                      <th scope="col">Handle</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="mb-2">
                      <th scope="row">1</th>
                      <td className="">Mark</td>
                      <td className="">Otto</td>
                      <td className="">@mdo</td>
                      <td className="">Mark</td>
                      <td className="">Otto</td>
                      <td className="">@mdo</td>
                    </tr>
                    <tr className="mb-2">
                      <th scope="row">2</th>
                      <td className="">Jacob</td>
                      <td className="">Thornton</td>
                      <td className="">@fat</td>
                      <td className="">Jacob</td>
                      <td className="">Thornton</td>
                      <td className="">@fat</td>
                    </tr>
                    <tr className="mb-2">
                      <th scope="row">3</th>
                      <td className="">Larry</td>
                      <td className="">the Bird</td>
                      <td className="">@twitter</td>
                      <td className="">Larry</td>
                      <td className="">the Bird</td>
                      <td className="">@twitter</td>
                    </tr>
                    <tr className="mb-2">
                      <th scope="row">1</th>
                      <td className="">Mark</td>
                      <td className="">Otto</td>
                      <td className="">@mdo</td>
                      <td className="">Mark</td>
                      <td className="">Otto</td>
                      <td className="">@mdo</td>
                    </tr>
                    <tr className="mb-2">
                      <th scope="row">2</th>
                      <td className="">Jacob</td>
                      <td className="">Thornton</td>
                      <td className="">@fat</td>
                      <td className="">Jacob</td>
                      <td className="">Thornton</td>
                      <td className="">@fat</td>
                    </tr>
                    <tr className="mb-2">
                      <th scope="row">3</th>
                      <td className="">Larry</td>
                      <td className="">the Bird</td>
                      <td className="">@twitter</td>
                      <td className="">Larry</td>
                      <td className="">the Bird</td>
                      <td className="">@twitter</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeMain;
