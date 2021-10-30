import React, {useState , useEffect} from 'react'
import useMainPages from '../../Hooks/useMainPages'

import './Categories.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretUp} from '@fortawesome/free-solid-svg-icons'

import Header from '../../Components/Header/Header'
import SideBar from '../../Components/SideBar/SideBar'
import Blogs from '../../Components/Blogs/Blogs'
import OurGallery from '../../Components/OurGallery/OurGallery'
import Footer from '../../Components/Footer/Footer'
import Stories from '../../Components/Stories/Stories'
import ScrollHeader from '../../Components/ScrollHeader/ScrollHeader'
import MediaHeader from '../../Components/MediaHeader/MediaHeader'
import NavList from '../../Components/NavList/NavList'

function Categories(props) {
    console.log(props.match.params)
    console.log((props.match.params[Object.keys(props.match.params)[0]]))
    console.log(Object.keys(props.match.params)[0])

    const [kind, setKind] = useState()
    const [filter, setFilter] = useState()


    

    let  {  navListVisiblaty , handleCallback , visible , toggleVal , scrollTopMargin , scrollHeader,toggle, topFunction } = useMainPages()


    useEffect(() => {


        setFilter(props.match.params[Object.keys(props.match.params)[0]])
        setKind(Object.keys(props.match.params)[0])

    }, [  props ])

    
 return (
        <div className='categories'>
            <NavList navListVisiblaty={navListVisiblaty} handleCallback={handleCallback}/>
            <Header handleCallback={handleCallback} />
            <ScrollHeader scrollHeader={scrollHeader}  handleCallback={handleCallback}/>
            <MediaHeader handleCallback={handleCallback}/>
            <div className="category-img">
                <h3 className="cate-caption">{kind}</h3>
                <div className="cate-name">{filter}</div>

            </div>
            <div className="home-content container">
                <div className="blog-holder">
                    <Blogs filter={filter} kind={kind}   />
                </div>
                <div className='sidebar-holder' >
                    <SideBar  />
                </div>
            </div>
            <OurGallery />
            <Footer toggleVal={toggleVal}   filter={props.match.params.postCategory}/>
            <span className="storis-toggle" onClick={toggle}>-</span>
            <span className="scrollTop" onClick={topFunction} style={{opacity:visible , marginBottom:`${scrollTopMargin}px`}}>
                <FontAwesomeIcon icon={faCaretUp} className="hover:text-red-500" ></FontAwesomeIcon>
            </span>
            <Stories toggleVal={toggleVal}/>
        </div>
    )
}

export default Categories
