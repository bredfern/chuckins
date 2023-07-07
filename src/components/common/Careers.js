import Link from 'next/link'

function Features(){
    return(
        <>
          <div className="grid place-items-center w-full bg-base-100">
            <div className="max-w-5xl py-24 content-center justify-center">
              <div className="card">
                <div className="card-body">
                  <h2 className="card-title">Careers</h2>
                  <p>
                    Agent looking for a new team?
                    Looking to get licensed and break into the industry?
                    Call us to find out more at 414-236-9370. 
                  </p>
                  <p>
                   <Link href="/consultation" className="btn btn-primary bg-black">Schedule an Interview</Link>
                  </p>
              </div>
            </div>
          </div>
        </div>
        </>
    )
}

export default Features
