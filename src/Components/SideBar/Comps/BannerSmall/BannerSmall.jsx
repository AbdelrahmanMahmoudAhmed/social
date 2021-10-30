import React from 'react'
import Banner2 from '../../../../Images/SideBar/banner-250.jpg'

function BannerSmall() {
    return (
        <div className='banner-small' style={{marginBottom:'50px'}} >
            <div className="sidebar-header">
                <h3 className="title">TAGS</h3>
                <span></span>
            </div>
            <div>
                <img src={Banner2} alt=""/>
            </div>
        </div>
    )
}

export default BannerSmall
