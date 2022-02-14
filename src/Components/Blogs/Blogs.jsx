import React, { useState } from 'react'
import useFeach from '../../Hooks/useFeach'

import { Link } from 'react-router-dom'

import './Blogs.css'

import { BsHeart } from 'react-icons/bs'
import { FaFacebookF, FaGooglePlusG, FaPinterestP, FaMix, FaTwitter } from 'react-icons/fa'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'




function Blogs({ filter, kind }) {


    let [start, setStart] = useState(0)
    let [end, setEnd] = useState(5)



    const navBtns = (e) => {
        let stratPoint = (5 * (e.target.innerHTML - 1))
        let endPoint = (5 * (e.target.innerHTML))

        setStart(stratPoint)
        setEnd(endPoint)

        let elements = e.target.parentElement.children;
        for (let i = 0; i < elements.length; i++) {
            elements[i].classList.remove('active');
        }

        e.target.classList.add("active")

        if (elements[1].classList.contains('active')) {
            elements[0].classList.add('hidden')

        } else {
            elements[0].classList.remove('hidden')
        }

        if (elements[elements.length - 2].classList.contains('active')) {
            elements[elements.length - 1].classList.add('hidden')
        } else {
            elements[elements.length - 1].classList.remove('hidden')
        }

        window.scrollTo({ top: 0 })

    }

    const goForword = (e) => {
        let elements = e.target.parentElement.children;
        e.stopPropagation();

        if (e.target === elements[elements.length - 1]) {
            e.stopPropagation();

            setStart(start + 5)
            setEnd(end + 5)

            for (let i = 0; i < elements.length; i++) {
                elements[i].classList.remove('active');
            }

            let currentPage = ((start / 5) + 2)

            elements[currentPage].classList.add('active')


        } else if (e.target === elements[0]) {
            e.stopPropagation();

            setStart(start - 5)
            setEnd(end - 5)

            for (let i = 0; i < elements.length; i++) {
                elements[i].classList.remove('active');
            }

            let currentPage = ((start / 5))

            elements[currentPage].classList.add('active')


        }


        if (elements[1].classList.contains('active')) {
            elements[0].classList.add('hidden')

        } else {
            elements[0].classList.remove('hidden')
        }

        if (elements[elements.length - 2].classList.contains('active')) {
            elements[elements.length - 1].classList.add('hidden')
        } else {
            elements[elements.length - 1].classList.remove('hidden')
        }


        window.scrollTo({ top: 0 })

    }


    let forPost;
    let forPostP;
    if (kind === "post") {
        forPost = 'for-post container';
        forPostP = 'for-post-p';
    } else {
        forPost = '';
        forPostP = '';

    }


    let { data: blogs, isLoading, errorMsg } = useFeach('https://api.npoint.io/b0f45f64c3a8913d1e02/posts', kind, filter)
    // let { data: blogs, isLoading, errorMsg } = useFeach('http://localhost:4000/posts', kind, filter)


    return (
        <div className='blogs'>
            {
                blogs && blogs.slice(start, end).map((blog) => (

                    <div className="post" key={blog.id}>
                        <div className={`base-post-holder ${forPost}`}>


                            <div className="blog-img-section" >
                                <Link to={`/post/${blog.id}`} onClick={() => window.scrollTo({ top: 0 })}>
                                    <div className="blogs-img-holder">
                                        <div className="overlay"></div>
                                        <img src={require(`../../${blog.postPic}`)} alt="" />
                                    </div>
                                </Link>
                                <div className="react">
                                    <div className="heart">
                                        <BsHeart />
                                    </div>
                                    <div className="counter">{blog.reactCounter}</div>
                                </div>
                            </div>
                            <Link to={`/post/${blog.id}`} onClick={() => window.scrollTo({ top: 0 })}>
                                <h3 className="post-title">{blog.postTitle}</h3>
                            </Link>
                            <div className="post-info">
                                <div className="user-img" ><img src={require(`../../${blog.userPhoto}`).default} alt="" /></div>
                                <div className="auther">
                                    <Link to={`/author/${blog.userName}`} onClick={() => window.scrollTo({ top: 0 })} ><span className="name">{blog.userName}</span></Link>
                                    <span className="mark"></span>
                                </div>
                                <div className="date">
                                    <Link to={`/postDate/${blog.postDate}`}> <span className="name">{blog.postDate}</span> </Link>
                                    <span className="mark"></span>
                                </div>
                                <div className="post-category">
                                    <span className="name">{blog.postCategory.join(" , ")}</span>
                                    <span className="mark"></span>
                                </div>
                            </div>
                        </div>
                        <h3 className='for-post-title' style={{ display: kind === "post" ? "block" : "none" }}>{blog.pTitle} </h3>
                        <p className={`post-contenet ${forPostP}`}>{kind === "post" ? blog.postContent : blog.postContent.slice(0, 390) + '  ....'}</p>
                        <div className="social-share" style={{ display: kind === "post" ? "none" : "flex" }}>
                            <span className="social">
                                <FaFacebookF />
                                <FaGooglePlusG />
                                <FaPinterestP />
                                <FaMix />
                                <FaTwitter />
                            </span>
                            <span className="dashed-line">- - - - - - - - - - - - - - - -</span>
                        </div>
                    </div>


                ))
            }
            {isLoading && <div className="loading">Loading ...............</div>}
            {!blogs && !isLoading && !errorMsg && (<div className="no-posts"> No Posts</div>)}
            {errorMsg && (<div className="err"> {errorMsg}</div>)}
            <div style={{ display: kind === "post" ? "none" : "flex" }} className="transition">
                <span onClick={goForword} className='hidden'><IoIosArrowBack /></span>
                <span className='active' onClick={navBtns}  >1</span>
                <span onClick={navBtns}>2</span>
                <span onClick={navBtns}>3</span>
                <span onClick={navBtns}>4</span>
                <span onClick={goForword} ><IoIosArrowForward /></span>
            </div>
        </div>
    )
}

export default Blogs


