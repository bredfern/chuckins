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
                <a href="/products" className="link link-hover">Learn More</a>
              </div>
              <div>
                <span className="footer-title">Company</span>
                <a href="/about" className="link link-hover">About</a>
                <a href="/consultation" className="link link-hover">Consultation</a>
                <a href="/careers" className="link link-hover">Careers</a>
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
