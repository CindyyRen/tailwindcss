import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { navItems } from '../utils/constants';
import logo from '../assets/pie-chart-svgrepo-com.svg';

const Navbar = () => {
  return (
    <nav className="border-b border-b-picton-blue-100 text-picton-blue-800 p-1 sticky top-0">
      <div className="container mx-auto flex justify-between items-center">
        {/* 左侧 Logo */}
        <div className="flex justify-start items-center">
          <Link
            to="/"
            className="hover:text-picton-blue-00 pr-3 flex items-center"
          >
            <img src={logo} width="30px" alt="bellroy" />
            <span className="bg-rainbow-gradient bg-clip-text text-transparent font-bold text-picton-blue-800">
              JOBS
            </span>
          </Link>

          <ul className="hidden md:flex justify-start space-x-4">
            {navItems.map((item) => (
              <NavItemComponent key={item.id} item={item} />
            ))}
          </ul>
        </div>

        {/* 右侧导航按钮 */}
        <div className="space-x-4">
          <Link
            to="/home"
            className="text-white hover:hover:text-picton-blue-600  font-medium"
          >
            Sign in
          </Link>
          <Link
            to="/robot"
            className="text-white hover:hover:text-picton-blue-600 font-medium"
          >
            Robot
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

const NavItemComponent = ({ item }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const ref = useRef(null);

  const toggleExpand = (e) => {
    if (item.children) {
      e.preventDefault();
      setIsExpanded(!isExpanded);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsExpanded(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <li ref={ref} className="relative">
      <Link
        to={item.path}
        onClick={toggleExpand}
        className="flex items-center p-2 hover:text-picton-blue-600 "
        aria-expanded={isExpanded}
      >
        {item.icon && <span className="mr-2">{item.icon}</span>}
        <span>{item.title}</span>
        {item.children && (
          <span className="ml-1">{isExpanded ? '▼' : '▶'}</span>
        )}
      </Link>
      {item.children && (
        <ul
          className={`
          absolute left-0 mt-2 py-2 w-48 bg-white rounded-md shadow-xl z-1000
          ${isExpanded ? 'block' : 'hidden'}
        `}
        >
          {item.children.map((child) => (
            <NavItemComponent key={child.id} item={child} />
          ))}
        </ul>
      )}
    </li>
  );
};
