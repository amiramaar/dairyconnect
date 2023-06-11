import React from 'react'
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
const Navbar = () => {

    const navigate = useNavigate();
    const click = ()=>{
    navigate("/addblog");
}
  return (
    <>
     <div className="container structure">
        <nav className="menu">
            <ul className="main-menu">
                <li className="active"><Link id="link" to='/'>Home</Link></li>
                {/* <li className="with-submenu">
                    <i className="fa fa-briefcase"></i>Portfolio <i className="fa fa-caret-down"></i>
                    <ul className="submenu">
                        <li>React</li>
                        <li>JavaScript</li>
                        <li>CSS</li>
                        <li>Animation</li>
                    </ul>
                </li> */}
                <li  className='{}' onClick={click} ><Link id="link" to='/addblog'>Addblog</Link></li>
                <li><i className="fa fa-search"></i>Search</li>
            
            </ul>
        </nav>
    </div>
    </>
  )
}

export default Navbar