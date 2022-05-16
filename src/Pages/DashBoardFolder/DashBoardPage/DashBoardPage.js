import React, { useState } from 'react';
import './DashBoardPage.css';

const DashBoardPage = () => {
    const [inputActive, setInputActive] = useState('');
    const [type, setType] = useState('');

    return (
        <div className='all-page-bg page-bg-white'>
            <div className='container dashboard-layout'>
                <h1 className='fw-bold mb-4'>ড্যাশবোর্ড</h1>
                <div className='d-flex flex-column flex-lg-row justify-content-between align-items-center mb-5'>
                    <div className='search-field-dashboard'>
                        <input
                            title='সার্চ করুন'
                            name='search'
                            onFocus={() => setInputActive('search')}
                            onBlur={() => setInputActive('')}
                            type="search"
                            className={`${inputActive === 'search' && "inputActive"} input-bg border-0 p-3 mb-4`}
                            placeholder="সার্চ করুন"
                            autoComplete="on"
                        />
                    </div>
                    <div className='date-field-dashboard'>
                        <input
                            id="date"
                            title='তারিখ বাছাই করুন'
                            name='date'
                            onFocus={() => {
                                setInputActive('date');
                                setType('date');
                            }}
                            onBlur={() => {
                                setInputActive('');
                                setType('');
                            }}
                            type={type ? 'date' : 'text'}
                            className={`${inputActive === 'date' && "inputActive"} input-bg border-0 p-3 mb-4`}
                            placeholder="তারিখ বাছাই করুন"
                            autoComplete="on"
                        />
                    </div>
                </div>
                <div className="">
                    <div className="dncc mb-4 p-4">
                        <div className='row'>
                            <div className='col-12 col-md-6'>
                                <h3>ঢাকা উত্তর সিটি কর্পোরেশন</h3>
                                <p>স্টেশন সংখ্যা : 100</p>
                            </div>
                            <div className='col-12 col-md-6 d-flex justify-content-md-between justify-content-between justify-content-lg-evenly align-items-center'>
                                <div style={{ 'border-radius': '10px' }} className='text-center bg-warning p-2 p-lg-3'>
                                    <p className='m-0 fw-bold'>ময়লা জমে গেছে</p>
                                    <h1 className='fw-bold'>25</h1>
                                </div>
                                <div style={{ 'border-radius': '10px' }} className='text-center bg-success text-white p-2 p-lg-3'>
                                    <p className='m-0 fw-bold'>তোলা হয়েছে</p>
                                    <h1 className='fw-bold'>3</h1>
                                </div>
                                <div style={{ 'border-radius': '10px' }} className='text-center bg-danger text-white p-2 p-lg-3'>
                                    <p className='m-0 fw-bold'>বাকি রয়েছে</p>
                                    <h1 className='fw-bold'>75</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="dscc p-4">
                        <div className='row'>
                            <div className='col-12 col-md-6'>
                                <h3>ঢাকা দক্ষিন সিটি কর্পোরেশন</h3>
                                <p>স্টেশন সংখ্যা : 100</p>
                            </div>
                            <div className='col-12 col-md-6 d-flex justify-content-md-between justify-content-between justify-content-lg-evenly align-items-center'>
                                <div style={{ 'border-radius': '10px' }} className='text-center bg-warning p-2 p-lg-3'>
                                    <p className='m-0 fw-bold'>ময়লা জমে গেছে</p>
                                    <h1 className='fw-bold'>33</h1>
                                </div>
                                <div style={{ 'border-radius': '10px' }} className='text-center bg-success text-white p-2 p-lg-3'>
                                    <p className='m-0 fw-bold'>তোলা হয়েছে</p>
                                    <h1 className='fw-bold'>7</h1>
                                </div>
                                <div style={{ 'border-radius': '10px' }} className='text-center bg-danger text-white p-2 p-lg-3'>
                                    <p className='m-0 fw-bold'>বাকি রয়েছে</p>
                                    <h1 className='fw-bold'>67</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashBoardPage;