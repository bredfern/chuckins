import Link from 'next/link'

function Hero(){
    return(
        <div className="hero py-32 bg-base-100">
            <div className="hero-content max-w-5xl flex-col lg:flex-row-reverse rounded-lg shadow-2xl">
                <div>
                <h1 className="text-5xl font-bold">Take Control!</h1>
                <p className="py-6">Let me help you save money and take control of your future!</p>
                <p><Link href="/consultation" className="btn btn-primary bg-black w-full">Schedule a Consultation</Link></p>
                <p  className="py-6">Charles J McKillips, Life Agent NPM #20430931</p>
                </div>
            </div>
        </div>
    )    
}

export default Hero
