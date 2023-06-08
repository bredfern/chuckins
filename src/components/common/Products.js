import Link from 'next/link'
import Image from 'next/image'

const featuresData = [
    {product: "Whole Life", description: "Permanent insurance which never expires or increases in price, while gaining cash value.  Used primarily for final expenses and legacy building."},
    {product: "Term Life", description: "Temporary insurance for a set period of time that is generally lower cost.  Used for situations that only last a certain amount of time such as mortgage protection, income protection, and children’s education protection."},
    {product: "IUL", description: "Indexed Universal Life (IUL) policies allow you to grow your cash value and participate in market gains without market losses by putting a portion toward an equity index account like the S&P 500 or NASDAQ."},
    {product: "FIA", description: "The FIA (Fixed Indexed Annuity) is the fastest growing financial tool in the retirement industry. If you are nearing retirement, or in retirement, chances are you cannot afford another market down-turn. The FIA is designed to eliminate market loss, while allowing you to capture upside gains."},
    {product: "Mortgage Protection", description: "MPI is a type of insurance policy that helps your family make your monthly mortgage payments if you – the policyholder and mortgage borrower – die before your mortgage is fully paid off."},
    {product: "Final Expense", description: "Final expense insurance, also referred to as burial insurance, covers end-of-life expenses including funeral arrangements and any remaining medical or legal expenses that will need to be settled by your beneficiary."},
]

function Features(){
    return(
        <>
          <div className="grid place-items-center w-full bg-base-100">
            <div className="max-w-5xl py-24 content-center justify-center">
              <div className="card w-66">
              <div className="card-body p-2">
                <h2 className="card-title">Life Insurance</h2>

                <p>
                Life insurance can be a tricky topic to discuss, but it’s an important one. With the right type of life insurance, your spouse and children will be financially secure after you’re gone.
                </p>

                <p>
                You’ll never know when tragedy may strike, so make sure you have life insurance in place. It ensures that your loved ones are cared for if something happens.
                </p>

                <p>
                Life insurance is needed for the “what ifs” in life. What if I die unexpectedly? Could my family continue to live in our home? Would my children have the funds to attend college? Will my family have the funds on-hand to pay for my funeral and final expenses?
                </p>

                <p>
                Life insurance is there to provide financial help to those affected by the “what if” situations.
                </p>
              </div>
              </div>
              <div className="grid mt-12 md:grid-cols-3 grid-cols-1 gap-10">
              {
                featuresData.map((i, k) => {
                  return(
                    <div key={k} className="card w-66 bg-base-100 shadow-xl image-full">
                      <figure><Image src="/tree.jpg" alt="Products" width={640} height={480} /></figure>
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
