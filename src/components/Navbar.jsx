import {FaBarsStaggered} from 'react-icons/fa6'
import { NavLink } from 'react-router-dom';
import NavbarLink from './NavbarLink'
import { useEffect, useState } from 'react';
import {BsCart3, BsMoonFill, BsSunFill} from 'react-icons/bs';

const themes = {
    winter: 'winter',
    dracula: 'dracula',
};
const getThemeFromLocalStorage=()=>{
    return localStorage.getItem('theme')
}


const Navbar = () =>{
    const [theme, setTheme] = useState(getThemeFromLocalStorage())
    const handleTheme = () =>{
        const {winter, dracula} = themes
        const newTheme = theme === winter? dracula : winter;
        // Debug
        console.log(newTheme)
        setTheme(newTheme)
    }
    useEffect(()=>{
        document.documentElement.setAttribute('data-theme', theme)
        localStorage.setItem('theme',theme)
    },[theme]);
    return(
        <nav className='bg-base-200 sticky top-0 z-[100]'>
            <div className='navbar align-element'>
                <div className='navbar-start'
                >
                    <NavLink to='/' className='hidden lg:flex btn btn-primary text-3xl items-center'>
                        LV
                    </NavLink>
                    <div className='dropdown'>
                        <label tabIndex={0} className='btn btn-ghost sm:hidden'>
                            <FaBarsStaggered className='h-6 w-6'/>
                        </label>
                        <ul tabIndex={0} className='menu menu-sm dropdown-content mt-3 
                        p-2 shadow bg-base-200 rounded-xl w-52'>
                            <NavbarLink/>
                        </ul>
                    </div>
                </div>
                <div className='navbar-center hidden lg:flex'>
                    <ul className='menu menu-horizontal'> 
                        <NavbarLink/>
                    </ul>
                </div>
                <div className='navbar-end'>
                    <label className='swap swap-roatate'>
                        <input type="checkbox" onChange={handleTheme}/>
                        <BsSunFill className='swap-on h-4 w-4'/>
                        <BsMoonFill className='swap-off h-4 w-4'/>
                    </label>
                </div>
            </div>
        </nav>
    )
}
export default Navbar;