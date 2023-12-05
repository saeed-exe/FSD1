//import {hamburger} from '../assets/icons'
import {headerLogo} from '../assets/images';
import {hamburger} from '../assets/icons';
import { navLinks  } from '../constants';
const Nav = () => {
  return (
    <header className='padding-x py-8 absolute z-10 w-full'>
        <nav className='flex justify-between items-center max-container '>
            <a href="/">
                <img src={headerLogo} alt="" height={30} width={130} />
            </a>
            <ul className='flex-1 flex font-medium justify-center gap-16 max-lg:hidden'>
              {navLinks.map((item)=>(
                <li key={item.label}><a href={item.href}
                className='font-montserrat leading-normal text-lg text-slate-gray'>
                  {item.label}</a></li>
              ))}
            </ul>
            <div className="lg:hidden">
              <img src={hamburger}  width={25} height={25} alt="" />
            </div>
        </nav>
    </header>
  )
}

export default Nav