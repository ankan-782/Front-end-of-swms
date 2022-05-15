import React from 'react';
import withAuthentication from '../../../HOC/withAuthentication';
import useAuthValues from '../../../Hooks/useAuthValues';
import './RegistrationForCityCorp.css';

const RegistrationForCityCorp = (props) => {
    const { inputActive, setInputActive, inputFieldInfos, photo, showHideTogglePassword, showHideToggleConfirmPassword, handleOnChange, handleOnPhotoUpload, showPassword, showConfirmPassword } = props;

    const { registrationProcessForCityCorp, setError, error, setBackendError, backendError, setSuccess, success } = useAuthValues();

    const handleRegistrationForCityCorp = (e) => {
        e.preventDefault();
        if (inputFieldInfos.password !== inputFieldInfos.confirmPassword) {
            setError('Password and confirm did not match');
            return;
        }
        if (!photo) {
            setError('User Photo must needed');
        }
        else if (!error) {
            registrationProcessForCityCorp(inputFieldInfos.email, inputFieldInfos.password, inputFieldInfos.name, photo);
        }
    }

    return (
        <>
            <div className='d-none d-xxl-block'>
                <div className='all-page-bg page-bg-white d-flex justify-content-center align-items-center'>
                    <div className='container registration-for-cityCorp-content'>
                        <h1 className='mb-5 text-center'>সিটি কর্পোরেশন অথোরিটি ব্যবহারের জন্যে</h1>
                        <div className='form-portion'>
                            <form onSubmit={handleRegistrationForCityCorp} className="form mx-auto mb-4">
                                <div className='mb-4'>
                                    <input
                                        title='আপনার ইমেইল আইডি'
                                        name='email'
                                        onChange={handleOnChange}
                                        onFocus={() => setInputActive('email')}
                                        onBlur={() => setInputActive('')}
                                        type="email"
                                        onClick={() => {
                                            setError('');
                                            setBackendError('');
                                            setSuccess('');
                                        }}
                                        className={`${inputActive === 'email' && "inputActive"} input-bg border-0 p-3`}
                                        placeholder="আপনার ইমেইল আইডি"
                                        autoComplete="on"
                                        required
                                    />
                                </div>
                                <div className='d-flex justify-content-between mb-4'>
                                    <input
                                        title='আপনার নাম'
                                        style={{ 'width': '47%' }}
                                        name='name'
                                        onChange={handleOnChange}
                                        onFocus={() => setInputActive('name')}
                                        onBlur={() => setInputActive('')}
                                        type="text"
                                        onClick={() => {
                                            setError('');
                                            setBackendError('');
                                            setSuccess('');
                                        }}
                                        className={`${inputActive === 'name' && "inputActive"} input-bg border-0 p-3`}
                                        placeholder="আপনার নাম"
                                        autoComplete="on"
                                        required
                                    />
                                    <input
                                        title='আপনার ছবি সিলেক্ট করুন'
                                        style={{ 'width': '47%' }}
                                        onChange={handleOnPhotoUpload}
                                        onFocus={() => setInputActive('file')}
                                        onBlur={() => setInputActive('')}
                                        type="file" accept='image/*'
                                        onClick={() => {
                                            setError('');
                                            setBackendError('');
                                            setSuccess('');
                                        }}
                                        className={`${inputActive === 'file' && "inputActive"} input-bg border-0 p-3`}
                                        placeholder="আপনার ছবি সিলেক্ট করুন"
                                        autoComplete="on"
                                    />
                                </div>
                                <div className='d-flex justify-content-between mb-5'>
                                    <div style={{ 'width': '47%' }} className='password-field-registration-city'>
                                        <input
                                            title='আপনার পাসওয়ার্ড'
                                            name='password'
                                            onChange={handleOnChange}
                                            onFocus={() => setInputActive('password')}
                                            onBlur={() => setInputActive('')}
                                            onClick={() => {
                                                setError('');
                                                setBackendError('');
                                                setSuccess('');
                                            }}
                                            type={showPassword ? 'text' : 'password'}
                                            className={`${inputActive === 'password' && "inputActive"} input-bg border-0 p-3`}
                                            placeholder="আপনার পাসওয়ার্ড"
                                            autoComplete="on"
                                            required
                                        />
                                        {showPassword ?
                                            <i onClick={showHideTogglePassword} className="fa-solid fa-eye-slash show-hide-toggle"></i>
                                            :
                                            <i onClick={showHideTogglePassword} className="fa-solid fa-eye show-hide-toggle"></i>}
                                    </div>
                                    <div style={{ 'width': '47%' }} className='password-field-registration-city'>
                                        <input
                                            title='আপনার পাসওয়ার্ড কনফার্ম করুন'
                                            name='confirmPassword'
                                            onChange={handleOnChange}
                                            onFocus={() => setInputActive('confirmPassword')}
                                            onBlur={() => setInputActive('')}
                                            onClick={() => {
                                                setError('');
                                                setBackendError('');
                                                setSuccess('');
                                            }}
                                            type={showConfirmPassword ? 'text' : 'password'}
                                            className={`${inputActive === 'confirmPassword' && "inputActive"} input-bg border-0 p-3`}
                                            placeholder="পাসওয়ার্ড কনফার্ম করুন"
                                            autoComplete="on"
                                            required
                                        />
                                        {showConfirmPassword ?
                                            <i onClick={showHideToggleConfirmPassword} className="fa-solid fa-eye-slash show-hide-toggle"></i>
                                            :
                                            <i onClick={showHideToggleConfirmPassword} className="fa-solid fa-eye show-hide-toggle"></i>}
                                    </div>
                                </div>
                                <button type='submit' className='form-btn p-3 fw-bold'>সাইন আপ</button>
                            </form>
                            {backendError && (<p className='mt-3 text-danger fw-bold'>{backendError}</p>)}
                            {error && (<p className='mt-3 text-danger fw-bold'>{error}</p>)}
                            {success && (<p className='mt-3 text-success fw-bold'>{success}</p>)}
                        </div>
                    </div>
                </div>
            </div>

            {/* mobile device */}
            <div className='d-xxl-none'>
                <div className='all-page-bg page-bg-white'>
                    <div className='container registration-for-cityCorp-content pb-5 pb-lg-0'>
                        <h1 className='mb-5 text-center'>সিটি কর্পোরেশন অথোরিটি ব্যবহারের জন্যে</h1>
                        <div className='form-portion'>
                            <form onSubmit={handleRegistrationForCityCorp} className="form mx-auto mb-4">
                                <div className='mb-4'>
                                    <input
                                        title='আপনার নাম'
                                        name='name'
                                        onChange={handleOnChange}
                                        onFocus={() => setInputActive('name')}
                                        onBlur={() => setInputActive('')}
                                        type="text" onClick={() => {
                                            setError('');
                                            setBackendError('');
                                            setSuccess('');
                                        }}
                                        className={`${inputActive === 'name' && "inputActive"} input-bg border-0 p-3`}
                                        placeholder="আপনার নাম"
                                        autoComplete="on"
                                        required
                                    />
                                </div>
                                <div className='mb-4'>
                                    <input
                                        title='আপনার ছবি সিলেক্ট করুন'
                                        onChange={handleOnPhotoUpload}
                                        onFocus={() => setInputActive('file')}
                                        onBlur={() => setInputActive('')}
                                        type="file"
                                        accept='image/*'
                                        onClick={() => {
                                            setError('');
                                            setBackendError('');
                                            setSuccess('');
                                        }}
                                        className={`${inputActive === 'file' && "inputActive"} input-bg border-0 p-3`}
                                        placeholder="আপনার ছবি সিলেক্ট করুন"
                                        autoComplete="on"
                                    />
                                </div>
                                <div className='mb-4'>
                                    <input
                                        title='আপনার ইমেইল আইডি'
                                        name='email'
                                        onChange={handleOnChange}
                                        onFocus={() => setInputActive('email')}
                                        onBlur={() => setInputActive('')}
                                        type="email"
                                        onClick={() => {
                                            setError('');
                                            setBackendError('');
                                            setSuccess('');
                                        }}
                                        className={`${inputActive === 'email' && "inputActive"} input-bg border-0 p-3`}
                                        placeholder="আপনার ইমেইল আইডি"
                                        autoComplete="on"
                                        required
                                    />
                                </div>
                                <div className='mb-4 password-field-registration-city'>
                                    <input
                                        title='আপনার পাসওয়ার্ড'
                                        name='password'
                                        onChange={handleOnChange}
                                        onFocus={() => setInputActive('password')}
                                        onBlur={() => setInputActive('')}
                                        onClick={() => {
                                            setError('');
                                            setBackendError('');
                                            setSuccess('');
                                        }}
                                        type={showPassword ? 'text' : 'password'}
                                        className={`${inputActive === 'password' && "inputActive"} input-bg border-0 p-3`}
                                        placeholder="আপনার পাসওয়ার্ড"
                                        autoComplete="on"
                                        required
                                    />
                                    {showPassword ?
                                        <i onClick={showHideTogglePassword} className="fa-solid fa-eye-slash show-hide-toggle"></i>
                                        :
                                        <i onClick={showHideTogglePassword} className="fa-solid fa-eye show-hide-toggle"></i>}
                                </div>
                                <div className='mb-5 password-field-registration-city'>
                                    <input
                                        title='আপনার পাসওয়ার্ড কনফার্ম করুন'
                                        name='confirmPassword'
                                        onChange={handleOnChange}
                                        onFocus={() => setInputActive('confirmPassword')}
                                        onBlur={() => setInputActive('')}
                                        onClick={() => {
                                            setError('');
                                            setBackendError('');
                                            setSuccess('');
                                        }}
                                        type={showConfirmPassword ? 'text' : 'password'}
                                        className={`${inputActive === 'confirmPassword' && "inputActive"} input-bg border-0 p-3`}
                                        placeholder="পাসওয়ার্ড কনফার্ম করুন"
                                        autoComplete="on"
                                        required
                                    />
                                    {showConfirmPassword ?
                                        <i onClick={showHideToggleConfirmPassword} className="fa-solid fa-eye-slash show-hide-toggle"></i>
                                        :
                                        <i onClick={showHideToggleConfirmPassword} className="fa-solid fa-eye show-hide-toggle"></i>}
                                </div>
                                <button type='submit' className='form-btn p-3 fw-bold'>রেজিস্টার করুন</button>
                            </form>
                            {backendError && (<p className='mt-3 text-danger fw-bold'>{backendError}</p>)}
                            {error && (<p className='mt-3 text-danger fw-bold'>{error}</p>)}
                            {success && (<p className='mt-3 text-danger fw-bold'>{success}</p>)}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default withAuthentication(RegistrationForCityCorp);