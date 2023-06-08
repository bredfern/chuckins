const featuresData = [
    {title : "Charles J McKillips", description : "Life Agent NPM #20430931, 424-298-9612, IMO:, Family First Life, Tri-State, The Barlettano Group"},
    {title : "Current Carriers", description : "Americo, Americo, Ethos, TransAmerica, Aetna/CVS. Great Western, Prosperity, Mutual of Omaha, TransAmerica"},
    {title : "States Covered", description : "NPN#20430931, CA#4229790, NJ#3002193051, WI#20430931, OH#1460259, MI awaiting documents"},
]

function Features(){
    return(
        <>
          <div className="grid place-items-center w-full bg-base-100">
            <div className="max-w-5xl py-24 content-center justify-center">
              <div className="card">
              <div className="card-body">
              <h2 className="card-title">Company Overview</h2>

              <p>
                Family First Life Tri-State is a firm that helps families safeguard their loved ones by offering life insurance and other financial solutions. Our skilled team is dedicated to offering individualized care and specialized solutions to each family with which we engage.
              </p>

              <p>
                We recognize that every family is unique, and we work hard to give the finest solutions for each specific scenario. With a diverse product offering and exceptional client service, we are positive that we can assist you and your family in locating the coverage you require to secure your loved ones. Get in touch with us today to learn more and get started.
              </p>

              <p>
                We specialize in mortgage protection life insurance, final expense life insurance, universal life policies for retirement planning, and fixed index annuities for retirement protection. We deal with a variety of insurance companies, including Americo, Mutual of Omaha, and others, to fulfill all of our clients&apos; needs.
              </p>
              </div>
              </div>
                <div className="grid mt-12 md:grid-cols-3 grid-cols-1 gap-4">
                {
                    featuresData.map((i, k) => {
                        return(
                            <div key={k} className="card w-full bg-base-200 shadow-xl hover:shadow-2xl">
                                <div className="card-body mt-4 items-center text-center">
                                    <h2 className="card-title">{i.title}</h2>
                                    {i.description.split(',').map((s,t) => {
                                        return ( <p key={t}>{s}</p> )
                                    })}
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
