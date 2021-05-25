import dynamic from 'next/dynamic';
const Sidebar = dynamic(() => import('../../../shared/sidebar/sidebar'), { ssr: false });

export default function Slots() {
    const handleShow = () => setShowModal(true);
    const handleClose = () => setShowModal(false);
    return (
      <div>
        <Sidebar />
        <div class="container padding-left-mobile">
          <h3>Slots</h3>
          <button class="btn btn-primary" onClick={handleShow}>
                Add Slots
              </button>
          <div class="row mb-5 mt-3 user-table">
            <table class="table table-striped font-bold table-responsive-sm">
              <thead>
                <tr className="font-16">
                  <th scope="col">Date</th>
                  <th scope="col">Time</th>    
                  <th scope="col">Client Limit</th>
                  <th scope="col">Instructor</th>  
                  <th scope="col">Bookings</th>   
                </tr>
              </thead>
              <tbody>
              <tr className="font-demi">
                  <td>11/10/19</td>
                  <td>09:10</td>
                  <td>4</td>
                  <td>Abhi</td>
                  <td>2</td>
                  <td><button class="btn btn-danger">Remove</button></td>
              </tr>   
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
  