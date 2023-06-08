import Link from 'next/link'
import Image from 'next/image'

function Hero(){
    return(
        <div className="hero py-32 bg-base-100">
            <div className="hero-content max-w-5xl flex-col lg:flex-row-reverse">
                <Image src="/tree.jpg" className="max-w-sm rounded-lg shadow-2xl" alt="tree" height={480} width={640} />
                <div>
                <h1 className="text-5xl font-bold">Take Control!</h1>
                <p className="py-6">Hi, I am Charles J McKillips, Life Agent NPM #20430931, let me help you save money and take control of your future!</p>
                <Link href="/consultation" className="btn btn-primary bg-black">Schedule a Consultation</Link>
                </div>
            </div>
        </div>
    )    
}

export default Hero
