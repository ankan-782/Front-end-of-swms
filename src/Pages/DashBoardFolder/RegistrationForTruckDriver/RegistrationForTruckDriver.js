import React from 'react';
import withAuthentication from '../../../HOC/withAuthentication';
import useAuthValues from '../../../Hooks/useAuthValues';
import './RegistrationForTruckDriver.css';

const RegistrationForTruckDriver = (props) => {
    const { inputActive, setInputActive, handleOnChange, handleOnPhotoUpload, inputFieldInfos, photo, pinNumberState, navigate } = props;

    const { registrationProcessForTruckDriver, error, setError } = useAuthValues();

    const handleRegistrationForTruckDriver = e => {
        e.preventDefault();
        if (!photo) {
            setError('User Photo must needed');
        }
        if (!pinNumberState) {
            setError('PIN number digits is exceeding. Maximum is 4');
        }
        else if (!error && pinNumberState) {
            registrationProcessForTruckDriver(inputFieldInfos, photo, navigate);
        }
    }

    return (
        <>
            <div className='d-none d-xxl-block'>
                <div className='all-page-bg page-bg-white d-flex justify-content-center align-items-center'>
                    <div className='container registration-for-truckDriver-content'>
                        <h1 className='mb-5 text-center'>ট্রাক ড্রাইভার ইউজারদের জন্যে</h1>
                        <div className="form-portion">
                            <form onSubmit={handleRegistrationForTruckDriver} className="form mx-auto mb-3">
                                <div className='d-flex justify-content-between mb-4'>
                                    <input
                                        title='আপনার নাম'
                                        style={{ 'width': '55%' }}
                                        name="name"
                                        onChange={handleOnChange}
                                        onFocus={() => setInputActive('name')}
                                        onBlur={() => setInputActive('')}
                                        onClick={() => setError('')}
                                        type="text"
                                        className={`${inputActive === 'name' && "inputActive"} border-0 p-3 input-bg`}
                                        placeholder="আপনার নাম"
                                        autoComplete="on"
                                        required
                                    />
                                    <input
                                        title='বয়স'
                                        style={{ 'width': '15%' }}
                                        name="age"
                                        onChange={handleOnChange}
                                        onFocus={() => setInputActive('age')}
                                        onBlur={() => setInputActive('')}
                                        type="number"
                                        min="22"
                                        max="60"
                                        className={`${inputActive === 'age' && "inputActive"} border-0 p-3 input-bg`}
                                        placeholder="বয়স"
                                        autoComplete="on"
                                        required
                                    />
                                    <select title='লিঙ্গ'
                                        style={{ 'width': '25%' }}
                                        name="gender"
                                        onChange={handleOnChange}
                                        onFocus={() => setInputActive('gender')}
                                        onBlur={() => setInputActive('')}
                                        onClick={() => setError('')}
                                        type="text"
                                        className={`${inputActive === 'gender' && "inputActive"} border-0 p-3 input-bg form-select`}
                                        required
                                    >
                                        <option value="">লিঙ্গ</option>
                                        <option value="Male">পুরুষ</option>
                                        <option value="Female">মহিলা</option>
                                        <option value="Other">অন্যান্য</option>
                                    </select>
                                </div>
                                <div className='d-flex justify-content-between mb-4'>
                                    <input
                                        title='আপনার ছবি সিলেক্ট করুন'
                                        style={{ 'width': '30%' }}
                                        onChange={handleOnPhotoUpload}
                                        onFocus={() => setInputActive('file')}
                                        onBlur={() => setInputActive('')}
                                        type="file"
                                        accept='image/*'
                                        onClick={() => setError('')}
                                        className={`${inputActive === 'file' && "inputActive"} input-bg border-0 p-3`}
                                        placeholder="আপনার ছবি সিলেক্ট করুন"
                                        autoComplete="on" />
                                    <input
                                        title='ফোন নাম্বার'
                                        style={{ 'width': '40%' }}
                                        name="phone"
                                        onChange={handleOnChange}
                                        onFocus={() => setInputActive('phone')}
                                        onBlur={() => setInputActive('')}
                                        onClick={() => setError('')}
                                        type="text" className={`${inputActive === 'phone' && "inputActive"} border-0 p-3 input-bg`}
                                        placeholder="ফোন নাম্বার"
                                        autoComplete="on"
                                        required
                                    />
                                    <input
                                        title='পিন নাম্বার'
                                        style={{ 'width': '25%' }}
                                        name="pin"
                                        onChange={handleOnChange}
                                        onFocus={() => setInputActive('pin')}
                                        onBlur={() => setInputActive('')}
                                        onClick={() => setError('')}
                                        type="number"
                                        className={`${inputActive === 'pin' && "inputActive"} border-0 p-3 input-bg`}
                                        placeholder="পিন নাম্বার"
                                        maxLength="4"
                                        autoComplete="on"
                                        required
                                    />
                                </div>
                                <div className='d-flex justify-content-between mb-4'>
                                    <div className='nid-dln-inputs'>
                                        <div className='mb-4'>
                                            <input
                                                title='এন আই ডি নাম্বার'
                                                name="nid"
                                                onChange={handleOnChange}
                                                onFocus={() => setInputActive('nid')}
                                                onBlur={() => setInputActive('')}
                                                onClick={() => setError('')}
                                                type="text"
                                                className={`${inputActive === 'nid' && "inputActive"} border-0 p-3 input-bg`}
                                                placeholder="এন আই ডি নাম্বার"
                                                autoComplete="on"
                                                required
                                            />
                                        </div>
                                        <div>
                                            <input
                                                title='রাইভিং লাইসেন্স নাম্বার'
                                                name="dln" onChange={handleOnChange}
                                                onFocus={() => setInputActive('dln')}
                                                onBlur={() => setInputActive('')}
                                                onClick={() => setError('')}
                                                type="text"
                                                className={`${inputActive === 'dln' && "inputActive"} border-0 p-3 input-bg`}
                                                placeholder="ড্রাইভিং লাইসেন্স নাম্বার"
                                                autoComplete="on"
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div style={{ 'width': '42%' }}>
                                        <textarea
                                            title='ঠিকানা'
                                            style={{ 'height': '136px' }}
                                            name="address"
                                            onChange={handleOnChange}
                                            onFocus={() => setInputActive('address')}
                                            onClick={() => setError('')}
                                            onBlur={() => setInputActive('')}
                                            type="text"
                                            className={`${inputActive === 'address' && "inputActive"} border-0 p-3 input-bg`}
                                            placeholder="ঠিকানা"
                                            autoComplete="on"
                                            required
                                        />
                                    </div>
                                </div>
                                <button type='submit' className='form-btn p-3 fw-bold'>সাইন আপ</button>
                            </form>
                            {error && <p className='text-danger fw-bold text-center'>{error}</p>}
                        </div>
                    </div>
                </div>
            </div>

            {/* mobile device */}
            <div className='d-xxl-none'>
                <div className='all-page-bg page-bg-white'>
                    <div className='container registration-for-truckDriver-content pb-5 pb-lg-0'>
                        <h1 className='mb-5 text-center'>ট্রাক ড্রাইভার ইউজারদের জন্যে</h1>
                        <div className="form-portion">
                            <form onSubmit={handleRegistrationForTruckDriver} className="form mx-auto mb-3">
                                <div className='mb-4'>
                                    <input
                                        title='আপনার নাম'
                                        name="name"
                                        onChange={handleOnChange}
                                        onFocus={() => setInputActive('name')}
                                        onBlur={() => setInputActive('')}
                                        onClick={() => setError('')}
                                        type="text"
                                        className={`${inputActive === 'name' && "inputActive"} border-0 p-3 input-bg`}
                                        placeholder="আপনার নাম"
                                        autoComplete="on"
                                        required
                                    />
                                </div>
                                <div className='mb-4'>
                                    <input
                                        title='বয়স'
                                        name="age"
                                        onChange={handleOnChange}
                                        onFocus={() => setInputActive('age')}
                                        onBlur={() => setInputActive('')}
                                        onClick={() => setError('')}
                                        type="number"
                                        min="22"
                                        max="60"
                                        className={`${inputActive === 'age' && "inputActive"} border-0 p-3 input-bg`}
                                        placeholder="বয়স"
                                        autoComplete="on"
                                        required
                                    />
                                </div>
                                <div className='mb-4'>
                                    <select
                                        title='লিঙ্গ'
                                        name="gender"
                                        onChange={handleOnChange}
                                        onFocus={() => setInputActive('gender')}
                                        onBlur={() => setInputActive('')}
                                        onClick={() => setError('')}
                                        type="text"
                                        className={`${inputActive === 'gender' && "inputActive"} border-0 p-3 input-bg form-select`}
                                        required
                                    >
                                        <option value="">লিঙ্গ</option>
                                        <option value="Male">পুরুষ</option>
                                        <option value="Female">মহিলা</option>
                                        <option value="Other">অন্যান্য</option>
                                    </select>
                                </div>
                                <div className='mb-4'>
                                    <input
                                        title='আপনার ছবি সিলেক্ট করুন'
                                        onChange={handleOnPhotoUpload}
                                        onFocus={() => setInputActive('file')}
                                        onBlur={() => setInputActive('')}
                                        type="file" accept='image/*'
                                        onClick={() => setError('')}
                                        className={`${inputActive === 'file' && "inputActive"} input-bg border-0 p-3`}
                                        placeholder="আপনার ছবি সিলেক্ট করুন"
                                        autoComplete="on"
                                    />
                                </div>
                                <div className='mb-4'>
                                    <input
                                        title='ফোন নাম্বার'
                                        name="phone"
                                        onChange={handleOnChange}
                                        onFocus={() => setInputActive('phone')}
                                        onBlur={() => setInputActive('')}
                                        onClick={() => setError('')}
                                        type="text"
                                        className={`${inputActive === 'phone' && "inputActive"} border-0 p-3 input-bg`}
                                        placeholder="ফোন নাম্বার"
                                        autoComplete="on"
                                        required
                                    />
                                </div>
                                <div className='mb-4'>
                                    <input
                                        title='পিন নাম্বার'
                                        name="pin"
                                        onChange={handleOnChange}
                                        onFocus={() => setInputActive('pin')}
                                        onBlur={() => setInputActive('')}
                                        onClick={() => setError('')}
                                        type="number"
                                        className={`${inputActive === 'pin' && "inputActive"} border-0 p-3 input-bg`}
                                        placeholder="পিন নাম্বার"
                                        autoComplete="on"
                                        required
                                    />
                                </div>
                                <div className='mb-4'>
                                    <input
                                        title='এন আই ডি নাম্বার'
                                        name="nid"
                                        onChange={handleOnChange}
                                        onFocus={() => setInputActive('nid')}
                                        onBlur={() => setInputActive('')}
                                        onClick={() => setError('')}
                                        type="text"
                                        className={`${inputActive === 'nid' && "inputActive"} border-0 p-3 input-bg`}
                                        placeholder="এন আই ডি নাম্বার"
                                        autoComplete="on"
                                        required
                                    />
                                </div>
                                <div className='mb-4'>
                                    <input 
                                    title='ড্রাইভিং লাইসেন্স নাম্বার' 
                                    name="dln" 
                                    onChange={handleOnChange} 
                                    onFocus={() => setInputActive('dln')} 
                                    onBlur={() => setInputActive('')} 
                                    onClick={() => setError('')} 
                                    type="text" 
                                    className={`${inputActive === 'dln' && "inputActive"} border-0 p-3 input-bg`} 
                                    placeholder="ড্রাইভিং লাইসেন্স নাম্বার" 
                                    autoComplete="on" required />
                                </div>
                                <div className='mb-5'>
                                    <textarea 
                                    title='ঠিকানা' 
                                    style={{ 'height': '130px' }} 
                                    name="address" 
                                    onChange={handleOnChange} 
                                    onFocus={() => setInputActive('address')} 
                                    onClick={() => setError('')} 
                                    onBlur={() => setInputActive('')} 
                                    type="text" className={`${inputActive === 'address' && "inputActive"} border-0 p-3 input-bg`} placeholder="ঠিকানা" autoComplete="on" required />
                                </div>
                                <button type='submit' className='form-btn p-3'>সাইন আপ</button>
                            </form>
                            {error && <p className='text-danger text-center'>{error}</p>}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default withAuthentication(RegistrationForTruckDriver);