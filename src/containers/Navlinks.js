import Link from 'next/link'


function Navlinks(){
    return(
        <>
            <li className="mr-2"><Link href="/about-us">About</Link></li>
            <li className="mr-2"><Link href="/products">Products</Link></li>
            <li className="mr-2"><Link href="/quote">Instant Quote</Link></li>
            <li className="mr-2"><Link href="/jobs">Jobs</Link></li>
            <li className="mr-2"><Link href="/contact-us">Contact Us</Link></li>
        </>
    )
}

export default Navlinks
