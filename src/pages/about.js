import InnerPageContainer from "@/components/common/InnerPageContainer";

export default function Page() {
    return (
      <InnerPageContainer title="About Us">
	    <div>
	      <div class="card w-full shadow-xl">
           <div class="card-body">
             <h2 class="card-title">Charles J McKillips</h2>
             <p>
               Life Agent NPM #20430931 424-298-9612<br />
               IMO: Family First Life Tri-State, The Barlettano Group
             </p>
           </div>
          </div>
          <br />
          <hr />
          <table className="table table-zebra w-full">
            <thead>
              <tr>
                <th>Current Carriers</th>
                <th></th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Americo</td>
                <td>Ethos</td>
                <td>TransAmerica</td>
                <td>Aetna/CVS</td>
              </tr>
              <tr>
                <td>Great Western</td>
                <td>Prosperity</td>
                <td>Mutual of Omaha</td>
                <td>TransAmerica</td>
              </tr>
            </tbody>
          </table>
          <br />
          <table className="table table-zebra w-full">
            <thead>
              <tr>
                <th>State Covered</th>
                <th>Code</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>National</td>
                <td>NPN#20430931</td>
              </tr>
              <tr>
                <td>California</td>
                <td>CA#4229790</td>
              </tr>
              <tr>
                <td>New Jersey</td>
                <td>NJ#3002193051</td>
              </tr>
              <tr>
                <td>Wisconsin</td>
                <td>WI#20430931</td>
              </tr>
              <tr>
                <td>Ohio</td>
                <td>OH#1460259</td>
              </tr>
              <tr>
                <td>Michigan</td>
                <td>MI awaiting documents</td>
              </tr>
            </tbody>
          </table>
        </div>
      </InnerPageContainer>
    )
  }
  
