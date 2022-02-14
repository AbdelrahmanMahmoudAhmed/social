import React from 'react'
import { Link } from 'react-router-dom'
import useFeach from '../../../../Hooks/useFeach'
import './PopularPosts.css'


function PopularPosts() {


    let { data, isLoading, errorMsg } = useFeach('https://api.npoint.io/b0f45f64c3a8913d1e02/posts?_sort=reactCounter&_order=desc')
    // let { data, isLoading, errorMsg } = useFeach('http://localhost:4000/posts?_sort=reactCounter&_order=desc')

    return (
        <div className='popular-posts'>
            <div className="sidebar-header">
                <h3 className="title">POPULAR POST</h3>
                <span></span>
            </div>
            {data && data.slice(0, 3).map((item) => (
                <div className="pop-post" key={item.id}>
                    <div className="post-img">
                        <Link to={`/post/${item.id}`} onClick={() => window.scrollTo({ top: 0 })}>

                            <img src={require(`../../../../${item.postPic}`)} alt="" />
                        </Link>

                    </div>
                    <div className="pop-content">
                        <Link to={`/post/${item.id}`} onClick={() => window.scrollTo({ top: 0 })}>
                            <h4 className="pop-title">{item.postTitle}</h4>
                        </Link>
                        <div className="info-container">
                            <Link to={`/author/${item.userName}`} onClick={() => window.scrollTo({ top: 0 })} >
                                <span className="auther">{item.userName}</span>
                            </Link>
                            <Link to={`/postDate/${item.postDate}`}> <span className="date">{item.postDate}</span> </Link>

                        </div>
                    </div>
                </div>
            ))}
            {isLoading && <div className="loading">Loading ...............</div>}
            {!data && !isLoading && !errorMsg && (<div className="no-posts"> No Posts</div>)}
            {errorMsg && (<div className="err"> {errorMsg}</div>)}



        </div>
    )
}

export default PopularPosts
