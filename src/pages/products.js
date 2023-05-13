import InnerPageContainer from "@/components/common/InnerPageContainer";

export default function Page() {
    return (
      <InnerPageContainer title="Products">
        <table className="table table-zebra w-full">
            <thead>
              <tr>
                <th>Our Insurance Products</th>
                <th></th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Life Insurance</td>
                <td>Whole Life</td>
                <td>Term Life</td>
                <td>IUL</td>
              </tr>
              <tr>
                <td>Annuities</td>
                <td>Mortgage Protection</td>
                <td>Final Expense</td>
                <td></td>
              </tr>
            </tbody>
          </table>
      </InnerPageContainer>
    )
  }
  
