import dynamic from 'next/dynamic';
const Sidebar = dynamic(() => import('../../../shared/sidebar/sidebar'), { ssr: false });

export default function Instructor() {
    const handleShow = () => setShowModal(true);
    const handleClose = () => setShowModal(false);
    return (
      <div>
        <Sidebar />
        <div class="container padding-left-mobile">
          <h3>Instructor</h3>
          <button class="btn btn-primary" onClick={handleShow}>
                Add Instructor
              </button>
          <div class="row mb-5 mt-3 user-table">
            <table class="table table-striped font-bold table-responsive-sm">
              <thead>
                <tr className="font-16">
                  <th scope="col">S.No</th>
                  <th scope="col">Image</th>    
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>  
                  <th scope="col">Phone</th>   
                  <th scope="col">Ratings</th>                    
                </tr>
              </thead>
              <tbody>
              <tr className="font-demi">
                  <td>1</td>
                  <td><img></img></td>
                  <td>Ayush</td>
                  <td>ayush@gmail.com</td>
                  <td>9335639735</td>
                  <td>4/5</td>
                  <td><button class="btn btn-danger">Remove</button></td>
              </tr>   
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
  