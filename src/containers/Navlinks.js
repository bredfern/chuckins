import Link from 'next/link'


function Navlinks(){
    return(
        <>
            <li className="mr-2"><Link href="/about">About</Link></li>
            <li className="mr-2"><Link href="/products">Products</Link></li>
            <li className="mr-2"><Link href="/consultation">Consultation</Link></li>
            <li className="mr-2"><Link href="/careers">Careers</Link></li>
        </>
    )
}

export default Navlinks
