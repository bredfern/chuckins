const featuresData = [
    {product : "Life Insurance"},  
    {product: "Whole Life"}, 
    {product: "Term Life"}, 
    {product: "IUL"},
    {product: "Annuities"},
    {product: "Mortgage Protection"}, 
    {product: "Final Expense"}, 
]

function Features(){
    return(
        <>
          <div className="grid place-items-center w-full bg-base-100">
            <div className="max-w-5xl py-24 content-center justify-center">
                <div className="grid mt-12 md:grid-cols-3 grid-cols-1 gap-8">
                {
                    featuresData.map((i, k) => {
                        return(
                            <div key={k} className="card w-full bg-base-200 shadow-xl hover:shadow-2xl">
                                <div className="card-body mt-4 items-center text-center">
                                    <ul><li>{i.product}</li></ul>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
          </div>
        </div>
        </>
    )
}

export default Features