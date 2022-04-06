import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './AuthenticationLayout.css';

const AuthenticationLayout = () => {

    return (
        <>
            <div className='all-page-bg page-bg-white d-flex justify-content-center align-items-center text-white py-5'>
                <div className="authentication-content text-center p-5">
                    <Link to='/authentication'>
                        <i className="fa-solid fa-arrow-left-long back-button" title='Go to Authentication Page'></i>
                    </Link>
                    <Outlet />
                </div>
            </div>

            {/* mobile device */}
            {/* <div className='d-xxl-none'>
                <div className='py-5 all-page-bg page-bg-white text-white'>
                    <div className="authentication-content mx-auto text-center p-5">
                        <Link to='/authentication'>
                            <i className="fa-solid fa-arrow-left-long back-button" title='Go to Authentication Page'></i>
                        </Link>
                        <Outlet />
                    </div>
                </div>
            </div> */}
        </>
    );
};

export default AuthenticationLayout;