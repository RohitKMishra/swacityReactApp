import React from 'react';
import './Navbar.style.css';

import {AiFillHome} from 'react-icons/ai';
import {FcDepartment} from 'react-icons/fc';
import {FaUsers, FaTasks, FaToolbox} from 'react-icons/fa';
import {HiOutlineDocumentReport} from 'react-icons/hi';
import {BsConeStriped} from 'react-icons/bs';

import {Link, Router} from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='nav-container'>
      <ul className='nav-ul'>
        <Link to='/'>
          <li className='nav-li'>
            <AiFillHome size='1rem' /> Dashboard
          </li>
        </Link>

        <Link to='/deparments'>
          <li className='nav-li'>
            <FcDepartment size='1rem' /> Departments
          </li>
        </Link>

        <Link to='/zones'>
          <li className='nav-li'>
            <BsConeStriped size='1rem' /> Zones
          </li>
        </Link>

        <Link to='/users'>
          <li className='nav-li'>
            <FaUsers size='1.1rem' /> Users
          </li>
        </Link>

        <Link to='/tasks'>
          <li className='nav-li'>
            <FaTasks size='1rem' /> Tasks
          </li>
        </Link>

        <Link to='/assets'>
          <li className='nav-li'>
            <FaToolbox size='1rem' /> Assets
          </li>
        </Link>

        <Link to='/reports'>
          <li className='nav-li'>
            <HiOutlineDocumentReport size='1rem' /> Reports
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
