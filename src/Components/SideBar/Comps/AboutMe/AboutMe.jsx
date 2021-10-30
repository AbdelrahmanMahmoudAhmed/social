import React from 'react'
import './AboutMe.css'
import Profile from '../../../../Images/SideBar/about-image.png'
import {HiOutlineArrowNarrowRight} from 'react-icons/hi'

function AboutMe() {
    return (
        <div className='about-me'>
            <div className="sidebar-header">
                <h3 className="title">ABOUT ME</h3>
                <span></span>
            </div>
            <div className="img">
                <img src={Profile} alt="" />
            </div>
            <p className="text">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated.
            </p>
            <div className="more">
                <span>more about me</span>
                <span> <HiOutlineArrowNarrowRight className="more-arrow" color='#ec6a2a' /></span>
            </div>
            
        </div>
    )
}

export default AboutMe
