import React from 'react';
import './Navbar.style.css';

// importing useLocation hook to extract current url path
import {useLocation} from 'react-router-dom';

// importing all the icons
import {AiFillHome} from 'react-icons/ai';
import {FcDepartment} from 'react-icons/fc';
import {FaUsers, FaTasks, FaToolbox} from 'react-icons/fa';
import {HiOutlineDocumentReport} from 'react-icons/hi';
import {BsConeStriped} from 'react-icons/bs';

// importing Link (react-router)
import {Link, NavLink} from 'react-router-dom';

// importing needed Components
import DepartmentHover from './DepartmentHover/DepartmentHover.component';

const Navbar = () => {
  // for extracting current url path
  // useLocation returns a json object and pathname can be extracted using location.pathname
  let location = useLocation();

  return (
    <div className='nav-container'>
      <ul className='nav-ul'>
        <Link to='/'>
          <li className={location.pathname === '/' ? 'nav-visited' : 'nav-li'}>
            <AiFillHome size='1rem' /> Dashboard
          </li>
        </Link>

        <Link to='/deparments'>
          <li
            className={
              location.pathname === '/deparments' ? 'nav-visited' : 'nav-li'
            }>
            {/* Placed DepartmentHiver Component for tooltip/hover logic */}
            <FcDepartment size='1rem' /> <DepartmentHover />
          </li>
        </Link>

        <Link to='/zones'>
          <li
            className={
              location.pathname === '/zones' ? 'nav-visited' : 'nav-li'
            }>
            <BsConeStriped size='1rem' /> Zones
          </li>
        </Link>

        <Link to='/users'>
          <li
            className={
              location.pathname === '/users' ? 'nav-visited' : 'nav-li'
            }>
            <FaUsers size='1.1rem' /> Users
          </li>
        </Link>

        <Link to='/tasks'>
          <li
            className={
              location.pathname === '/tasks' ? 'nav-visited' : 'nav-li'
            }>
            <FaTasks size='1rem' /> Tasks
          </li>
        </Link>

        <Link to='/assets'>
          <li
            className={
              location.pathname === '/assets' ? 'nav-visited' : 'nav-li'
            }>
            <FaToolbox size='1rem' /> Assets
          </li>
        </Link>

        <Link to='/reports'>
          <li
            className={
              location.pathname === '/reports' ? 'nav-visited' : 'nav-li'
            }>
            <HiOutlineDocumentReport size='1rem' /> Reports
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
