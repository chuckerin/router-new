import { NavLink } from 'react-router-dom';

const Menu = () => {
  return (
    <nav className='navWrapper'>
      <ul className='navigasyonWrapper'>
        <li>
          <NavLink to='/router-new/'>Home</NavLink>
        </li>
        <li>
          <NavLink to='/router-new/user'>Users</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
