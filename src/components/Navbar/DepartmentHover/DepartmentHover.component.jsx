import React from 'react';
import './DepartmentHover.style.css';

import {Link, NavLink} from 'react-router-dom';

const DepartmentHover = () => {
  return (
    <div className='tooltip'>
      Deparments
      <div className='tooltiptext'>
        <ul className='tooltip-ul'>
          <Link to={`/departments/${1}`}>
            <li className='tooltip-li'>Medical</li>
          </Link>
          <Link to='/departent/muncipal'>
            <li className='tooltip-li'>Muncipal</li>
          </Link>
          <Link to='/departent/police'>
            <li className='tooltip-li'>Police</li>
          </Link>
          <Link to='/departent/fire'>
            <li className='tooltip-li'>Fire</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default DepartmentHover;
