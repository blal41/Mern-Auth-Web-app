import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';

function Header() {
  const { currentUser } = useSelector((state) => state.user);

  return (
    <div className="bg-red-500 text-black">
      <div className="flex justify-between items-center  max-w-6xl mx-auto p-3">
        <Link to="/">
          <h1>Auth Page</h1>
        </Link>
        <ul className="flex gap-8 p-1">
          <Link to="/home">
            <li>Home</li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>
          <Link to='/profile'>
            {currentUser ? (
              <img src={currentUser.profilePicture} alt='profile' className='h-7 w-7 rounded-full object-cover' />
            ) : (
              <li>Sign In</li>
            )}
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Header;
