import React, {useRef , useEffect , useState} from 'react'
import './Slider.css'

import Slide1 from '../../Images/Slider/hugues-de-buyer-mimeure-335733-unsplash.jpg'
import Slide2 from '../../Images/Slider/pexels-photo-736166-1300x530.jpeg'
import Slide3 from '../../Images/Slider/brooke-lark-289769-unsplash-1300x530.jpg'

import {GrPrevious, GrNext} from 'react-icons/gr'



function Slider() {
    const carousel =useRef()
    const carouselContent =useRef()
    const image = useRef();
    const [size , setSize] = useState()
    let count = 1 ;
    let currentSize = 0;
    
    

    useEffect(() => {
        
        setSize(image.current.clientWidth)

    },[]);
    
    
    const goForword = ()=>{
        count-- 
        if(count <= -3){count = -2}
        setSize(image.current.clientWidth)
        currentSize = size * count 
        carousel.current.style.transform = `translateX( ${currentSize}px)`
        carouselContent.current.style.transform = `translateX( ${currentSize}px)`
        console.log(size)
        console.log(count)
        console.log(size * count)
        
    }
    const goBack = ()=>{
        count++ 
        if(count >= 1){count = 0}
        setSize(image.current.clientWidth)
        currentSize = size * count 
        carousel.current.style.transform = `translateX( ${currentSize}px)`
        carouselContent.current.style.transform = `translateX( ${currentSize}px)`
        console.log(count)

    }
    
    return (
        <div  className='slider '>
            <div className="carousel-overlay"></div>
            <div ref={carousel} className="carousel ">
                <img ref={image}  src={Slide1} alt="" />
                <img  src={Slide2} alt="" />
                <img src={Slide3} alt="" />
            </div>
            <div className="carousel-content" ref={carouselContent}>
                <div className="slide">

                    <h3>Top Amazing Places to Go in Summer</h3>
                    <div className="info">
                        <span>NOVEMBER 6, 2018</span>
                        <span></span>
                        <span>PAUL NEWMAN</span>
                    </div>
                </div>
                <div className="slide">

                    <h3>5 Dessert Menus To Make In The Party</h3>
                    <div className="info">
                        <span>NOVEMBER 6, 2018</span>
                        <span></span>
                        <span>PAUL NEWMAN</span>
                    </div>
                </div>
                <div className="slide">

                    <h3>10 Most Awesome Breathtaking Places</h3>
                    <div className="info">
                        <span>NOVEMBER 6, 2018</span>
                        <span></span>
                        <span>PAUL NEWMAN</span>
                    </div>
                </div>
            </div>
            <div className="carousel-btns">
                <span  onClick={goBack} className="prev"> <GrPrevious /> </span>
                <span  onClick={goForword} className="next"><GrNext/></span>
            </div>
        </div>
    )
}

export default Slider
