import React ,{useState} from 'react'
import useMainPages from '../../Hooks/useMainPages'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretUp} from '@fortawesome/free-solid-svg-icons'

import Header from '../../Components/Header/Header'
import Blogs from '../../Components/Blogs/Blogs'
import Footer from '../../Components/Footer/Footer'
import Stories from '../../Components/Stories/Stories'
import ScrollHeader from '../../Components/ScrollHeader/ScrollHeader'
import MediaHeader from '../../Components/MediaHeader/MediaHeader'
import NavList from '../../Components/NavList/NavList'
import Form from './Components/Form/Form'
import Replay from './Components/Reply/Replay'



function PostPage(props) { 

    const [allReplays, setAllReplays] = useState([])

    
    const theData = (childData) =>{

        let x = childData

        setAllReplays([...allReplays, x])

    }

  

    

    let  {  navListVisiblaty , handleCallback , visible , toggleVal , scrollTopMargin , scrollHeader,toggle, topFunction } = useMainPages()

    return (
        <div className='post-page'>
             <NavList navListVisiblaty={navListVisiblaty} handleCallback={handleCallback}/>
            <Header handleCallback={handleCallback} />
            <ScrollHeader scrollHeader={scrollHeader}  handleCallback={handleCallback}/>
            <MediaHeader handleCallback={handleCallback}/>

            <Blogs filter={props.match.params.id} kind='post'/>
            <Replay allReplays={allReplays} />
            <Form theData={theData}/>


            <Footer toggleVal={toggleVal} />
            <span className="storis-toggle" onClick={toggle}>-</span>
            <span className="scrollTop" onClick={topFunction} style={{opacity:visible , marginBottom:`${scrollTopMargin}px`}}>
                <FontAwesomeIcon icon={faCaretUp} className="hover:text-red-500" ></FontAwesomeIcon>
            </span>
            <Stories toggleVal={toggleVal}/>
        </div>
    )
}

export default PostPage
