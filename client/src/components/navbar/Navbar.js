import React from 'react';

import { Link } from 'react-router-dom';
import './NavBar.css';


function NavBar() {
  return (
    
      <>
        <nav className='navbar'>
          <div className='navbar-container'>
            <Link to='/' className='navbar-logo' >
          
            </Link>
              <li className='nav-item'>
                <Link to='/' className='nav-links'>
                  home
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='/Signup'
                  className='nav-button'
                 
                >
                 Signup
                </Link>
              </li>
          </div>
        </nav>
      </>
    );
 
}
export default NavBar;