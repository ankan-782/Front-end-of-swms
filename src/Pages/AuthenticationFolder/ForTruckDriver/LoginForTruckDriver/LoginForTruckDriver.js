import React from 'react';
import withAuthentication from '../../../../HOC/withAuthentication';
import useAuthValues from '../../../../Hooks/useAuthValues';
import { Link } from 'react-router-dom';
import logo from '../../../../Images/logo.png';
import './LoginForTruckDriver.css';

const LoginForTruckDriver = (props) => {
    const { inputActive, setInputActive, showPassword, showHideTogglePassword, handleOnChange, inputFieldInfos, location, navigate } = props;

    const { loginProcessForTruckDriver, setError, error, setBackendError, backendError } = useAuthValues();

    const handleLoginForTruckDriver = e => {
        e.preventDefault();
        loginProcessForTruckDriver(inputFieldInfos.username, inputFieldInfos.password, location, navigate);
    }

    return (
        <>
            <div className='login-registration-content-part'>
                <Link to='/'><img className='logo-for-login mb-2 mb-xl-0' src={logo} alt="" /></Link>
                <h5 style={{ 'color': '#50c458' }} className='my-3'>ট্রাক ড্রাইভার ইউজারদের জন্যে</h5>
                <h4 className='mb-4'>সাইন ইন</h4>
                <div className='form-portion'>
                    <form onSubmit={handleLoginForTruckDriver} className="form mx-auto mb-4">
                        <div className='mb-4'>
                            <input title='এন আই ডি নাম্বার' name="username" onChange={handleOnChange} onFocus={() => setInputActive('username')} onBlur={() => setInputActive('')} onClick={() => { setError(''); setBackendError('') }} type="text" className={`${inputActive === 'username' && "inputActive"} input-bg border-0 p-3`} placeholder="এন আই ডি নাম্বার" autoComplete="on" required />
                        </div>
                        <div className='mb-5 password-field'>
                            
                            <input
                                title='পিন নাম্বার'
                                name="password"
                                onChange={handleOnChange}
                                onFocus={() => setInputActive('password')}
                                onBlur={() => setInputActive('')}
                                onClick={() => {
                                    setError('');
                                    setBackendError('')
                                }}
                                type={showPassword ? 'number' : 'password'}
                                className={`${inputActive === 'password' && "inputActive"} input-bg border-0 p-3`}
                                placeholder="পিন নাম্বার"
                                autoComplete="on"
                                required
                            />
                            {showPassword ?
                                <i
                                    onClick={showHideTogglePassword}
                                    className="fa-solid fa-eye-slash show-hide-toggle"
                                >

                                </i> :
                                <i
                                    onClick={showHideTogglePassword}
                                    className="fa-solid fa-eye show-hide-toggle"
                                >
                                </i>}

                        </div>
                        <button type='submit' className='form-btn p-3 fw-bold'>সাইন ইন</button>
                    </form>
                    <Link to='/authentication/loginForTruckDriver/forgotPassForTruckDriver' className='reset-pass d-block mb-3 fw-bold'>আপনি কি পিন নাম্বার ভুলে গিয়েছেন ?</Link>
                    {/* <Link to='/dashboard/registrationForTruckDriver' className='register-divert fw-bold'>আপনি কি SWMS এ নতুন ? সাইন আপ করুন</Link> */}
                    {backendError && (<p className='mt-3 text-danger fw-bold'>{backendError}</p>)}
                    {error && (<p className='mt-3 text-danger fw-bold'>{error}</p>)}
                </div>
            </div>
        </>
    );
};

export default withAuthentication(LoginForTruckDriver);