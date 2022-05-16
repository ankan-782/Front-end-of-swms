import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { Link as NavLink } from 'react-router-dom';
import logo from '../../../Images/logo.png'
import emailjs from 'emailjs-com';
import './Footer.css';
import { useLocation } from 'react-router-dom';

const Footer = () => {

    const location = useLocation();
    const [inputActive, setInputActive] = useState();

    const [success, setSuccess] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [opinions, setOpinions] = useState('');

    const formData = {
        from_name: name,
        to_name: 'Avijit Roy',
        message: opinions,
        reply_to: email,
    }

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.send('service_5ff3p9x', 'template_p2g1gnk', formData, 'user_0I50hgrwN6SybnFjW1APH')
            .then((result) => {
                console.log(result.text);
                setSuccess(true);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    };

    return (
        <div className='page-bg-black'>
            <div className='container-fluid text-white p-lg-5'>
                <div className="row gy-5">
                    <div className="col-12 col-lg-4">
                        <div>
                            <img className='logo-footer mb-3' src={logo} alt="" />
                            <p className='m-0 footer-description'>ডিজিটাল বাংলাদেশ এর অগ্রযাত্রায় সিটি কর্পোরেশন-এর বর্জ্যের সঠিক ব্যবস্থাপনা এবং বর্জ্য থেকে সম্পদ উৎপাদনের লক্ষ্যে এই স্বয়ংক্রিয় ব্যবস্থাপনার উন্মোচন। বর্জ্যের সঠিক ব্যবস্থাপনা আমাদের আর্থ-সামাজিক উন্নয়নের পাশাপাশি নিরাপদ পরিবেশ নিশ্চিত করতে সহায়তা করে। রাজধানী শহর ঢাকাকে কেন্দ্র করে ২টি সিটি কর্পোরেশন এবং ২২২টি ওয়ার্ড নিয়ে এই স্বয়ংক্রিয় বর্জ্য ব্যবস্থাপনার যাত্রা শুরু ।</p>
                            <div className='mt-5'>
                                <h3 style={{ 'color': '#50c458' }} className='ms-1 mb-3'>ইমেইলে আপডেট গ্রহন করুন</h3>
                                <form onSubmit={(e)=>{e.preventDefault()}}>
                                    <input title='আপনার ইমেইল আইডি' name='email' onFocus={() => setInputActive('email')} onBlur={() => setInputActive('')} type="email" className={`${inputActive === 'email' && "inputActive"} input-bg border-0 p-3`} placeholder="আপনার ইমেইল আইডি" autoComplete="on" required />
                                    <button type='submit' onClick={()=>{alert('আপনাকে শীঘ্রই আপডেট সম্পর্কে অবহিত করা হবে')}} className='form-btn mt-4 p-3 fw-bold'>পাঠিয়ে দিন</button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-4">
                        <div className='mt-lg-4 ps-lg-4'>
                            <h4 style={{ 'color': '#50c458' }} className='mb-4 mb-lg-5'>কোনো প্রয়োজন ?</h4>
                            <div className='d-flex flex-lg-column justify-content-between'>
                                <div className='me-2'>
                                    <p style={{ 'color': '#50c458' }} className="mb-3 ">হটলাইন নম্বর</p>
                                    <div className='d-lg-flex justify-content-start'>
                                        <div className='me-5 mb-4 mb-lg-0'>
                                            <p style={{ 'color': '#50c458' }} className="m-0">ঢাকা উত্তর সিটি কর্পোরেশন</p>
                                            <p className='m-0'>৮৮ ০২-৫৫০৫২০৮৪</p>
                                        </div>
                                        <div>
                                            <p style={{ 'color': '#50c458' }} className="m-0">ঢাকা দক্ষিন সিটি কর্পোরেশন</p>
                                            <p className='m-0'>০২২২৩৩৮৬০১৪</p>
                                            <p className='m-0'>০২২২৩৩৮৭৪৩১</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='mt-lg-5 me-2'>
                                    <p style={{ 'color': '#50c458' }} className="mb-3 ">SWMS স্যোশাল হ্যান্ডেল</p>
                                    <div className='social-links-footer'>
                                        <a href="https://www.facebook.com/swmsbd" target="_blank" className="me-3">
                                            <i title='SWMS ফেসবুক পেজ' className="fab fa-facebook"></i>
                                        </a>
                                        <a href="https://www.instagram.com/swmsbd/?fbclid=IwAR2olbJxbZ2ws0-Ac62eE7gcIXDj8lBpZFmYmjb1J6T8IjTPo64wUOzhwOo" target="_blank" className="me-3">
                                            <i title='SWMS ইন্সটাগ্রাম পেজ' className="fab fa-instagram"></i>
                                        </a>
                                        <a href="https://twitter.com/swmsbd?fbclid=IwAR3FOsMz6RHEiyevQ-c6lgHzny9TktybbhYeaRk3ZkSSK_mq536T8BXpK2U" target="_blank" className="me-3">
                                            <i title='SWMS টুইটার পেজ' className="fab fa-twitter"></i>
                                        </a>
                                    </div>
                                </div>

                                <div className='mt-lg-5'>
                                    <p style={{ 'color': '#50c458' }} className='mb-3'>নেভিগেশন</p>
                                    {(location?.pathname === '/dashboard') ?
                                        <div className='d-flex flex-column flex-lg-row flex-wrap'>
                                            <NavLink
                                                to="/"
                                                className='footer-nav-links mb-2 me-lg-3'
                                            >
                                                হোম
                                            </NavLink>
                                            <NavLink
                                                to="/dashboard"
                                                className='footer-nav-links mb-2 me-lg-3'
                                            >
                                                ড্যাশবোর্ড
                                            </NavLink>
                                        </div> :
                                        <div className='d-flex flex-column flex-lg-row flex-wrap'>
                                            <Link
                                                to='motive'
                                                style={{ 'cursor': 'pointer' }}
                                                className='footer-nav-links mb-2 me-lg-3'
                                                activeClass='active'
                                                spy={true}
                                                smooth={true}
                                                offset={0}
                                                duration={500}
                                            >
                                                উদ্দেশ্য
                                            </Link>
                                            <Link
                                                to='solution'
                                                style={{ 'cursor': 'pointer' }}
                                                className='footer-nav-links mb-2 me-lg-3'
                                                activeClass='active'
                                                spy={true}
                                                smooth={true}
                                                offset={0}
                                                duration={500}
                                            >
                                                সমাধান
                                            </Link>
                                            <Link
                                                to='procedure'
                                                style={{ 'cursor': 'pointer' }}
                                                className='footer-nav-links mb-2 me-lg-3'
                                                activeClass='active'
                                                spy={true}
                                                smooth={true}
                                                offset={0}
                                                duration={500}
                                            >
                                                কার্যপ্রণালী
                                            </Link>
                                            <Link
                                                to='benefits'
                                                style={{ 'cursor': 'pointer' }}
                                                className='footer-nav-links mb-2 me-lg-3'
                                                activeClass='active'
                                                spy={true}
                                                smooth={true}
                                                offset={0}
                                                duration={500}
                                            >
                                                সুবিধাসমুহ
                                            </Link>
                                            <Link
                                                to="contact"
                                                style={{ 'cursor': 'pointer' }}
                                                className='footer-nav-links mb-2 me-lg-3'
                                                activeClass='active'
                                                spy={true}
                                                smooth={true}
                                                offset={0}
                                                duration={500}
                                            >
                                                যোগাযোগ
                                            </Link>
                                            <Link
                                                to="developers"
                                                style={{ 'cursor': 'pointer' }}
                                                className='footer-nav-links mb-2 me-lg-3'
                                                activeClass='active'
                                                spy={true}
                                                smooth={true}
                                                offset={0}
                                                duration={500}
                                            >
                                                ডেভেলপার সম্পর্কে
                                            </Link>
                                        </div>}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-4">
                        <div className='mt-lg-4'>
                            <div>
                                <h4 style={{ 'color': '#50c458' }} className='ms-1 mb-4'>আপনার মতামত দিন</h4>
                                <form onSubmit={sendEmail} >
                                    <input title='আপনার নাম' name='name' onChange={e => setName(e.target.value)} onFocus={() => setInputActive('name')} onBlur={() => setInputActive('')} type="text" className={`${inputActive === 'name' && "inputActive"} input-bg border-0 p-3 mb-4`} placeholder="আপনার নাম" autoComplete="on" required />
                                    <input title='আপনার ইমেইল আইডি' name='email' onChange={e => setEmail(e.target.value)} onFocus={() => setInputActive('email')} onBlur={() => setInputActive('')} type="email" className={`${inputActive === 'email' && "inputActive"} input-bg border-0 p-3 mb-4`} placeholder="আপনার ইমেইল আইডি" autoComplete="on" required />
                                    <textarea title='আপনার মতামত' style={{ 'height': '130px' }} name="opinions" onChange={e => setOpinions(e.target.value)} onFocus={() => setInputActive('opinions')} onBlur={() => setInputActive('')} type="text" className={`${inputActive === 'opinions' && "inputActive"} border-0 p-3 input-bg mb-4`} placeholder="আপনার মতামত" required />
                                    <button type='submit' className='form-btn p-3 fw-bold'>পাঠিয়ে দিন</button>
                                </form>
                                {success && <p className='mt-3 text-center'>আপনার মতামত গ্রহন করা হল</p>}
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="container-fluid mt-5 mb-3" />
                <div className="mt-lg-4">
                    <div className='d-flex justify-content-between align-content-center'>
                        <div >
                            <p className='d-lg-inline me-lg-4'>কপিরাইট © ২০২২</p>
                            <p className='d-lg-inline d-none me-lg-4'>|</p>
                            <NavLink to='/' className='d-lg-inline me-lg-4 SWMS'>SWMS</NavLink>
                            <p className='d-lg-inline d-none me-lg-4'>|</p>
                            <p className='d-lg-inline'>সমস্ত অধিকার সংরক্ষিত</p>
                        </div>
                        <div >
                            <NavLink to="/terms" className='d-lg-inline me-lg-4 terms-condition-footer'>টার্মস অব ইউজ</NavLink>
                            <NavLink to="/privacy" className='d-lg-inline me-lg-4 privacy-policy-footer'>প্রাইভেসি পলিসি</NavLink>
                            <NavLink to="/cookie" className='d-lg-inline cookie-policy-footer'>কুকি পলিসি</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;