import Link from 'next/link'

const copyrightDate = new Date().getFullYear();

function Footer() {
    return(
        <div>
          <div className="bg-base-300 flex justify-center">
            <footer className="footer p-10 max-w-5xl  text-base-content">
              <div>
                <span className="footer-title">About</span>
                <Link href="/consultation" className="link link-hover">Charles J McKillips</Link>
                <Link href="/consultation" className="link link-hover">Life Agent</Link>
                <Link href="/consultation" className="link link-hover">NPN #20430931</Link>
                <Link href="/consultation" className="link link-hover">414-236-9370</Link>
              </div>
              <div>
                <span className="footer-title">Products</span>
                <Link href="/consultation" className="link link-hover">Life Insurance</Link>
                <Link href="/consultation" className="link link-hover">Whole Life</Link>
                <Link href="/consultation" className="link link-hover">IUL</Link>
                <Link href="/consultation" className="link link-hover">Annuities</Link>
                <Link href="/consultation" className="link link-hover">Mortgage</Link>
                <Link href="/consultation" className="link link-hover">Final Expense</Link>
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
            <p>Copyright © {copyrightDate} - All right reserved</p>
          </div>
        </div>
    </div>
  )
}

export default Footer
