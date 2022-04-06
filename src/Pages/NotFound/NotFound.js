import React from 'react';
import notFound from '../../Images/404-concept.gif';
import logo2 from '../../Images/logo2.png';
import './NotFound.css';
import { Link } from 'react-router-dom';
const NotFound = () => {
    return (
        <div className='all-page-bg page-bg-white d-flex justify-content-center align-items-center text-dark p-5'>
            <div className='text-center'>
                <img className='logo2' src={logo2} alt="" />
                <img className='notFound' src={notFound} alt="" />
                <div className='mb-5'>
                    <h4 className='mb-3 fw-bold'>Error 404!</h4>
                    <h6 className='fw-bold'>আপনি যে পেজে যেতে চাচ্ছেন তা খুজে পাওয়া যাচ্ছে না</h6>
                </div>
                <div>
                    <Link to='/' className='button-not-found fw-bold'>হোম পেজ এ চলে যান</Link>
                </div>
            </div>
        </div>
    );
};

export default NotFound;