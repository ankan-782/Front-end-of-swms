import React from 'react';
import liveView from '../../../Images/liveView.svg';
import database from '../../../Images/database.svg';
import realTimeData from '../../../Images/realTimeData.svg';
import smsAlert from '../../../Images/SMSAlert.svg';
import liveTracking from '../../../Images/LiveTracking.svg';
import wasteRecycle from '../../../Images/wasteRecycle.svg';
import './Solution.css';

const Solution = () => {
    return (
        <div id='solution' className='all-page-bg page-bg-white-odd d-flex justify-content-center align-items-center'>
            <div className='container solution-content'>
                <div className='mb-5 mt-5 mt-lg-0'>
                    <h1 style={{ 'fontSize': '3rem' }} className='fw-bold text-center'>সমাধান হোক আমাদের সাথেই !</h1>
                </div>
                <div className='row g-lg-5 mb-5 mb-lg-0'>
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="text-center">
                            <img src={liveView} className="solution-img mb-3" alt="" />
                            <h1 style={{ 'fontSize': '2rem' }} className="fw-bold">লাইভ ভিউ</h1>
                        </div>
                        <h5>সিসি ক্যামেরার মাধ্যমে স্টেশনগুলোতে পরিচ্ছন্নতা কর্মীদের বর্জ্য সংগ্রহ পর্যবেক্ষণ</h5>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="text-center">
                            <img src={realTimeData} className="solution-img mb-3" alt="" />
                            <h1 style={{ 'fontSize': '2rem' }} className="fw-bold">রিয়েল টাইম ডাটা</h1>
                        </div>
                        <h5>সেন্সরের মাধ্যমে সার্বক্ষণিক বিভিন্ন ধরণের বর্জ্যের পরিমান সম্পর্কে অবগত হওয়া</h5>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="text-center">
                            <img src={database} className="solution-img mb-3" alt="" />
                            <h1 style={{ 'fontSize': '2rem' }} className="fw-bold">ডাটাবেজ</h1>
                        </div>
                        <h5>প্রতিটি স্টেশনের বিন স্ট্যাটাস, বর্জ্য সংগ্রহের সময় এবং বর্জ্য সংগ্রহকারীদের সমস্ত তথ্য ডাটাবেজে সংরক্ষিত রাখা</h5>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="text-center">
                            <img src={smsAlert} className="solution-img mb-3" alt="" />
                            <h1 style={{ 'fontSize': '2rem' }} className="fw-bold">এসএমএস এলার্ট</h1>
                        </div>
                        <h5>স্টেশনে যথেষ্ট পরিমান বর্জ্য জমা হলে তা সংগ্রহের জন্য ট্রাক ড্রাইভারের মোবাইলে এসএমএস প্রেরণ</h5>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="text-center">
                            <img src={liveTracking} className="solution-img mb-3" alt="" />
                            <h1 style={{ 'fontSize': '2rem' }} className="fw-bold">ট্র্যাকিং</h1>
                        </div>
                        <h5>বর্জ্য সংগ্রহ থেকে শুরু করে তা ব্যবস্থাপনা ও পুনর্ব্যবহারযোগ্য কারখানায় প্রেরণের সমস্ত প্রক্রিয়া পর্যবেক্ষণ</h5>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="text-center">
                            <img src={wasteRecycle} className="solution-img mb-3" alt="" />
                            <h1 style={{ 'fontSize': '2rem' }} className="fw-bold">বর্জ্য ব্যবস্থাপনা</h1>
                        </div>
                        <h5>কোনো কথা শোনামাত্রই কি তুমি তাবিশ্বাস করবে? হয়তো বলবে, করবে, হয়তো বলবে “আমি করবো না।</h5>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Solution;