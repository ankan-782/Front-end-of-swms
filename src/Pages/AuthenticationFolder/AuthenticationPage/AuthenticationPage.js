import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../Images/logo.png';
import './AuthenticationPage.css';

const AuthenticationPage = () => {

    //removing user authentication state message
    const [toast, setToast] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            if (localStorage.getItem('logout')) {
                localStorage.removeItem('logout');
                setToast(false);
            }
        }, 5000);
    }, [toast]);

    return (
        <>
            <Link to='/'><img className='logo-img-authentication-page mb-3' src={logo} alt="" /></Link>
            <h5 className='signIn-signUp-title'>অথেনটিকেশন পোর্টাল</h5>
            <div className='mt-5'>
                <h1 className='mb-4'>আপনি কে ?</h1>
                <div className='button-links'>
                    <Link to='/authentication/loginForTruckDriver' className='mx-auto button-for-black-bg d-block mb-3'>ট্রাক ড্রাইভার</Link>
                    <Link to='/authentication/loginForCityCorp' className='mx-auto button-for-black-bg d-block'>সিটি কর্পোরেশন অথোরিটি</Link>
                </div>
                {/* <div className='authentication-page-alert'>
                    <p className='mb-3 text-warning '>বিশেষ দ্রষ্টব্য: আপনি যদি</p>
                    <p className='mb-2 text-warning text-start'>* পুরনো ট্রাক ড্রাইভার ইউজার হয়ে থাকেন তাহলে ট্রাক ড্রাইভার বাটনে ক্লিক করে লগিন বাটনে ক্লিক করুন |</p>
                    <p className='mb-2 text-warning text-start'>* আপনি যদি সিটি কর্পোরেশন এডমিন ইউজার হয়ে থাকেন তাহলে সিটি কর্পোরেশন অথোরিটি বাটনে ক্লিক করে লগিন করুন |</p>
                    <p className='mb-2 text-warning text-start'>* নতুন ট্রাক ড্রাইভার ইউজার হিসেবে অ্যাপ্লাই করতে চান তাহলে ট্রাক ড্রাইভার বাটনে ক্লিক করে অ্যাপ্লাই বাটনে ক্লিক করুন |</p>
                    <p className='text-warning text-start'>* সাধারণ ইউজার হয়ে থাকেন তাহলে দয়ে করে এই পেজ থেকে চলে যান |</p>
                </div> */}
            </div>

            {/* displaying user authentication state message */}
            <div >
                {(<div className={`${localStorage.getItem('logout') ? 'active-toast' : 'toast-container'} toast-bg`} style={{ 'zIndex': 11 }} role="alert">
                    <p className='m-0'>সাইন আউট সফল হয়েছে</p>
                </div>)}
            </div>
        </>
    );
};

export default AuthenticationPage;