import React from 'react';
import logo from '../../../Images/logo2.png';
import homegif from '../../../Images/homepage.gif';
import './Home.css';

const Home = () => {

    return (
        <div id='home' className='page-bg-white-odd d-flex justify-content-center align-items-center'>
            <div className='container home-content'>
                <div className="row">
                    <div className="col-12 col-lg-6">
                        <h1 className='fw-bold mb-4 heading'>দেশের প্রথম ডিজিটাল ডাস্টবিন ম্যানেজমেন্ট প্ল্যাটফর্ম</h1>
                        <h5 className='mb-4'>ডিজিটাল বাংলাদেশ এর অগ্রযাত্রায় সিটি কর্পোরেশন-এর বর্জ্যের সঠিক ব্যবস্থাপনা এবং বর্জ্য থেকে সম্পদ উৎপাদনের লক্ষ্যে....</h5>
                        <button className='button-for-white-bg px-5' data-bs-toggle="modal" data-bs-target="#exampleModal">বিস্তারিত</button>

                        {/* modal */}
                        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <img src={logo} className="w-25" alt="" />
                                        <button type="button" className="me-2 btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
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
            </div>
        </div>
    );
};

export default Home;