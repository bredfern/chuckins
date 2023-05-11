function Footer() {
    return(
        <div>
        <div className="bg-base-300 flex justify-center">
        <footer className="footer p-10 max-w-5xl  text-base-content">
          <div>
            <p>Charles J McKillips, Life Agent<br />NPM #20430931</p>
          </div>
          <div>
            <span className="footer-title">Products</span>
            <a className="link link-hover">Life Insurance</a>
          </div>
          <div>
            <span className="footer-title">Company</span>
            <a className="link link-hover">About</a>
            <a className="link link-hover">Consultation</a>
            <a className="link link-hover">Careers</a>
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
