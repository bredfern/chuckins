import Link from 'next/link'

function Footer() {
    return(
        <div>
          <div className="bg-base-300 flex justify-center">
            <footer className="footer p-10 max-w-5xl  text-base-content">
              <div>
                <span className="footer-title">About</span>
                <a className="link link-hover">Charles J McKillips</a>
                <a className="link link-hover">Life Agent</a>
	        <a className="link link-hover">NPM #20430931</a>
	        <a className="link link-hover">424-298-9612</a>
              </div>
              <div>
                <span className="footer-title">Products</span>
                <a className="link link-hover">Life Insurance, Whole Life</a>
                <a className="link link-hover">IUL, Annuities, Mortgage, Funery</a>
              </div>
              <div>
                <span className="footer-title">Company</span>
                <Link href="/about" className="link link-hover">About</Link>
                <Link href="/consultation" className="link link-hover">Consultation</Link>
                <Link href="/careers" className="link link-hover">Careers</Link>
              </div>
            </footer>
          </div>
         <div className="p-4 flex justify-center bg-neutral text-neutral-content">
          <div className="max-w-5xl ">
            <p>Copyright © 2023 - All right reserved</p>
          </div>
        </div>
    </div>
  )
}

export default Footer
