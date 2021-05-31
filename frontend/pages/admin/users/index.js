import dynamic from 'next/dynamic';
const Sidebar = dynamic(() => import('../../../shared/sidebar/sidebar'), { ssr: false });

export default function Users() {
    return (
      <div>
        <Sidebar />
        <div class="container padding-left-mobile">
          <h3>Users</h3>
          <div class="row mb-5 mt-3 user-table">
            <table class="table table-striped font-bold table-responsive-sm">
              <thead>
                <tr className="font-16">
                  <th scope="col">S.No</th>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>  
                  <th scope="col">Role</th>                   
                </tr>
              </thead>
              <tbody>
              <tr className="font-demi">
                  <td>1</td>
                  <td>Ayush</td>
                  <td>ayush@gmail.com</td>
                  <td>User</td>
              </tr>   
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
  