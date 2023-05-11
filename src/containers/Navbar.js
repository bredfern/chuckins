import Link from 'next/link'
import Bars3Icon  from '@heroicons/react/24/outline/Bars3Icon'
import Navlinks from './Navlinks'

function Navbar(){
    return(
        <div className="w-full flex justify-center  shadow-md  text-primary-content bg-primary">
          <div className="navbar  max-w-5xl">
            <div className="flex-none lg:hidden">
              <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                <Bars3Icon className="h-5 inline-block w-5"/>
              </label>
            </div>
            <div className="flex-1 px-2 mx-2">
              <Link href="/">
                <span className='font-bold text-xl'>
                  <img className="mask inline-block mr-2 mask-circle w-10" src="/charles.jpg" />CJM
                </span>
              </Link>
            </div>
            <div className="flex-none hidden lg:block">
              <ul className="menu menu-horizontal">
                <Navlinks />
              </ul>
            </div>
         </div>
      </div>
    )
}

export default Navbar
