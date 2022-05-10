import React from 'react';
import useAuthValues from '../../../Hooks/useAuthValues';
import dustBin30 from '../../../Images/bin-status-30.gif';
import dustBin70 from '../../../Images/bin-status-60.gif';
import dustBin100 from '../../../Images/bin-status-100.gif';
import dustbinEmpty from '../../../Images/bin-status-empty.png';
import dustbinFull from '../../../Images/bin-status-full.png';
import './BinFillingStatus.css';

const BinFillingStatus = () => {
    const { fillPercentageValue, handleDatabase } = useAuthValues();
    setInterval(handleDatabase, 3000);
    console.log(fillPercentageValue);

    return (
        <div className='all-page-bg page-bg-white d-flex justify-content-center align-items-center'>
            <div className='container bin-filling-page-content'>
                <div className='row gy-4'>
                    <div className='col-12 col-lg-6 mb-5 mb-lg-0'>
                        <div>
                            {fillPercentageValue === 0 && <img className='dustbin-img' src={dustbinEmpty} alt="" />}
                            {(fillPercentageValue > 0 && fillPercentageValue <= 30) && <img className='dustbin-img' src={dustBin30} alt="" />}
                            {(fillPercentageValue > 30 && fillPercentageValue <= 70) && <img className='dustbin-img' src={dustBin70} alt="" />}
                            {(fillPercentageValue > 70 && fillPercentageValue < 100) && <img className='dustbin-img' src={dustBin100} alt="" />}
                            {fillPercentageValue === 100 && <img className='dustbin-img' src={dustbinFull} alt="" />}
                        </div>
                        <div>
                            {fillPercentageValue === 0 && <h2>ডাম্প স্টেশন খালি পরে আছে</h2>}
                            {(fillPercentageValue > 0 && fillPercentageValue <= 30) && <h2>ডাম্প স্টেশনে ময়লা জমা শুরু হয়েছে</h2>}
                            {(fillPercentageValue > 30 && fillPercentageValue < 50) && <h2>ডাম্প স্টেশনে ময়লা অর্ধেকের কাছাকাছি পূর্ণ হতে চলেছে</h2>}
                            {(fillPercentageValue === 50) && <h2>ডাম্প স্টেশনে ময়লা অর্ধেক পূর্ণ হয়েছে</h2>}
                            {(fillPercentageValue > 50 && fillPercentageValue <= 70) && <h2>আপনার পূর্বনির্ধারিত ডাম্প স্টেশন থেকে ময়লা তোলার জন্যে প্রস্তুত হয়ে যান</h2>}
                            {(fillPercentageValue > 70 && fillPercentageValue < 100) && <h2>আপনি তারাতারি ময়লা তোলার জন্যে নির্ধারিত ডাম্প স্টেশন এ চলে যান</h2>}
                            {fillPercentageValue === 100 && <h2>দয়া করে ডাম্প স্টেশন থেকে ময়লা সরিয়ে ফেলুন</h2>}
                        </div>
                    </div>
                    <div style={{ 'margin': 'auto 0 0 0' }} className='col-12 col-lg-6'>
                        <h1 className='percentage mb-3'>{fillPercentageValue}%</h1>
                        <div className="progress progress-style mb-4">
                            <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow={fillPercentageValue} aria-valuemin="0" aria-valuemax="100" style={{ 'width': `${fillPercentageValue}%` }}></div>
                        </div>
                        <div>
                            <h1 className='mb-3'>STS এলাকা: মোহাম্মদপুর</h1>
                            <h4>ট্রাক নং: KA-4700</h4>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default BinFillingStatus;