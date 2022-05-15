import React, { useEffect, useState } from 'react';
import useAuthValues from '../../../Hooks/useAuthValues';
import avatar from '../../../Images/avatar.jpg';
import './TruckDriversList.css';

const TruckDriversList = () => {

    const [inputActive, setInputActive] = useState('');
    const [loadDrivers, setLoadDrivers] = useState([]);
    const [specificDriverInfo, setSpecificDriverInfo] = useState({});
    const [pinNumberState, setPinNumberState] = useState(true);
    const [photo, setPhoto] = useState(null);
    const [nidValue, setNidValue] = useState('');
    const [message, setMessage] = useState('');
    const [toggleSearch, setToggleSearch] = useState(false);

    const { error, setError, setSuccess, success } = useAuthValues();


    // search specific driver by nid
    const handleSearchFieldOnChange = (e) => {
        const value = e.target.value;
        setNidValue(value);

        if (value === "") {
            setToggleSearch(!toggleSearch);
        }
    }

    const handleSearch = (e) => {
        e.preventDefault();
        const remaining = loadDrivers.filter(driver => driver?.nid === nidValue);
        setLoadDrivers(remaining);
        if (remaining.length === 0) {
            setMessage('কোনো ড্রাইভারকে খুঁজে পাওয়া যায় নি');
        }
    }

    // load all drivers in driver list page
    useEffect(() => {
        fetch('http://localhost:5000/truckDriverUsers')
            .then(res => res.json())
            .then(data => setLoadDrivers(data));
    }, [toggleSearch]);

    // load specific driver for updatation
    const loadSpecificDriver = (nid) => {
        fetch(`http://localhost:5000/truckDriverUsers/storeAndUpdateInfo/${nid}`)
            .then(res => res.json())
            .then(data => setSpecificDriverInfo(data));
    }


    // fields value updatation
    const handleNameOnChange = (e) => {
        const updatedValue = e.target.value;
        const updatedDriver = { displayName: updatedValue, age: specificDriverInfo.age, gender: specificDriverInfo.gender, phone: specificDriverInfo.phone, pin: specificDriverInfo.pin, nid: specificDriverInfo.nid, dln: specificDriverInfo.dln, address: specificDriverInfo.address }
        setSpecificDriverInfo(updatedDriver);
    }
    const handleAgeOnChange = (e) => {
        const updatedValue = e.target.value;
        const updatedDriver = { displayName: specificDriverInfo.displayName, age: updatedValue, gender: specificDriverInfo.gender, phone: specificDriverInfo.phone, pin: specificDriverInfo.pin, nid: specificDriverInfo.nid, dln: specificDriverInfo.dln, address: specificDriverInfo.address }
        setSpecificDriverInfo(updatedDriver);
    }
    const handleGenderOnChange = (e) => {
        const updatedValue = e.target.value;
        const updatedDriver = { displayName: specificDriverInfo.displayName, age: specificDriverInfo.age, gender: updatedValue, phone: specificDriverInfo.phone, pin: specificDriverInfo.pin, nid: specificDriverInfo.nid, dln: specificDriverInfo.dln, address: specificDriverInfo.address }
        setSpecificDriverInfo(updatedDriver);
    }
    const handlePhoneOnChange = (e) => {
        const updatedValue = e.target.value;
        const updatedDriver = { displayName: specificDriverInfo.displayName, age: specificDriverInfo.age, gender: specificDriverInfo.gender, phone: updatedValue, pin: specificDriverInfo.pin, nid: specificDriverInfo.nid, dln: specificDriverInfo.dln, address: specificDriverInfo.address }
        setSpecificDriverInfo(updatedDriver);
    }
    const handlePinOnChange = (e) => {
        const field = e.target.name;
        const updatedValue = e.target.value;
        if (field === 'pin') {
            if (updatedValue.length > 4) {
                setPinNumberState(false);
                setError('পিন নাম্বার ৪ ডিজিট এর বেশি ব্যবহার করা যাবে না');
            }
            else {
                setPinNumberState(true);
                setError('');
            }
        }
        const updatedDriver = { displayName: specificDriverInfo.displayName, age: specificDriverInfo.age, gender: specificDriverInfo.gender, phone: specificDriverInfo.phone, pin: updatedValue, nid: specificDriverInfo.nid, dln: specificDriverInfo.dln, address: specificDriverInfo.address }
        setSpecificDriverInfo(updatedDriver);
    }
    const handleNidOnChange = (e) => {
        const updatedValue = e.target.value;
        const updatedDriver = { displayName: specificDriverInfo.displayName, age: specificDriverInfo.age, gender: specificDriverInfo.gender, phone: specificDriverInfo.phone, pin: specificDriverInfo.pin, nid: updatedValue, dln: specificDriverInfo.dln, address: specificDriverInfo.address }
        setSpecificDriverInfo(updatedDriver);
    }
    const handleDlnOnChange = (e) => {
        const updatedValue = e.target.value;
        const updatedDriver = { displayName: specificDriverInfo.displayName, age: specificDriverInfo.age, gender: specificDriverInfo.gender, phone: specificDriverInfo.phone, pin: specificDriverInfo.pin, nid: specificDriverInfo.nid, dln: updatedValue, address: specificDriverInfo.address }
        setSpecificDriverInfo(updatedDriver);
    }
    const handleAddressOnChange = (e) => {
        const updatedValue = e.target.value;
        const updatedDriver = { displayName: specificDriverInfo.displayName, age: specificDriverInfo.age, gender: specificDriverInfo.gender, phone: specificDriverInfo.phone, pin: specificDriverInfo.pin, nid: specificDriverInfo.nid, dln: specificDriverInfo.dln, address: updatedValue }
        setSpecificDriverInfo(updatedDriver);
    }

    // for photo upload
    const handleOnPhotoUpload = e => {
        const insertedPhoto = e.target.files[0];
        console.log(insertedPhoto);
        setPhoto(insertedPhoto);
    }

    // update specific driver
    const handleUpdateDriver = (e) => {
        e.preventDefault();
        if (!photo) {
            setError('ড্রাইভার এর ফটো অবশ্যই দিতে হবে');
        }
        if (!pinNumberState) {
            setError('পিন নাম্বার ৪ ডিজিট এর বেশি হবে না');
        }
        else if (!error && pinNumberState) {

            const formData = new FormData();
            formData.append('displayName', specificDriverInfo.displayName);
            formData.append('age', specificDriverInfo.age);
            formData.append('gender', specificDriverInfo.gender);
            formData.append('phone', specificDriverInfo.phone);
            formData.append('pin', specificDriverInfo.pin);
            formData.append('nid', specificDriverInfo.nid);
            formData.append('dln', specificDriverInfo.dln);
            formData.append('address', specificDriverInfo.address);
            formData.append('photo', photo);

            fetch(`http://localhost:5000/truckDriverUsers/storeAndUpdateInfo/${specificDriverInfo.nid}`, {
                method: 'PUT',
                body: formData
            })
                .then(res => res.json())
                .then(data => {
                    if (data.modifiedCount > 0) {
                        alert('ড্রাইভার এর তথ্য সংশোধন হয়েছে');
                        setSuccess('ড্রাইভার এর তথ্য সংশোধন হয়েছে');
                    }
                })
        }
    }

    // delete specific driver
    const handleDeleteDriver = nid => {
        const proceed = window.confirm('এই ড্রাইভার এর তথ্য মুছে ফেলতে কি আপনি নিশ্চিত ?');
        if (proceed) {
            fetch(`http://localhost:5000/truckDriverUsers/storeAndUpdateInfo/${nid}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('এই ড্রাইভার এর তথ্য সফলভাবে মুছে ফেলা হয়েছে');
                        const remainingDrivers = loadDrivers.filter(driver => driver.nid !== nid);
                        setLoadDrivers(remainingDrivers);
                    }
                })
        }
    }

    return (
        <div className='all-page-bg page-bg-white'>
            <div className='container list-of-truck-driver-content'>
                <h1 className='mb-4 text-center'>ট্রাক ড্রাইভারদের তালিকা</h1>
                <form onSubmit={handleSearch} className='search-field d-flex mb-5 mx-auto'>
                    <input title='এন আই ডি দিয়ে সার্চ করুন'
                        className={`${inputActive === 'search' && "inputActive"} input-bg border-0 p-2 me-2`}
                        type="search"
                        onChange={handleSearchFieldOnChange}
                        onFocus={() => setInputActive('search')}
                        onBlur={() => setInputActive('')}
                        placeholder="এন আই ডি দিয়ে সার্চ করুন"
                        aria-label="Search"
                    />
                    <button className="search-icon" type="submit"><i className="fa-solid fa-magnifying-glass"></i></button>
                </form>
                <div className='row g-4'>
                    {
                        loadDrivers.length > 0
                            ?
                            loadDrivers.map(driver => (
                                <div className="col-12 col-md-6 col-lg-4" key={driver._id}>
                                    <div className='h-100 driver-info'>
                                        <div className='card-body'>
                                            <div className='d-flex justify-content-between align-items-start'>
                                                <div>
                                                    {driver.photo ?
                                                        <img src={`data:image/png;base64,${driver.photo}`} alt="" width='100px' height='100px' className='driver-photo' />
                                                        :
                                                        <img src={avatar} title="ইউজারের ছবি দেওয়া হয়নি" alt="" className="driver-photo" />
                                                    }
                                                    <p className='driver-nid mt-4'>NID: {driver.nid}</p>
                                                </div>
                                                <div className='mt-2'>
                                                    <button onClick={() => loadSpecificDriver(driver.nid)} type='button' className="update-icon d-block mb-3" data-bs-toggle="modal" data-bs-target="#staticBackdrop"><i className="fa-solid fa-wrench"></i></button>

                                                    <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                                        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                                                            <div className="modal-content">
                                                                <div className="modal-header">
                                                                    <h5 className="modal-title" id="staticBackdropLabel">NID: {driver.nid}</h5>
                                                                    <button onClick={() => window.location.reload()} type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                                </div>
                                                                <div className="modal-body">
                                                                    <div className="form-portion">
                                                                        <form onSubmit={handleUpdateDriver}>
                                                                            <div className='mb-3'>
                                                                                <label htmlFor="name" className='mb-2 ms-1'>ড্রাইভার এর নাম</label>
                                                                                <input
                                                                                    id='name'
                                                                                    title='ড্রাইভার এর নাম'
                                                                                    name="name"
                                                                                    value={specificDriverInfo.displayName || ''}
                                                                                    onChange={handleNameOnChange}
                                                                                    onFocus={() => setInputActive('name')}
                                                                                    onBlur={() => setInputActive('')}
                                                                                    onClick={() => {
                                                                                        setError('');
                                                                                        setSuccess('');
                                                                                    }}
                                                                                    type="text"
                                                                                    className={`${inputActive === 'name' && "inputActive"} border-0 p-3 input-bg`}
                                                                                    placeholder="ড্রাইভার এর নাম"
                                                                                    autoComplete="on"
                                                                                    required
                                                                                />
                                                                            </div>
                                                                            <div className='mb-3'>
                                                                                <label htmlFor="age" className='mb-2 ms-1'>বয়স</label>
                                                                                <input
                                                                                    id='age'
                                                                                    title='বয়স'
                                                                                    name="age"
                                                                                    value={specificDriverInfo.age || ''}
                                                                                    onChange={handleAgeOnChange}
                                                                                    onFocus={() => setInputActive('age')}
                                                                                    onBlur={() => setInputActive('')}
                                                                                    onClick={() => {
                                                                                        setError('');
                                                                                        setSuccess('');
                                                                                    }}
                                                                                    type="number"
                                                                                    min="22"
                                                                                    max="60"
                                                                                    className={`${inputActive === 'age' && "inputActive"} border-0 p-3 input-bg`}
                                                                                    placeholder="বয়স"
                                                                                    autoComplete="on"
                                                                                    required
                                                                                />
                                                                            </div>
                                                                            <div className='mb-3'>
                                                                                <label htmlFor="gender" className='mb-2 ms-1'>লিঙ্গ</label>
                                                                                <select
                                                                                    id='gender'
                                                                                    title='লিঙ্গ'
                                                                                    name="gender"
                                                                                    value={specificDriverInfo.gender || ''}
                                                                                    onChange={handleGenderOnChange}
                                                                                    onFocus={() => setInputActive('gender')}
                                                                                    onBlur={() => setInputActive('')}
                                                                                    onClick={() => {
                                                                                        setError('');
                                                                                        setSuccess('');
                                                                                    }}
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
                                                                            <div className='mb-3'>
                                                                                <label htmlFor="photo" className='mb-2 ms-1'>ড্রাইভার এর ছবি সিলেক্ট করুন</label>
                                                                                <input
                                                                                    id='photo'
                                                                                    title='ড্রাইভার এর ছবি সিলেক্ট করুন'
                                                                                    onChange={handleOnPhotoUpload}
                                                                                    onFocus={() => setInputActive('file')}
                                                                                    onBlur={() => setInputActive('')}
                                                                                    type="file"
                                                                                    accept='image/*'
                                                                                    onClick={() => {
                                                                                        setError('');
                                                                                        setSuccess('');
                                                                                    }}
                                                                                    className={`${inputActive === 'file' && "inputActive"} input-bg border-0 p-3`}
                                                                                    placeholder="ড্রাইভার এর ছবি সিলেক্ট করুন"
                                                                                    autoComplete="on"
                                                                                />
                                                                            </div>
                                                                            <div className='mb-3'>
                                                                                <label htmlFor="phone" className='mb-2 ms-1'>ফোন নাম্বার</label>
                                                                                <input
                                                                                    id='phone'
                                                                                    title='ফোন নাম্বার'
                                                                                    name="phone"
                                                                                    value={specificDriverInfo.phone || ''}
                                                                                    onChange={handlePhoneOnChange}
                                                                                    onFocus={() => setInputActive('phone')}
                                                                                    onBlur={() => setInputActive('')}
                                                                                    onClick={() => {
                                                                                        setError('');
                                                                                        setSuccess('');
                                                                                    }}
                                                                                    type="text"
                                                                                    className={`${inputActive === 'phone' && "inputActive"} border-0 p-3 input-bg`}
                                                                                    placeholder="ফোন নাম্বার"
                                                                                    autoComplete="on"
                                                                                    required
                                                                                />
                                                                            </div>
                                                                            <div className='mb-3'>
                                                                                <label htmlFor="pin" className='mb-2 ms-1'>পিন নাম্বার</label>
                                                                                <input
                                                                                    id='pin'
                                                                                    title='পিন নাম্বার'
                                                                                    name="pin"
                                                                                    value={specificDriverInfo.pin || ''}
                                                                                    onChange={handlePinOnChange}
                                                                                    onFocus={() => setInputActive('pin')}
                                                                                    onBlur={() => setInputActive('')}
                                                                                    onClick={() => {
                                                                                        setError('');
                                                                                        setSuccess('');
                                                                                    }}
                                                                                    type="number"
                                                                                    className={`${inputActive === 'pin' && "inputActive"} border-0 p-3 input-bg`}
                                                                                    placeholder="পিন নাম্বার"
                                                                                    autoComplete="on"
                                                                                    required
                                                                                />
                                                                            </div>
                                                                            <div className='mb-3'>
                                                                                <label htmlFor="nid" className='mb-2 ms-1'>এন আই ডি নাম্বার</label>
                                                                                <input
                                                                                    id='nid'
                                                                                    title='এন আই ডি নাম্বার'
                                                                                    name="nid"
                                                                                    value={specificDriverInfo.nid || ''}
                                                                                    onChange={handleNidOnChange}
                                                                                    onFocus={() => setInputActive('nid')}
                                                                                    onBlur={() => setInputActive('')}
                                                                                    onClick={() => {
                                                                                        setError('');
                                                                                        setSuccess('');
                                                                                    }}
                                                                                    type="text"
                                                                                    className={`${inputActive === 'nid' && "inputActive"} border-0 p-3 input-bg`}
                                                                                    placeholder="এন আই ডি নাম্বার"
                                                                                    autoComplete="on"
                                                                                    required
                                                                                />
                                                                            </div>
                                                                            <div className='mb-3'>
                                                                                <label htmlFor="dln" className='mb-2 ms-1'>ড্রাইভিং লাইসেন্স নাম্বার</label>
                                                                                <input
                                                                                    id='dln'
                                                                                    title='ড্রাইভিং লাইসেন্স নাম্বার'
                                                                                    name="dln"
                                                                                    value={specificDriverInfo.dln || ''}
                                                                                    onChange={handleDlnOnChange}
                                                                                    onFocus={() => setInputActive('dln')}
                                                                                    onBlur={() => setInputActive('')}
                                                                                    onClick={() => {
                                                                                        setError('');
                                                                                        setSuccess('');
                                                                                    }}
                                                                                    type="text"
                                                                                    className={`${inputActive === 'dln' && "inputActive"} border-0 p-3 input-bg`}
                                                                                    placeholder="ড্রাইভিং লাইসেন্স নাম্বার"
                                                                                    autoComplete="on" required
                                                                                />
                                                                            </div>
                                                                            <div className='mb-5'>
                                                                                <label htmlFor="address" className='mb-2 ms-1'>ঠিকানা</label>
                                                                                <textarea
                                                                                    id='address'
                                                                                    title='ঠিকানা'
                                                                                    style={{ 'height': '130px' }}
                                                                                    name="address"
                                                                                    value={specificDriverInfo.address || ''}
                                                                                    onChange={handleAddressOnChange}
                                                                                    onFocus={() => setInputActive('address')}
                                                                                    onBlur={() => setInputActive('')}
                                                                                    onClick={() => {
                                                                                        setError('');
                                                                                        setSuccess('');
                                                                                    }}
                                                                                    type="text"
                                                                                    className={`${inputActive === 'address' && "inputActive"} border-0 p-3 input-bg`}
                                                                                    placeholder="ঠিকানা"
                                                                                    autoComplete="on"
                                                                                    required
                                                                                />
                                                                            </div>
                                                                            <button type='submit' className='form-btn p-3'>আপডেট করুন</button>
                                                                        </form>
                                                                        {error && <p className='mt-4 text-danger text-center fw-bold'>{error}</p>}
                                                                        {success && <p className='mt-4 text-success text-center fw-bold'>{success}</p>}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <button onClick={() => { handleDeleteDriver(driver.nid) }} type='button' className="delete-icon"><i className="fa-solid fa-trash"></i></button>
                                                </div>
                                            </div>
                                            <div>
                                                <h3>{driver.displayName}</h3>
                                                <p className='m-0'>Driver ID: {driver._id}</p>
                                                <p className='m-0'>Age: {driver.age}</p>
                                                <p className='m-0'>Gender: {driver.gender}</p>
                                                <p className='m-0'>Phone Number: {driver.phone}</p>
                                                <p className='m-0'>Pin Number: {driver.pin}</p>
                                                <p className='m-0'>Driving License Number: {driver.dln}</p>
                                                <p className='m-0'>Address: {driver.address}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                            :
                            <h5 className='mt-5 text-center text-danger'>{message}</h5>
                    }
                </div>
            </div>
        </div>
    );
};

export default TruckDriversList;