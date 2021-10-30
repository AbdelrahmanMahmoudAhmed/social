import React from 'react'
import './NavList.css'
import {AiOutlineClose} from 'react-icons/ai'
import {NavLink } from 'react-router-dom'



function NavList({navListVisiblaty , handleCallback}) {
    

    const display = ()=>{
        if(navListVisiblaty){
            return (
                {height: "0" ,opacity:" 0", zIndex:"-9"}
            )
        }else{
            return(
                {height: "100%" , opacity: "100%" ,zIndex:"9999999"} 

                
            )
        }
    }
    
    return (
        <div className='NavList' style={display()}>
            <div className="navlist-overlay"></div>
            <ul className="NavList-list" style={display()} >
                <span className='close'onClick={()=>handleCallback(true)}> <AiOutlineClose /></span>
                <li onClick={()=>handleCallback(true)} ><NavLink to="/">HOME</NavLink></li>
                <li onClick={()=>handleCallback(true)}><NavLink to="#">PAGES</NavLink></li>
                <li onClick={()=>handleCallback(true)}><NavLink to="#">CATEGORY</NavLink></li>
                <li onClick={()=>handleCallback(true)}><NavLink to="#">LAYOUT</NavLink></li>
                <li onClick={()=>handleCallback(true)}><NavLink to="#">ABOUT</NavLink></li>
                <li onClick={()=>handleCallback(true)}><NavLink to="#">FEATURES</NavLink></li>
            </ul>

        </div>
    )
}

export default NavList
