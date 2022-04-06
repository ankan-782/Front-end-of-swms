import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './DevelopersMeet.css';

const DevelopersMeet = () => {

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
        <div id='developers' className='all-page-bg d-flex justify-content-center align-items-center page-bg-white'>
            <div className="container developers-content">
                <div className='mb-5 mt-5 mt-lg-0'>
                    <h1 style={{ 'fontSize': '3rem' }} className='fw-bold text-center'>ডেভেলপার সম্পর্কে</h1>
                </div>
                <div className="row mb-5 mb-lg-0 g-5">
                    <div className="col-12 col-lg-6">
                        <div className='row g-5 px-4'>
                            <div className='person-field col-12'>
                                <h2>অভিজিৎ রায়</h2>
                                <h6>মার্ন স্ট্যাক ওয়েব ডেভেলপার</h6>
                                <p></p>
                            </div>
                            <div className='person-field col-12'>
                                <h2>মোহাম্মদ শোয়াইব</h2>
                                <h6>গ্রাফিক্স ডিজাইনার</h6>
                                <p></p>
                            </div>
                            <div className='person-field col-12'>
                                <h2>কিশোয়ার জাহান তিথী</h2>
                                <h6>ক্রিয়েটিভ কন্টেন্ট ক্রিয়েটার</h6>
                                <p></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6">
                        <h4 className='ms-1 mb-4'>আমাদের সম্পর্কে আপনার মতামত</h4>
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
    );
};

export default DevelopersMeet;