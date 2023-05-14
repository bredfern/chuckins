import Link from 'next/link'
import Image from 'next/image'

const featuresData = [
    {product : "Life Insurance", description: "Life insurance provides financial support to surviving dependents or other beneficiaries after the death of an insured policyholder. "},
    {product: "Whole Life", description: "This type of insurance is ideal for emergencies, opportunity, and legacy: in large part due to its permanence and cash value account. In this instance, permanent means that you cannot outlive your death benefit. "},
    {product: "Term Life", description: "A term life insurance policy is a contract that lasts for a set period of time (usually between 10-30 years) where the insurance company pays your beneficiaries a lump sum if you die while the policy is active."},
    {product: "IUL", description: "IUL policies allow you to grow your cash value by putting a portion toward an equity index account like the S&P 500 or NASDAQ."},
    {product: "Annuities", description: "A life annuity is a retirement investment product you can purchase. A life annuity earns interest for a set timeframe or until certain conditions are met and then starts paying out to the annuitant."},
    {product: "Mortgage Protection", description: "MPI is a type of insurance policy that helps your family make your monthly mortgage payments if you – the policyholder and mortgage borrower – die before your mortgage is fully paid off."},
    {product: "Final Expense", description: "Final expense insurance, also referred to as burial insurance, covers end-of-life expenses including funeral arrangements and any remaining medical or legal expenses that will need to be settled by your beneficiary."},
]

function Features(){
    return(
        <>
          <div className="grid place-items-center w-full bg-base-100">
            <div className="max-w-5xl py-24 content-center justify-center">
                <div className="grid mt-12 md:grid-cols-3 grid-cols-1 gap-10">
                {
                    featuresData.map((i, k) => {
                        return(
                            <div key={k} className="card w-66 bg-base-100 shadow-xl image-full">
                              <figure><Image src="tree.jpg" alt="Products" width={100} height={100} /></figure>
                              <div className="card-body">
                                <h2 className="card-title">{i.product}</h2>
                                <p>{i.description}</p>
                                <div className="card-actions justify-end">
                                  <Link href="/consultation" className="btn btn-primary">Find out More</Link>
                                </div>
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
