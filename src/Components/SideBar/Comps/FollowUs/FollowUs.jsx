import React from 'react'
import './FollowUs.css'
import {FaFacebookF , FaPinterestP ,FaSkype, FaTwitter, FaInstagram } from 'react-icons/fa'
import {Link} from 'react-router-dom'


function FollowUs() {
    return (
        <div className='follow-us'>
            <h3 className="title">FLLOW US</h3>
            <ul className="logos">
                <li><Link to="#" target="_blank"> <FaFacebookF/> </Link></li>
                <li><Link to="#" target="_blank"> <FaPinterestP/> </Link></li>
                <li><Link to="#" target="_blank"><FaSkype/> </Link></li>
                <li><Link to="#" target="_blank"> <FaTwitter/> </Link></li>
                <li><Link to="#" target="_blank"> <FaInstagram/> </Link></li>
            </ul>
            <div className="body">
                <h4 className="body-title">NEWSLETTER</h4>
                <p>Fill your email below to subscribe to my newsletter</p>
            </div>
            <form className='form' action="">
                <input type="email" name="" id="" placeholder='Email'/>
                <input type="submit" value="Subscribe" />
            </form>
            
        </div>
    )
}

export default FollowUs
