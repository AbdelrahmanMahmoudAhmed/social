import React from 'react'
import useFeach from '../../../../Hooks/useFeach'
import { Link } from 'react-router-dom'

import './RecentPost.css'
 
function RecentPost() {
    let { data: blogs, isLoading, errorMsg } = useFeach('http://localhost:4000/posts')

    return (
        <div className='recentPost'>
            <div className="sidebar-header">
                <h3 className="title">RECENT POST</h3>
                <span></span>
            </div>

            {blogs && blogs.slice(-4, -1).map(blog => (

                <div className="recentPost-holder" key={blog.id}>
                    <Link to={`/post/${blog.id}`} onClick={() => window.scrollTo({ top: 0 })}>
                        <div className="recent-img">
                            <img src={require(`../../../../${blog.postPic}`).default} alt="" />
                            <span className='trending'>{blog.postCategory.join(" , ")} </span>
                        </div>
                    </Link>
                    <Link to={`/post/${blog.id}`} onClick={() => window.scrollTo({ top: 0 })}>
                        <div className="title">{blog.postTitle}</div>
                    </Link>

                    <div className="auther">
                        <Link to={`/author/${blog.userName}`} onClick={() => window.scrollTo({ top: 0 })}>
                            <span className="name">{blog.userName}</span>
                        </Link>
                        <Link to={`/postDate/${blog.userName}`} onClick={() => window.scrollTo({ top: 0 })}>
                            <span className="date">{blog.postDate}</span>
                        </Link>
                    </div>
                </div>
            ))}
             {isLoading && <div className="loading">Loading ...............</div>}
            {!blogs && !isLoading && !errorMsg && (<div className="no-posts"> No Posts</div>)}
            {errorMsg && (<div className="err"> {errorMsg}</div>)}

        </div>
    )
}

export default RecentPost
