import React, {useState , useEffect} from 'react'
import './Stories.css'
import One from '../../Images/Stories/christopher-burns-271403-unsplash-150x150.jpg'
import Two from '../../Images/Stories/juja-han-456323-unsplash-150x150.jpg'
import Three from '../../Images/Stories/max-bender-580753-unsplash-150x150.jpg'
import Four from '../../Images/Stories/pexels-photo-25284-150x150.jpg'
import Five from '../../Images/Stories/pexels-photo-225227-150x150.jpeg'
import Six from '../../Images/Stories/pexels-photo-736166-150x150.jpeg'
import Seven from '../../Images/Stories/pexels-photo-871053-150x150.jpeg'
import Eight from '../../Images/Stories/post-vr-150x150.jpg'
import Nine from '../../Images/Stories/yiran-ding-624696-unsplash-150x150.jpg'
import Ten from '../../Images/Stories/hugues-de-buyer-mimeure-335733-unsplash-150x150.jpg'

function Stories(props) {
    const[bottom, setBottom] = useState(0)

    useEffect(() => {
        props.toggleVal? setBottom(0) : setBottom(-70);
        
    }, [props])

    return (
        <div className='stories' style={{bottom:bottom}}>
            <h3 className="stories-title">
            MY NEW STORIES
            </h3>
            <ul className="stories-holder">
                <li><img src={One} alt="" /></li>
                <li><img src={Two} alt="" /></li>
                <li><img src={Three} alt="" /></li>
                <li><img src={Four} alt="" /></li>
                <li><img src={Five} alt="" /></li>
                <li><img src={Six} alt="" /></li>
                <li><img src={Seven} alt="" /></li>
                <li><img src={Eight} alt="" /></li>
                <li><img src={Nine} alt="" /></li>
                <li><img src={Ten} alt="" /></li>
            </ul>
        </div>
    )
}

export default Stories
