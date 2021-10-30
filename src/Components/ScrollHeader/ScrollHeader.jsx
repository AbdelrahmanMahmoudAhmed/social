import React ,{useState , useEffect , useRef} from 'react'
import './ScrollHeader.css'
import {FaSearch, FaShoppingCart} from 'react-icons/fa'
import Logo2 from '../../Images/Logo/logo-2-1.png';
import {NavLink} from 'react-router-dom'




function ScrollHeader({scrollHeader , handleCallback}) {

 

 

    const[markerLeft , setMarkerLeft]=useState(0)


       
   const marker = (e) => {
    let leftvalue = e.target.offsetLeft;
    setMarkerLeft(leftvalue)
   }

   

    const fixedHeader = useRef()
    useEffect(() => {
        if(scrollHeader){
            fixedHeader.current.style.height = '85px'
            fixedHeader.current.style.visibility = 'visible'
        }else{
            fixedHeader.current.style.height = '0'
            fixedHeader.current.style.visibility = 'hidden'
        }
        
    }, [scrollHeader])

    const toTop = () => {
        window.scrollTo({
            top:0 
        })
    }
    return (
        <div className='scroll-header' ref={fixedHeader} >
            <div className="search">
                    <span className='btn' onClick={()=>handleCallback(false)} >
                        <span></span>
                        <span></span>
                        <span></span> 
                    </span>
                    <span><FaSearch/></span>
                    <span>
                        <FaShoppingCart/>
                        <span></span>
                    </span>
                </div>
                <ul className="navigation navigation-fixed" onMouseLeave={()=>setMarkerLeft(0)} >
                   
                    <li onClick={toTop}  onMouseEnter={(e)=>{marker(e)}} className='active'><NavLink to="/">Home</NavLink></li>
                    <li onClick={toTop}  onMouseEnter={(e)=>{marker(e)}}> <NavLink to="#">Pages</NavLink></li>
                    <li onClick={toTop} onMouseEnter={(e)=>{marker(e)}}><NavLink to="#">Category</NavLink></li>
                    <li> <img src={Logo2} alt="" />  </li>
                    <li onClick={toTop} onMouseEnter={(e)=>{marker(e)}}><NavLink to="#">Layout</NavLink></li>
                    <li onClick={toTop} onMouseEnter={(e)=>{marker(e)}}> <NavLink to="#">About</NavLink></li>
                    <li onClick={toTop} onMouseEnter={(e)=>{marker(e)}}><NavLink to="#">Features</NavLink></li>

                    <span className="marker" style={{left:markerLeft}}></span>
                </ul>

        </div>
    )
}

export default ScrollHeader
