import React, { useEffect, useState } from 'react';
import useAuthValues from '../../../Hooks/useAuthValues';
import Motive from '../../HomepageFolder/Motive/Motive';
import './DestinationArea.css';

const DestinationArea = () => {

    const [inputActive, setInputActive] = useState('');
    const [loadDrivers, setLoadDrivers] = useState([]);
    const [specificDriverInfo, setSpecificDriverInfo] = useState({});
    const [message, setMessage] = useState('');
    const [toggleSearch, setToggleSearch] = useState(false);

    const { error, setError, setSuccess, success } = useAuthValues();

    // search specific driver by nid
    const handleSearchFieldOnChange = (e) => {
        const value = e.target.value;
        if (value === "") {
            setToggleSearch(!toggleSearch);
        }
        else {
            setLoadDrivers(loadDrivers.filter(driver => driver?.cityCorp.toLowerCase().includes(value.toLowerCase())));
        }
    }

    // load all drivers in driver list page
    useEffect(() => {
        fetch('https://enigmatic-tundra-42778.herokuapp.com/truckDriverUsers')
            .then(res => res.json())
            .then(data => setLoadDrivers(data));
    }, [toggleSearch]);

    // load specific driver for updatation
    const loadSpecificDriver = (nid) => {
        fetch(`https://enigmatic-tundra-42778.herokuapp.com/truckDriverUsers/storeAndUpdateInfo/${nid}`)
            .then(res => res.json())
            .then(data => setSpecificDriverInfo(data));
    }

    // update specific driver some details
    const handleUpdateDriver = (e) => {
        e.preventDefault();

        fetch('https://enigmatic-tundra-42778.herokuapp.com/truckDriverUsers/updateDailyTask', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(specificDriverInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    alert('আপডেট সম্পুর্ণ হয়েছে');
                    setSuccess('আপডেট সম্পুর্ণ হয়েছে');
                }
            })
    }

    // fields value updatation
    const handleCityCorpOnChange = (e) => {
        const updatedValue = e.target.value;
        const updatedDriver = { nid: specificDriverInfo.nid, cityCorp: updatedValue, stsArea: specificDriverInfo.stsArea, truckNo: specificDriverInfo.truckNo }
        setSpecificDriverInfo(updatedDriver);
    }

    const handleStsAreaOnChange = (e) => {
        const updatedValue = e.target.value;
        const updatedDriver = { nid: specificDriverInfo.nid, cityCorp: specificDriverInfo.cityCorp, stsArea: updatedValue, truckNo: specificDriverInfo.truckNo }
        setSpecificDriverInfo(updatedDriver);
    }

    const handleTruckNoOnChange = (e) => {
        const updatedValue = e.target.value;
        const updatedDriver = { nid: specificDriverInfo.nid, cityCorp: specificDriverInfo.cityCorp, stsArea: specificDriverInfo.stsArea, truckNo: updatedValue }
        setSpecificDriverInfo(updatedDriver);
    }

    return (
        <>
            <div className='all-page-bg page-bg-white'>
                <div className='container destination-area-content'>
                    <h1 className='mb-4 text-center'>ময়লা তোলার এলাকা ও ট্রাক নির্ধারন</h1>
                    <div className='search-field mb-5 mx-auto'>
                        <input title='সিটি কর্পোরেশন ভিত্তিতে সার্চ করুন'
                            className={`${inputActive === 'search' && "inputActive"} input-bg border-0 p-2 mb-2`}
                            type="search"
                            onChange={handleSearchFieldOnChange}
                            onFocus={() => setInputActive('search')}
                            onBlur={() => setInputActive('')}
                            placeholder="সিটি কর্পোরেশন ভিত্তিতে সার্চ করুন"
                            aria-label="Search"
                        />
                        <p className="text-center">সার্চ ফলাফল: {loadDrivers.length}</p>
                    </div>
                    <div className='row g-4'>
                        {
                            loadDrivers.length > 0
                                ?
                                loadDrivers.map(driver => (
                                    <div className="col-12 col-md-6 col-lg-4" key={driver._id}>
                                        <div className='h-100 driver-info'>
                                            <div className='card-body'>
                                                <div className='mt-2'>
                                                    <p className='driver-nid-destination-page'>NID: {driver.nid}</p>
                                                    <button onClick={() => loadSpecificDriver(driver.nid)} type='button' className="update-icon-destination-page" data-bs-toggle="modal" data-bs-target="#staticBackdrop"><i className="fa-solid fa-wrench"></i></button>

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
                                                                                <label htmlFor="cityCorp" className='mb-2 ms-1'>সিটি কর্পোরেশন</label>
                                                                                <input
                                                                                    id='cityCorp'
                                                                                    title='সিটি কর্পোরেশন'
                                                                                    name="cityCorp"
                                                                                    value={specificDriverInfo.cityCorp || ''}
                                                                                    onChange={handleCityCorpOnChange}
                                                                                    onFocus={() => setInputActive('cityCorp')}
                                                                                    onBlur={() => setInputActive('')}
                                                                                    onClick={() => {
                                                                                        setError('');
                                                                                        setSuccess('');
                                                                                    }}
                                                                                    type="text"
                                                                                    className={`${inputActive === 'cityCorp' && "inputActive"} border-0 p-3 input-bg`}
                                                                                    placeholder="সিটি কর্পোরেশন"
                                                                                    autoComplete="on"
                                                                                    required
                                                                                />
                                                                            </div>
                                                                            <div className='mb-3'>
                                                                                <label htmlFor="stsArea" className='mb-2 ms-1'>এস টি এস এলাকা</label>
                                                                                <input
                                                                                    id='stsArea'
                                                                                    title='এস টি এস এলাকা'
                                                                                    name="stsArea"
                                                                                    value={specificDriverInfo.stsArea || ''}
                                                                                    onChange={handleStsAreaOnChange}
                                                                                    onFocus={() => setInputActive('stsArea')}
                                                                                    onBlur={() => setInputActive('')}
                                                                                    onClick={() => {
                                                                                        setError('');
                                                                                        setSuccess('');
                                                                                    }}
                                                                                    type="text"
                                                                                    className={`${inputActive === 'stsArea' && "inputActive"} border-0 p-3 input-bg`}
                                                                                    placeholder="এস টি এস এলাকা"
                                                                                    autoComplete="on"
                                                                                    required
                                                                                />
                                                                            </div>
                                                                            <div className='mb-5'>
                                                                                <label htmlFor="truckNo" className='mb-2 ms-1'>ট্রাক নাম্বার</label>
                                                                                <input
                                                                                    id='truckNo'
                                                                                    title='ট্রাক নাম্বার'
                                                                                    name="truckNo"
                                                                                    value={specificDriverInfo.truckNo || ''}
                                                                                    onChange={handleTruckNoOnChange}
                                                                                    onFocus={() => setInputActive('truckNo')}
                                                                                    onBlur={() => setInputActive('')}
                                                                                    onClick={() => {
                                                                                        setError('');
                                                                                        setSuccess('');
                                                                                    }}
                                                                                    type="text"
                                                                                    className={`${inputActive === 'truckNo' && "inputActive"} border-0 p-3 input-bg`}
                                                                                    placeholder="ট্রাক নাম্বার"
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
                                                </div>
                                                <div className='mt-4'>
                                                    <h3>{driver.displayName}</h3>
                                                    <p className='m-0'>Phone Number: {driver.phone}</p>
                                                    <p className='m-0'>Driving License Number: {driver.dln}</p>
                                                </div>
                                                <hr />
                                                <div>
                                                    <p className='m-0'>City Corporation: {driver.cityCorp}</p>
                                                    <p className='m-0'>STS Area: {driver.stsArea}</p>
                                                    <p className='m-0'>Truck Number: {driver.truckNo}</p>
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
        </>
    );
};

export default DestinationArea;