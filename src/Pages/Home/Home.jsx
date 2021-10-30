import React, { useState } from 'react'
import useMainPages from '../../Hooks/useMainPages'

import './Home.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretUp } from '@fortawesome/free-solid-svg-icons'

import Header from '../../Components/Header/Header'
import SideBar from '../../Components/SideBar/SideBar'
import Blogs from '../../Components/Blogs/Blogs'
import OurGallery from '../../Components/OurGallery/OurGallery'
import Footer from '../../Components/Footer/Footer'
import Stories from '../../Components/Stories/Stories'
import Slider from '../../Components/Slider/Slider'
import ScrollHeader from '../../Components/ScrollHeader/ScrollHeader'
import MediaHeader from '../../Components/MediaHeader/MediaHeader'
import NavList from '../../Components/NavList/NavList'

function Home(props) {


    const [kind, setKind] = useState()






    console.log(kind)
    const handleViewData = (childData) => {
        setKind(childData)


    }



    let { navListVisiblaty, handleCallback, visible, toggleVal, scrollTopMargin, scrollHeader, toggle, topFunction } = useMainPages()

    return (
        <div className='home'>
            <NavList navListVisiblaty={navListVisiblaty} handleCallback={handleCallback} />
            <Header handleCallback={handleCallback} />
            <ScrollHeader scrollHeader={scrollHeader} handleCallback={handleCallback} />
            <MediaHeader handleCallback={handleCallback} />
            <Slider />
            <div className="home-content container">
                <div className="blog-holder">
                    <Blogs kind={kind} handleViewData={handleViewData} />
                </div>
                <div className='sidebar-holder' >
                    <SideBar handleViewData={handleViewData} />
                </div>
            </div>
            <OurGallery />
            <Footer toggleVal={toggleVal} handleViewData={handleViewData} />
            <span className="storis-toggle" onClick={toggle}>-</span>
            <span className="scrollTop" onClick={topFunction} style={{ opacity: visible, marginBottom: `${scrollTopMargin}px` }}>
                <FontAwesomeIcon icon={faCaretUp} className="hover:text-red-500" ></FontAwesomeIcon>
            </span>
            <Stories toggleVal={toggleVal} />
        </div>
    )
}

export default Home
