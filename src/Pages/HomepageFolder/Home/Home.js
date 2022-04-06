import React from 'react';
import logo from '../../../Images/logo2.png';
import useAuthValues from '../../../Hooks/useAuthValues';
import homegif from '../../../Images/homepage.gif';
import './Home.css';

const Home = () => {
    const { fillPercentageValue, handleDatabase } = useAuthValues();
    setInterval(handleDatabase, 3000);

    return (
        <div id='home' className='all-page-bg page-bg-white d-flex justify-content-center align-items-center'>
            <div className='container home-content'>
                <div className="row mt-4 mt-lg-0">
                    <div className="col-12 col-lg-6">
                        <h1 className='fw-bold mb-4 heading'>দেশের প্রথম ডিজিটাল ডাস্টবিন ম্যানেজমেন্ট প্ল্যাটফর্ম</h1>
                        <h5 className='mb-4'>ডিজিটাল বাংলাদেশ এর অগ্রযাত্রায় সিটি কর্পোরেশন-এর বর্জ্যের সঠিক ব্যবস্থাপনা এবং বর্জ্য থেকে সম্পদ উৎপাদনের লক্ষ্যে....</h5>
                        <button className='button-for-white-bg px-5' data-bs-toggle="modal" data-bs-target="#exampleModal">বিস্তারিত</button>

                        {/* modal */}
                        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <img src={logo} class="w-25" alt="" />
                                        <button type="button" class="me-2 btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        <p>ডিজিটাল বাংলাদেশ এর অগ্রযাত্রায় সিটি কর্পোরেশন-এর বর্জ্যের সঠিক ব্যবস্থাপনা এবং বর্জ্য থেকে সম্পদ উৎপাদনের লক্ষ্যে এই স্বয়ংক্রিয় ব্যবস্থাপনার উন্মোচন।
                                            বর্জ্যের সঠিক ব্যবস্থাপনা আমাদের আর্থ-সামাজিক উন্নয়নের পাশাপাশি নিরাপদ পরিবেশ নিশ্চিত করতে সহায়তা করে। রাজধানী শহর ঢাকাকে কেন্দ্র করে ২টি সিটি কর্পোরেশন এবং ২২২টি ওয়ার্ড নিয়ে এই স্বয়ংক্রিয় বর্জ্য ব্যবস্থাপনার যাত্রা শুরু ।</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6 mt-4 mt-lg-0">
                        <img className='home-gif' src={homegif} alt="" />
                    </div>
                </div>
                <div className='row home-dynamic-content mt-lg-5 mb-4 mb-lg-0'>
                    <div className='col-4 p-0 d-flex flex-column justify-content-center align-items-center text-center vl'>
                        {localStorage.getItem('truckId') ? <h1 className="fw-bold">মোহাম্মদপুর</h1> : <h1 className="fw-bold">১টি</h1>}
                        {localStorage.getItem('truckId') ? <h5 className="fw-bold">STS এলাকা</h5> : <h5 className="fw-bold">শহর</h5>}
                    </div>
                    <div className='col-4 p-0 d-flex flex-column justify-content-center align-items-center text-center vl'>
                        {localStorage.getItem('truckId') ? <h1 className="fw-bold">KA-4700</h1> : <h1 className="fw-bold">২টি</h1>}
                        {localStorage.getItem('truckId') ? <h5 className="fw-bold">ট্রাক নং</h5> : <h5 className="fw-bold">সিটি কর্পোরেশন</h5>}
                    </div>
                    <div className='col-4 p-0 d-flex flex-column justify-content-center align-items-center'>
                        {localStorage.getItem('truckId') ? <h1 className="fw-bold">{fillPercentageValue}%</h1> : <h1 className="fw-bold">২২২টি</h1>}
                        {localStorage.getItem('truckId') ? <h5 className="fw-bold">পরিপূর্ণ</h5> : <h5 className="fw-bold">ওয়ার্ড</h5>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;