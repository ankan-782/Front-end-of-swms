import React, { useEffect, useState } from 'react';
import useAuthValues from '../../../Hooks/useAuthValues';
import citygif from '../../../Images/city.gif';
import './Motive.css';

const Motive = () => {
    const { fillPercentageValue, handleDatabase } = useAuthValues();
    setInterval(handleDatabase, 3000);

    const [specificDriverInfo, setSpecificDriverInfo] = useState();
    useEffect(() => {
        fetch(`https://enigmatic-tundra-42778.herokuapp.com/truckDriverUsers/storeAndUpdateInfo/${localStorage.getItem('truckDriverNid')}`)
        .then(res => res.json())
        .then(data => setSpecificDriverInfo(data));
    }, [])

    return (
        <>
            <div id='motive' className='page-bg-white-even d-flex justify-content-center align-items-center'>
                <div className='container motive-content'>
                    <div className='home-dynamic-content'>
                        <div className='mb-5'>
                            <h1 style={{ 'fontSize': '2rem' }} className='fw-bold text-center'>এক নজরে</h1>
                        </div>
                        <div className='row'>
                            <div className='col-4 p-0 d-flex flex-column justify-content-center align-items-center text-center vl'>
                                {localStorage.getItem('truckId') ? <h3 className="fw-bold">{specificDriverInfo?.stsArea}</h3> : <h1 className="fw-bold">১টি</h1>}
                                {localStorage.getItem('truckId') ? <h5 className="fw-bold">এস.টি.এস এলাকা</h5> : <h5 className="fw-bold">শহর</h5>}
                            </div>
                            <div className='col-4 p-0 d-flex flex-column justify-content-center align-items-center text-center vl'>
                                {localStorage.getItem('truckId') ? <h3 className="fw-bold">{specificDriverInfo?.truckNo}</h3> : <h1 className="fw-bold">২টি</h1>}
                                {localStorage.getItem('truckId') ? <h5 className="fw-bold">ট্রাক নং</h5> : <h5 className="fw-bold">সিটি কর্পোরেশন</h5>}
                            </div>
                            <div className='col-4 p-0 d-flex flex-column justify-content-center align-items-center'>
                                {localStorage.getItem('truckId') ? <h3 className="fw-bold">{fillPercentageValue}%</h3> : <h1 className="fw-bold">৯০টি</h1>}
                                {localStorage.getItem('truckId') ? <h5 className="fw-bold">পরিপূর্ণ</h5> : <h5 className="fw-bold">ওয়ার্ড</h5>}
                            </div>
                        </div>
                    </div>
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
        </>

    );
};

export default Motive;