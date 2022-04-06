import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../../Images/logo.png';
import forgotImg from '../../../../Images/forgot.gif';
import './ForgotPasswordForTruckDriver.css';

const ForgotPasswordForTruckDriver = () => {
    return (
        <>
            <img className='logo-img-for-forgot-pass' src={logo} alt="" />
            <img className='forgotPass-img' src={forgotImg} alt="" />
            <div className='mt-5'>
                <h3 className='mb-4 text-warning'>আপনি কি পিন নাম্বার ভুলে গিয়েছেন ?</h3>
                <h6 className='mb-4'>তারাতারি সিটি কর্পোরেশন এর অফিসে যোগাযোগ করুন পিন নাম্বার রিসেট করার জন্যে</h6>
                <div className='button-links'>
                    <Link to='/' className='mx-auto button-for-black-bg d-block mb-3'>হোম পেজ এ চলে যান</Link>
                </div>
            </div>
        </>
    );
};

export default ForgotPasswordForTruckDriver;