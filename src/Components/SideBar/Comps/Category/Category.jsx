import React from 'react'
import {Link} from 'react-router-dom'
import './Category.css'


function Category() {
    

    return (
        <div className='category'>
            <div className="sidebar-header">
                <h3 className="title">CATEGORY</h3>
                <span></span>
            </div>
            <div className="category-fractions" >
                <Link  to='/categories/fashion' onClick={()=>window.scrollTo({top: 0})}>
                    <div className="fraction" style={{backgroundImage:'url(http://a6e8z9v6.stackpathcdn.com/akea/wp-content/uploads/2018/11/cat-bg-fashion.jpg)'}}>
                        <span>Fashion</span>
                        <span>5</span>
                    </div>
                </Link>
                <Link to='/categories/food' onClick={()=>window.scrollTo({top: 0})}>
                    <div className="fraction" style={{backgroundImage:'url(http://a6e8z9v6.stackpathcdn.com/akea/wp-content/uploads/2018/11/cat-bg-food.jpg)'}}>
                        <span>Food</span>
                        <span>6</span>
                    </div> 
                </Link>
                <Link to='/categories/photography'onClick={()=>window.scrollTo({top: 0})} >
                    <div className="fraction" style={{backgroundImage:'url(http://a6e8z9v6.stackpathcdn.com/akea/wp-content/uploads/2018/11/cat-bg-photography.jpg)'}}>
                    <span>Photography</span>
                    <span>11</span>
                    </div> 
                </Link>

                <Link to='/categories/technology' onClick={()=>window.scrollTo({top: 0})} >
                    <div className="fraction" style={{backgroundImage:'url(https://a6e8z9v6.stackpathcdn.com/akea/wp-content/uploads/2018/11/cat-bg-tech.jpg)'}}>
                        <span>Technology</span>
                        <span>6</span>
                    </div> 
                </Link>
                <Link to='/categories/travel' onClick={()=>window.scrollTo({top: 0})} >
                    <div className="fraction" style={{backgroundImage:'url(http://a6e8z9v6.stackpathcdn.com/akea/wp-content/uploads/2018/11/cat-bg-travel.jpg)'}}>
                        <span>Travel</span>
                        <span>9</span>
                    </div> 
                </Link>

            </div>
            
        </div>
    )
}

export default Category
