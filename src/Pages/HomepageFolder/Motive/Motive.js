import React from 'react';
import citygif from '../../../Images/city.gif';
import './Motive.css';

const Motive = () => {
    return (
        <div id='motive' className='all-page-bg page-bg-white d-flex justify-content-center align-items-center'>
            <div className='container motive-content'>
                <div className='mb-5 mb-lg-0 mt-5 mt-lg-0'>
                    <h1 style={{ 'fontSize': '3rem' }} className='fw-bold text-center'>আমাদের উদ্দেশ্য</h1>
                </div>
                <div className="row mb-5 mb-lg-0">
                    <div className="col-12 col-lg-6 d-lg-flex flex-column justify-content-center">
                        <div className='mb-4'>
                            <h1 style={{ 'fontSize': '2rem' }} className="fw-bold">বর্জ্য ব্যবস্থাপনা</h1>
                            <h5>বাসা-বাড়ি, হাট -বাজার কিংবা ব্যবসায়িক প্রতিষ্ঠানের সকল ধরণের বর্জ্যের পরিচর্যা এবং পূনর্ব্যবহার প্রক্রিয়ার মাধ্যমে সঠিক বর্জ্য ব্যবস্থাপনা নিশ্চিত করা ।</h5>
                        </div>
                        <div className='mb-4'>
                            <h1 style={{ 'fontSize': '2rem' }} className="fw-bold">অন টাইম ময়লা সংগ্রহ</h1>
                            <h5>যত্র তত্র বর্জ্য ফেলে না রেখে সঠিক সময়ে সংগ্রহ করে নির্ধারিত জায়গায় নিয়ে যাওয়া ।</h5>
                        </div>
                        <div className='mb-4'>
                            <h1 style={{ 'fontSize': '2rem' }} className="fw-bold">দুর্গন্ধমুক্ত ঢাকা শহর</h1>
                            <h5>বর্জ্য উন্মুক্ত স্থানে জমিয়ে না রেখে তা থেকে সম্পদ তৈরির মাধ্যমে দুর্গন্ধমুক্ত শহর গড়ে তোলা ।</h5>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6">
                        <img className='city-gif' src={citygif} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Motive;