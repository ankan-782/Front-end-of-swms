import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div id='contact' className='all-page-bg d-flex justify-content-center align-items-center page-bg-white'>
            <div className="container contact-content">
                <div className='mb-5 mt-5 mt-lg-0'>
                    <h1 style={{ 'fontSize': '3rem' }} className='fw-bold text-center'>যোগাযোগ</h1>
                </div>
                <div className="row mb-5 mb-lg-0">
                    <div style={{ 'margin': '0 0 auto 0' }} className="col-12 col-lg-4 d-flex justify-content-center align-items-center">
                        <div>
                            <h4 className="mb-3">ঢাকা উত্তর সিটি কর্পোরেশন</h4>
                            <div className='mb-2'>
                                <p style={{ 'color': '#50c458' }} className="m-0">টেলিফোন নম্বর</p>
                                <p className='m-0'>৮৮ ০২-৫৫০৫২০৮৪</p>
                            </div>
                            <div className='mb-2'>
                                <p style={{ 'color': '#50c458' }} className="m-0">ইমেইল আইডি</p>
                                <p className='m-0'>info@dncc.gov.bd</p>
                            </div>
                            <div className='mb-2'>
                                <p style={{ 'color': '#50c458' }} className="m-0">ঠিকানা</p>
                                <p className='m-0'>গুলশান সেন্টার পয়েন্ট,</p>
                                <p className='m-0'>প্লট নং- ২৩-২৬, রোড নং- ৪৬,</p>
                                <p className='m-0'>গুলশান-২, ঢাকা-১২১২</p>
                            </div>
                            <div className=''>
                                <p style={{ 'color': '#50c458' }} className="m-0">ফেসবুক পেজ</p>
                                <div className='social-links-contact'>
                                    <a href="https://www.facebook.com/dncc.gov.bd/" target="_blank">
                                        <i title='ঢাকা উত্তর সিটি কর্পোরেশন' className="fab fa-facebook me-2"></i>
                                        ঢাকা উত্তর সিটি কর্পোরেশন
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={{ 'margin': '0 0 auto 0' }} className="col-12 col-lg-4 d-flex justify-content-center align-items-center">
                        <div>
                            <h4 className="mb-3">ঢাকা দক্ষিন সিটি কর্পোরেশন</h4>
                            <div className='mb-2'>
                                <p style={{ 'color': '#50c458' }} className="m-0">টেলিফোন নম্বর</p>
                                <p className='m-0'>০২২২৩৩৮৬০১৪</p>
                                <p className='m-0'>০২২২৩৩৮৭৪৩১</p>
                            </div>
                            <div className='mb-2'>
                                <p style={{ 'color': '#50c458' }} className="m-0">ইমেইল আইডি</p>
                                <p className='m-0'>info@dscc.gov.bd</p>
                            </div>
                            <div className='mb-2'>
                                <p style={{ 'color': '#50c458' }} className="m-0">ঠিকানা</p>
                                <p className='m-0'>নগর ভবন, ঢাকা-১০০০</p>
                            </div>
                            <div className=''>
                                <p style={{ 'color': '#50c458' }} className="m-0">ফেসবুক পেজ</p>
                                <div className='social-links-contact'>
                                    <a href="https://www.facebook.com/officialpage.dscc/" target="_blank">
                                        <i title='ঢাকা দক্ষিন সিটি কর্পোরেশন' className="fab fa-facebook me-2"></i>
                                        ঢাকা দক্ষিন সিটি কর্পোরেশন
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={{ 'margin': '0 0 auto 0' }} className="col-12 col-lg-4 d-flex justify-content-center align-items-center">
                        <div>
                            <h4 className="mb-3">SWMS অফিস</h4>
                            <div className='mb-2'>
                                <p style={{ 'color': '#50c458' }} className="m-0">টেলিফোন নম্বর</p>
                                <p className='m-0'>+8801515220309</p>
                                <p className='m-0'>+8801636456927</p>
                                {/* <p className='m-0'>+8801635314431</p> */}
                            </div>
                            <div className='mb-2'>
                                <p style={{ 'color': '#50c458' }} className="m-0">ইমেইল আইডি</p>
                                <p className='m-0'>mohammad15-11722@diu.edu.bd</p>
                                {/* <p className='m-0'>royavijit782@gmail.com</p>
                                <p className='m-0'>kishoar15-11472@diu.edu.bd</p> */}
                            </div>
                            <div className='mb-2'>
                                <p style={{ 'color': '#50c458' }} className="m-0">ঠিকানা</p>
                                <p className='m-0'>মোহাম্মদপুর, ঢাকা-১২০৭</p>
                            </div>
                            <div className=''>
                                <p style={{ 'color': '#50c458' }} className="m-0">ফেসবুক পেজ</p>
                                <div className='social-links-contact'>
                                    <a href="https://www.facebook.com/swmsbd" target="_blank">
                                        <i title='ঢাকা দক্ষিন সিটি কর্পোরেশন' className="fab fa-facebook me-2"></i>
                                        SWMS
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;