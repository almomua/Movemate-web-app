import React from 'react'
import { Link } from 'react-router-dom'
import { FaPhoneAlt, FaEnvelope, FaFacebook, FaInstagram, FaTwitter, FaWhatsapp,FaGooglePlay } from 'react-icons/fa';
import { AiFillApple } from 'react-icons/ai';
import './Footer.css'


const Footer = () => {

    return (
    <>
    <footer className="footer bottom">
        <div class="container">
            <div class="col text-center">
                <h3>MoveMate</h3>
            </div>
            <div class="row align-items-center">
                <div class="col text-center ">
                    <p className="mb-2"><FaPhoneAlt className="me-2 mb-1" style={{ fontSize: '20px', color: '#fff' }}/> +20 1137865901</p>
                    <p className="mb-2"><FaEnvelope className="me-2 mb-1" style={{ fontSize: '20px', color: '#fff' }} />movemate@gmail.com</p>
                </div>
                <div class="col text-center mb-2">
                    <Link href="www.facebook.com" className="me-3" style={{ fontSize: '20px', color: '#fff' }}><FaFacebook /></Link>
                    <Link href="www.instagram.com"className="me-3" style={{ fontSize: '20px', color: '#fff' }}><FaInstagram /></Link>
                    <Link href="www.twitter.com"className="me-3" style={{ fontSize: '20px', color: '#fff' }}><FaTwitter /></Link>
                    <Link href="www.whatsapp.com"className="me-3" style={{ fontSize: '20px', color: '#fff' }}><FaWhatsapp /></Link>
                </div>
                <div class="col text-end">
                    <Link href="www.googleplay.com" className="me-3" style={{ fontSize: '22px', color: '#fff' }}><FaGooglePlay /></Link>
                    <Link href="www.applestore.com" className="me-3" style={{ fontSize: '22px', color: '#fff' }}><AiFillApple /></Link>
                </div>
            </div>
            <div class="col text-center">
                <p>© 2024 All Rights Reserved.</p>
            </div>
        </div>
    </footer>
    </>
)
}

export default Footer;