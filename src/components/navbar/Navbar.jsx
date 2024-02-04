import {React, useState, useEffect} from "react";
import "./navbar.css";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.png"

const Navbar = () => {
  const [isNavbarFixed, setIsNavbarFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsNavbarFixed(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const fixedNavbarStyle = {
    backgroundColor: '#ffffff',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  };

  const normalNavbarStyle = {
    backgroundColor: 'transparent',
    Color:'white'
  };
  return (
        <>
          <nav className="navbar navbar-expand-lg fixed-top" style={isNavbarFixed ? fixedNavbarStyle : normalNavbarStyle}>
                    <div className="container-fluid mx-auto">
                        <a className="navbar-brand" href="/"><img src={logo} className="w-50" alt="logo" /></a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" area-aria-label="Toggle navigation">
                          <span><svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512">
                            <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM64 256c0-17.7 14.3-32 32-32H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H96c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" /></svg></span>
                        </button>
                        <div className="offcanvas offcanvas-start w-50" data-bs-scroll="true" tabIndex="-1" id="offcanvasNavbar" area-aria-labelledby="offcanvasNavbarLabel">
                          <div className="offcanvas-header">
                            <h2 className="offcanvas-title" id="offcanvasNavbarLabel">Portfolio</h2>
                            <button type="button" className="btn-close text" data-bs-dismiss="offcanvas" aria-label="Close">
                            </button>
                          </div>
                          <div className="offcanvas-body">
                            <ul className="navbar-nav mx-auto">
                              <li className="nav-item"><NavLink className="nav-link" to={'/'}>Home</NavLink></li>
                              <li className="nav-item"><NavLink className="nav-link" to={'/'}>Download Resume</NavLink></li>
                              <li className="nav-item"><NavLink className="nav-link" to={'/'}>Contact</NavLink></li>
                            </ul>
                            <div className="d-flex sm:justify-content-end">
                              <a href="/" className="myBlogsBtn">Login</a>
                            </div>
                          </div>
                        </div>
                  </div>
          </nav>
      </>
  );
};

export default Navbar;
