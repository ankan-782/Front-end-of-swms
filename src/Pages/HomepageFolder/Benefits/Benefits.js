import React from 'react';
import benefitsGif from '../../../Images/tick-mark.gif';
import tick from '../../../Images/subidha.svg';
import './Benefits.css';

const Benefits = () => {
    return (
        <div id='benefits' className='all-page-bg page-bg-white d-flex justify-content-center align-items-center'>
            <div className='container benefits-content'>
                <div className='mb-lg-5 mt-5 mt-lg-0'>
                    <h1 style={{ 'fontSize': '3rem' }} className='fw-bold text-center'>সুবিধাসমূহ</h1>
                </div>
                <div className="row mb-5 mb-lg-0">
                    <div className="col-12 col-lg-7">
                        <img src={benefitsGif} alt="" className='benefits-gif' />
                    </div>
                    <div className="col-12 col-lg-5 d-flex flex-column justify-content-between mt-5 mt-lg-0">
                        <div className='mb-4 mb-lg-0'>
                            <img src={tick} alt="" className='tick me-3' />
                            <h3 className='d-inline'>এস এম এস অ্যালার্ট</h3>
                        </div>
                        <div className='mb-4 mb-lg-0'>
                            <img src={tick} alt="" className='tick me-3' />
                            <h3 className='d-inline'>২৪ ঘন্টা মনিটরিং</h3>
                        </div>
                        <div className='mb-4 mb-lg-0'>
                            <img src={tick} alt="" className='tick me-3' />
                            <h3 className='d-inline'>বর্জ্যের পরিমাণ জানা</h3>
                        </div>
                        <div className='mb-4 mb-lg-0'>
                            <img src={tick} alt="" className='tick me-3' />
                            <h3 className='d-inline'>সময়মতো বর্জ্য সংগ্রহ</h3>
                        </div>
                        <div className='mb-4 mb-lg-0'>
                            <img src={tick} alt="" className='tick me-3' />
                            <h3 className='d-inline'>ট্র্যাকিং</h3>
                        </div>
                        <div className='mb-4 mb-lg-0'>
                            <img src={tick} alt="" className='tick me-3' />
                            <h3 className='d-inline'>দূষণমুক্ত পরিবেশ</h3>
                        </div>
                        <div className='mb-4 mb-lg-0'>
                            <img src={tick} alt="" className='tick me-3' />
                            <h3 className='d-inline'>বর্জ্য থেকে সম্পদ</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Benefits;