import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav
      className='navbar navbar-expand-lg bg-body-tertiary pt-4 pb-4'
      data-bs-theme='dark'
    >
      <div className='container'>
        <Link to={"/"} className='nav-link text-white'>
          <h2 className="me-5">Book</h2>
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarScroll'
          aria-controls='navbarScroll'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon' />
        </button>
        <div className='collapse navbar-collapse' id='navbarScroll'>
          <ul
            className='navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll'
            style={{ bsScrollHeight: 100 }}
          >
            <li className='nav-item'>
              <Link className='nav-link text-white' to={"/"}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link text-white' to={"/"}>
                Contact Us
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link text-white' to={"/"}>
                About Us
              </Link>
            </li>
            <li className='nav-item'></li>
            <li className='nav-item dropdown'></li>
            <li className='nav-item'></li>
          </ul>
          {/* <form className='d-flex' role='search'>
          <input
            className='form-control me-2'
            type='search'
            placeholder='Search'
            aria-label='Search'
          />
          <button className='btn btn-outline-success' type='submit'>
            Search
          </button>
        </form> */}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
