import React from 'react'
import './OurGallery.css'
import One from '../../Images/OurGalary/one.jpg'
import Two from '../../Images/OurGalary/two.jpg'
import Three from '../../Images/OurGalary/three.jpeg'
import Four from '../../Images/OurGalary/four.jpeg'
import Five from '../../Images/OurGalary/five.jpeg'

function OurGallery() {
    return (
        <div className='our-gallery container'>
            <h3 className="gallery-header">OUR GALLERY</h3>
            <div className="gallery-holder">
                <div className="pic">
                    <img src={One} alt="" />
                </div>
                <div className="pic">
                    <img src={Two} alt="" />
                </div>
                <div className="pic">
                    <img src={Three} alt="" />
                </div>
                <div className="pic">
                    <img src={Four} alt="" />
                </div>
                <div className="pic">
                    <img src={Five} alt="" />
                </div>
            </div>
        </div>
    )
}

export default OurGallery
