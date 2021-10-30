import React from 'react'
import './MediaHeader.css'
import {FaSearch, FaShoppingCart} from 'react-icons/fa'
import Logo2 from '../../Images/Logo/logo-2-1.png';
import {Link} from 'react-router-dom'




function MediaHeader({handleCallback}) {

 
    return (
        <div className='media-header container'>
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
                <div className="logo-fr">
                <Link to="#" target="_blank">
                    <img src={Logo2} alt="" />
                    </Link>
                </div>
        </div>
    )
}

export default MediaHeader
