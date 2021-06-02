import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Home.module.css";
import { AllSlots } from "../../redux/actions/slot";
import Link from "next/link";

function HomeMain() {
  const dispatch = useDispatch();
  let weekSlots;
  useEffect(() => {
    dispatch(AllSlots());
  }, []);

  const getDay = (day) => {
    switch (day) {
      case "1":
        return "Mon";
      case "2":
        return "Tue";
      case "3":
        return "Wed";
      case "4":
        return "Thur";
      case "5":
        return "Fri";
      case "6":
        return "Sat";
      default:
        return "Sun";
    }
  };
  const today = new Date();
  const weekDate = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);
  const allSlots = useSelector((state) => state.slot?.slotData?.slots);
  console.log(allSlots);
  if (allSlots) {
    const filterSlots = allSlots.filter(
      (slot) =>
        new Date(slot.date) >= Date.now() && new Date(slot.date) <= weekDate
    );
    weekSlots = filterSlots;
  }

  const weekDates = [];
  for (let i = 0; i < 7; i++) {
    weekDates.push({
      day: new Date(today.getTime() + i * 24 * 60 * 60 * 1000)
        .getDay()
        .toString(),
      date: new Date(today.getTime() + i * 24 * 60 * 60 * 1000).getDate(),
    });
  }
  console.log(weekDates);
  return (
    <>
      <div className={`${styles.home}`}>
        <div className="container">
          <div className="row center" style={{ minHeight: "85vh" }}>
            <div className="col-xl-7 col-lg-8 col-md-10 col-sm-12 col-12">
              <div className="card bg-white shadow py-lg-5 py-4 px-3 px-lg-5 my-5">
                <div className="d-flex justify-content-between">
                  <div className="font-bold font-25 text-primaryColor">
                    Book your first class with us
                  </div>
                  <div className="text-center">
                    <Link href="/fullCalendar">
                      <button
                        className="text-white bg-secondaryColor font-demi px-lg-5 btn-blue submit-button"
                        type="submit"
                      >
                        View All
                      </button>
                    </Link>
                  </div>
                </div>
                <hr />
                <div className="table-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                        {weekDates.map((weekDate) => (
                          <th scope="col">
                            <div className="font-bold text-primaryColor text-center">
                              {getDay(weekDate.day)}
                              <br />
                              <div className="font-25">{weekDate.date}</div>
                            </div>
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {/* <tr>
                        {weekSlots.map((weekSlot) => (
                          <td>
                            <div className="text-primaryColor font-demi py-2 text-center calendar-event">
                              {weekSlot.time}
                            </div>
                          </td>
                        ))}
                      </tr> */}
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
                </div>
                <hr />
                <div className="d-flex justify-content-end">
                  <div className="text-center">
                    <button
                      className="text-white bg-secondaryColor font-demi px-lg-5 btn-blue submit-button"
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
