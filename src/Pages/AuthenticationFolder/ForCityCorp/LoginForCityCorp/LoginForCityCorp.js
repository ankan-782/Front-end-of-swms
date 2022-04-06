import React from 'react';
import withAuthentication from '../../../../HOC/withAuthentication';
import useAuthValues from '../../../../Hooks/useAuthValues';
import { Link } from 'react-router-dom';
import logo from '../../../../Images/logo.png';
import './LoginForCityCorp.css';

const LoginForCityCorp = (props) => {
    const { inputActive, setInputActive, inputFieldInfos, location, navigate, showHideTogglePassword, handleOnChange, showPassword } = props;

    const { loginProcessForCityCorp, setError, error, setBackendError, backendError } = useAuthValues();

    const handleLoginForCityCorp = (e) => {
        e.preventDefault();
        loginProcessForCityCorp(inputFieldInfos.email, inputFieldInfos.password, location, navigate);
    }
    return (
        <>
            <div className='login-registration-content-part'>
                <Link to='/'><img className='logo-for-login-city-corp mb-2 mb-xl-0' src={logo} alt="" /></Link>
                <h5 style={{ 'color': '#50c458' }} className='my-3'>সিটি কর্পোরেশন অথোরিটি ব্যবহারের জন্যে</h5>
                <h4 className='mb-4' onClick={() => setError('')}>সাইন ইন</h4>
                <div className='form-portion'>
                    <form onSubmit={handleLoginForCityCorp} className="form mx-auto mb-4">
                        <div className='mb-4'>
                            <input title='আপনার ইমেইল আইডি' name='email' onChange={handleOnChange} onFocus={() => setInputActive('email')} onBlur={() => setInputActive('')} onClick={() => { setError(''); setBackendError('') }} type="email" className={`${inputActive === 'email' && "inputActive"} input-bg border-0 p-3`} placeholder="আপনার ইমেইল আইডি" autoComplete="on" required />
                        </div>
                        <div className='mb-5 password-field'>
                            <input title='আপনার পাসওয়ার্ড' name='password' onChange={handleOnChange} onFocus={() => setInputActive('password')} onBlur={() => setInputActive('')} onClick={() => { setError(''); setBackendError('') }} type={showPassword ? 'text' : 'password'} className={`${inputActive === 'password' && "inputActive"} input-bg border-0 p-3`} placeholder="আপনার পাসওয়ার্ড" autoComplete="on" required />
                            {showPassword ? <i onClick={showHideTogglePassword} className="fa-solid fa-eye-slash show-hide-toggle"></i> : <i onClick={showHideTogglePassword} className="fa-solid fa-eye show-hide-toggle"></i>}
                        </div>
                        <button type='submit' className='form-btn p-3 fw-bold'>সাইন ইন</button>
                    </form>
                    <Link to='/authentication/loginForCityCorp/forgotPassForCityCorp' className='reset-pass d-block mb-3 fw-bold'>আপনি কি পাসওয়ার্ড ভুলে গিয়েছেন ?</Link>
                    {/* <Link to='/dashboard/registrationForCityCorp' className='register-divert fw-bold'>আপনি কি অন্য একজনকে এডমিন বানাতে চান ? তাহলে সাইন আপ করুন</Link> */}
                    {backendError && (<p className='mt-3 text-danger fw-bold'>{backendError}</p>)}
                    {error && (<p className='mt-3 text-danger fw-bold'>{error}</p>)}
                </div>
            </div>
        </>
    );
};

export default withAuthentication(LoginForCityCorp);