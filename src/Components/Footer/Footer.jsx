import React, {useState , useEffect} from 'react'
import './Footer.css'
import {FaFacebookF, FaPinterestP, FaSkype, FaTwitter, FaInstagram} from 'react-icons/fa'
import {Link} from 'react-router-dom'


function Footer({toggleVal }) {



    const[margin, setMargin]=useState(70)
    useEffect(() => {
        toggleVal? setMargin(70) : setMargin(0);
    }, [toggleVal])


    


    return (
        <div className='footer'>
            <div className="footer-details">
                <div className="address-holder">
                    <h4>Akea, blogger</h4>
                    <div className="address">
                        <span>23 King Street, 5th Avenue, New York</span>
                        <span>+1-2355-3345-5</span>
                        <span className="site">call@akeablog.co</span>
                    </div>
                </div>
                <div className="footer-category">
                    <h4>Category</h4>
                    <ul className="cate">
                        <li><Link to="/categories/technology"onClick={()=>window.scrollTo({top: 0})} >Technology</Link></li>
                        <li><Link to="/categories/travel"onClick={()=>window.scrollTo({top: 0})} >Travel</Link></li>
                        <li><Link to="/categories/food"onClick={()=>window.scrollTo({top: 0})} >Food</Link></li>
                        <li><Link to="/categories/photography"onClick={()=>window.scrollTo({top: 0})} >Photography</Link></li>
                        <li><Link to="/categories/fashion"onClick={()=>window.scrollTo({top: 0})}>Fashion</Link></li>
                        <li><Link to="/categories/trending"onClick={()=>window.scrollTo({top: 0})}>Trending</Link></li>
                    
                    </ul>
                </div>
                <div className="footer-follow-us">
                    <h4>Follow Us</h4>
                    <ul className="follow">
                        <li><Link to="#" target="_blank"><FaFacebookF/></Link></li>
                        <li><Link to="#" target="_blank" ><FaPinterestP/></Link></li>
                        <li><Link to="#" target="_blank"><FaSkype/></Link></li>
                        <li><Link to="#" target="_blank"><FaTwitter/></Link></li>
                        <li><Link to="#" target="_blank"><FaInstagram/></Link></li>
                    </ul>
                </div>
            </div>
            <div className="footer-foot" style={{marginBottom:`${margin}px`}} >
                <div className="copyright">Copyright 2018 Akea Blog, All Right Reserved</div>
                <ul className="footer-nav">
                    <li><Link to="#" target="_blank">Home</Link> </li>
                    <li><Link to="#" target="_blank">About</Link></li>
                    <li><Link to="#" target="_blank">Updates</Link></li>
                    <li><Link to="#" target="_blank">Advertising</Link></li>
                    <li><Link to="#" target="_blank">Contact</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Footer
