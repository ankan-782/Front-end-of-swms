import React from 'react';
import './Procedure.css';

const Procedure = () => {
    return (
        <div id='procedure' className='all-page-bg page-bg-white-even d-flex justify-content-center align-items-center'>
            <div className='container procedure-content'>
                <div className='mb-5 mt-5 mt-lg-0'>
                    <h1 style={{ 'fontSize': '3rem' }} className='fw-bold text-center'>কিভাবে কাজ করে ?</h1>
                </div>
                <div className='d-flex justify-content-center align-items-center mb-5 mb-lg-0'>
                    <iframe
                        style={{ 'border': '1px solid #50c458', 'padding': '20px', 'borderRadius': '10px' }}
                        width="1000"
                        height="500"
                        src="https://www.youtube.com/embed/bsBZgFcJ_xA"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                    >
                    </iframe>
                </div>
            </div>
        </div>
    );
};

export default Procedure;