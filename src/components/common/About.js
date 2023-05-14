const featuresData = [
    {title : "Charles J McKillips", description : "Life Agent NPM #20430931 424-298-9612 IMO: Family First Life Tri-State, The Barlettano Group"},
    {title : "Current Carriers", description : "Americo, Americo, Ethos, TransAmerica, Aetna/CVS. Great Western, Prosperity, Mutual of Omaha, TransAmerica"},
    {title : "States Covered", description : "NPN#20430931, CA#4229790, NJ#3002193051, WI#20430931, OH#1460259, MI awaiting documents"},
]

function Features(){
    return(
        <>
          <div className="grid place-items-center w-full bg-base-100">
            <div className="max-w-5xl py-24 content-center justify-center">
                <div className="grid mt-12 md:grid-cols-3 grid-cols-1 gap-4">
                {
                    featuresData.map((i, k) => {
                        return(
                            <div key={k} className="card w-full bg-base-200 shadow-xl hover:shadow-2xl">
                                <div className="card-body mt-4 items-center text-center">
                                    <h2 className="card-title">{i.title}</h2>
                                    <p>{i.description}</p>
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