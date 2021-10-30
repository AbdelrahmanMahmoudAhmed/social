import React from 'react'
import './SideBar.css'
import AboutMe from './Comps/AboutMe/AboutMe'
import FollowUs from './Comps/FollowUs/FollowUs'
import PopularPosts from './Comps/PopularPosts/PopularPosts'
import BannerLarge from './Comps/BannerLarge/BannerLarge'
import Category from './Comps/Category/Category'
import Tags from './Comps/Tags/Tags'
import BannerSmall from './Comps/BannerSmall/BannerSmall'
import RecentPost from './Comps/RecentPost/RecentPost'


function SideBar() {
    return (
        <div className='sidebar'>
            <AboutMe />
            <FollowUs />
            <PopularPosts />
            <BannerLarge />
            <Category  />
            <Tags />
            <BannerSmall/>
            <RecentPost />
        </div>
    )
}

export default SideBar
