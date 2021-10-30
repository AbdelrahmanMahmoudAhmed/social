import React from 'react'
import './Tags.css'
import {Link} from 'react-router-dom'


function Tags() {
    return (
        <div className='tags'>
            <div className="sidebar-header">
                <h3 className="title">TAGS</h3>
                <span></span>
            </div>
            <div className="tags-holder">
                <span className='tag'><Link to="#" target="_blank">beach</Link></span>
                <span className='tag'><Link to="#" target="_blank">dress</Link></span>
                <span className='tag'><Link to="#" target="_blank">fashion</Link></span>
                <span className='tag'><Link to="#" target="_blank">food</Link></span>
                <span className='tag'><Link to="#" target="_blank">gadget</Link></span>
                <span className='tag'><Link to="#" target="_blank">holiday</Link></span>
                <span className='tag'><Link to="#" target="_blank">nature</Link></span>
                <span className='tag'><Link to="#" target="_blank">ocean</Link></span>
                <span className='tag'><Link to="#" target="_blank">photography</Link></span>
                <span className='tag'><Link to="#" target="_blank">post format</Link></span>
                <span className='tag'><Link to="#" target="_blank">style</Link></span>
                <span className='tag'><Link to="#" target="_blank">teach</Link></span>
                <span className='tag'><Link to="#" target="_blank">tips</Link></span>
                <span className='tag'><Link to="#" target="_blank">travel</Link></span>
            </div>
            
        </div>
    )
}

export default Tags
