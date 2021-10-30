import React, { useState } from 'react'
import {NavLink , Link} from 'react-router-dom'


import './Header.css'

import {FaFacebookF, FaGooglePlusG , FaPinterestP , FaVimeoV, FaTwitter ,FaSearch, FaShoppingCart} from 'react-icons/fa'

import Logo2 from '../../Images/Logo/logo-2-1.png';
import Logo1 from '../../Images/Logo/logo-1-1.png';


function Header({handleCallback}) {


    const[markerLeft , setMarkerLeft]=useState(0)


       
   const marker = (e) => {
    let leftvalue = e.target.offsetLeft;
    setMarkerLeft(leftvalue)
   }
    return (
        <header>
            <div className="header-container container">
                <ul className="social">
                    <li> <Link to="#" target="_blank"><FaFacebookF/></Link> </li>
                    <li> <Link to="#" target="_blank"><FaGooglePlusG/></Link> </li>
                    <li> <Link to="#" target="_blank"><FaPinterestP/></Link> </li>
                    <li> <Link to="#" target="_blank"><FaTwitter/></Link> </li>
                    <li> <Link to="#" target="_blank"><FaVimeoV/></Link> </li>
                </ul>
                <div className="profile-pic">
                    <img src={Logo1} alt="" />
                </div> 
                <div className="search">
                    <span className='btn' onClick={()=>handleCallback(false)}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </span>
                    <span><FaSearch/></span>
                    <span>
                        <FaShoppingCart/>
                        <span></span>
                    </span>
                </div>
                <ul className="navigation" onMouseLeave={()=>setMarkerLeft(0)}>
                   
                <li   onMouseEnter={(e)=>{marker(e)}} className='active'><NavLink to="/">Home</NavLink></li>
                    <li  onMouseEnter={(e)=>{marker(e)}}> <NavLink to="#">Pages</NavLink></li>
                    <li onMouseEnter={(e)=>{marker(e)}}><NavLink to="#">Category</NavLink></li>
                    <li> <img src={Logo2} alt="" />  </li>
                    <li  onMouseEnter={(e)=>{marker(e)}}><NavLink to="#">Layout</NavLink></li>
                    <li  onMouseEnter={(e)=>{marker(e)}}> <NavLink to="#">About</NavLink></li>
                    <li  onMouseEnter={(e)=>{marker(e)}}><NavLink to="#">Features</NavLink></li>

                    <span className="marker" style={{left:markerLeft}}></span>

                </ul>
            </div>
        </header>
    )
}

export default Header
