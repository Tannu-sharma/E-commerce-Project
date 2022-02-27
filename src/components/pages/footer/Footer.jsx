import React from 'react';
import './footer.css';
import Logo from '../ecommerceLogo/Logo';
import LogOutButton from '../logOutButton/LogOutButton';
import ContactUs from '../contactUs/ContactUs';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
    const navigate = useNavigate();
    return (
        <>
        <footer className='footer'>
        <div className='footerLogo'><Logo /></div>
        <div className='logOutButtonInFooter'><LogOutButton /></div>
          <div className="footerList">
                <ul>
                    <li><h1>SOCIAL</h1></li>
                    <li><a href="https://www.twitter.com" target="_blank">Twitter</a></li>
                    <li><a href="https://www.facebook.com" target="_blank">Facebook</a></li>
                    <li><a href="https://www.youtube.com" target="_blank">Youtube</a></li>
                    <li><a href="https://www.instagram.com" target="_blank">Instagram</a></li>
                </ul>
                <ul>
                    <li><h1>ABOUT</h1></li>
                    <li onClick={()=>navigate('/contactUs')}>Contact Us</li>
                    <li onClick={()=>navigate('/aboutUs')}>About Us</li>
                </ul>
                
            </div>
          
        </footer>

        </>
    )
}

export default Footer
