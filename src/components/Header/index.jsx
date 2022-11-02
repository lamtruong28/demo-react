import { NavLink } from 'react-router-dom';

function Header() {
    return ( 
        <header className='header-wrapper'>
            <ul className='header-menu'>
                <li className='menu-item'>
                    <NavLink className='menu-item__link' to='/'>Home</NavLink>
                </li>
                <li className='menu-item'>
                    <NavLink className='menu-item__link' to='/todo'>Todo App</NavLink>
                </li>
                <li className='menu-item'>
                    <NavLink className='menu-item__link' to='/contact'>Contact</NavLink>
                </li>
                <li className='menu-item'>
                    <NavLink className='menu-item__link' to='/about'>About</NavLink>
                </li>
            </ul>
        </header>
     );
}

export default Header;