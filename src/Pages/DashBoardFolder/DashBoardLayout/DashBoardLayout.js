import React, { useEffect, useState } from 'react';
import { Link as NavLink, Outlet } from 'react-router-dom';
import useAuthValues from '../../../Hooks/useAuthValues';
import logo from '../../../Images/logo.png';
import avatar from '../../../Images/avatar.jpg';
import './DashBoardLayout.css';

const DashBoardLayout = () => {
    const { user, logOutCityCorpUser, logOutTruckDriver } = useAuthValues();

    const [navLinkActive, setNavLinkActive] = useState('');

    const [cityCorpUserById, setCityCorpUserById] = useState({});
    const [truckDriver, setTruckDriver] = useState({});

    //removing user authentication state message
    const [toast, setToast] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            if (localStorage.getItem('loggedIn')) {
                localStorage.removeItem('loggedIn');
                setToast(false);
            }
        }, 5000);
    }, [toast]);

    useEffect(() => {
        if (localStorage.getItem('truckId')) {
            const truckDriverId = localStorage.getItem('truckId');
            fetch(`https://enigmatic-tundra-42778.herokuapp.com/truckDriverUsers/${truckDriverId}`)
                .then(res => res.json())
                .then(data => setTruckDriver(data));
        }
        else if (localStorage.getItem('cityId')) {
            const cityCorpUserId = localStorage.getItem('cityId');
            fetch(`https://enigmatic-tundra-42778.herokuapp.com/cityCorporationUsers/${cityCorpUserId}`)
                .then(res => res.json())
                .then(data => setCityCorpUserById(data));
        }
    }, [])


    // var prevScrollpos = window.pageYOffset;
    // window.onscroll = function () {
    //     var currentScrollPos = window.pageYOffset;
    //     if (prevScrollpos > currentScrollPos) {
    //         document.getElementById("navbar").style.top = "0";
    //     } else {
    //         document.getElementById("navbar").style.top = "-76px";
    //     }
    //     prevScrollpos = currentScrollPos;
    // }


    return (
        <>
            <div className="offcanvas offcanvas-start page-bg-black" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                <div className="offcanvas-header">
                    <img src={logo} alt="" width="130" height="50" className="d-inline-block align-text-top" />
                    <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="mt-3 offcanvas-body d-flex flex-column justify-content-between">
                    <div>
                        {localStorage.getItem('truckId') && <div className="mb-3">
                            <NavLink
                                to='/dashboard/binStatus'
                                onClick={() => {
                                    setNavLinkActive('binStatus')
                                }}
                                className={`${navLinkActive === 'binStatus' && 'active'} nav-item-links-offcanvas`}
                                style={{ 'cursor': 'pointer' }}
                            >
                                বিন স্ট্যাটাস
                            </NavLink>
                        </div>}
                        {localStorage.getItem('cityId') && <div className="mb-3">
                            <NavLink
                                to='/dashboard/registrationForTruckDriver'
                                onClick={() => {
                                    setNavLinkActive('regTruckDriver')
                                }}
                                className={`${navLinkActive === 'regTruckDriver' && 'active'} nav-item-links-offcanvas`}
                                style={{ 'cursor': 'pointer' }}
                            >
                                রেজিস্টার ট্রাক ড্রাইভার
                            </NavLink>
                        </div>}
                        {localStorage.getItem('cityId') && <div className="mb-3">
                            <NavLink
                                to='/dashboard/registrationForCityCorp'
                                onClick={() => {
                                    setNavLinkActive('regAdminUser')
                                }}
                                className={`${navLinkActive === 'regAdminUser' && 'active'} nav-item-links-offcanvas`}
                                style={{ 'cursor': 'pointer' }}
                            >
                                রেজিস্টার এডমিন ইউজার
                            </NavLink>
                        </div>}
                        {localStorage.getItem('cityId') && <div className="mb-3">
                            <NavLink
                                to='/dashboard/destination'
                                onClick={() => {
                                    setNavLinkActive('destination')
                                }}
                                className={`${navLinkActive === 'destination' && 'active'} nav-item-links-offcanvas`}
                                style={{ 'cursor': 'pointer' }}
                            >
                                নির্ধারিত এলাকা
                            </NavLink>
                        </div>}
                        {localStorage.getItem('cityId') && <div className="mb-3">
                            <NavLink
                                to='/dashboard/listOfTruckDrivers'
                                onClick={() => {
                                    setNavLinkActive('listOfTruckDrivers')
                                }}
                                className={`${navLinkActive === 'listOfTruckDrivers' && 'active'} nav-item-links-offcanvas`}
                                style={{ 'cursor': 'pointer' }}
                            >
                                ট্রাক ড্রাইভারদের তালিকা
                            </NavLink>
                        </div>}
                    </div>
                    <div>
                        <div className="sign-in-link">
                            {(user?.email || truckDriver?.nid) ? <div className="dropup d-flex align-items-center w-75">
                                <div className='d-flex align-items-center'>
                                    {cityCorpUserById?.photo || truckDriver?.photo ? <img src={`data:image/png;base64,${cityCorpUserById?.photo || truckDriver?.photo}`} className="user-img-dashboard-1 me-3" alt="" /> : <img src={avatar} title="ইউজারের ছবি দেওয়া হয়নি" alt="" className="user-img-dashboard-1 me-3" />}
                                    {(user?.email || truckDriver?.nid) && <p style={{ 'color': 'rgb(227, 255, 227)' }} className="nav-text text-center fs-5 mb-0 ">{user?.displayName || truckDriver?.displayName}</p>}
                                </div>
                                <button style={{ 'color': 'rgb(227, 255, 227)', 'fontSize': '30px' }} type="button" className="btn btn-transparent px-2 dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                                    <span className="visually-hidden">Toggle Dropdown</span>
                                </button>
                                <div className="dropdown-menu pt-3">
                                    <div className="d-flex flex-column justify-content-center align-items-center">
                                        {cityCorpUserById?.photo || truckDriver?.photo ? <img src={`data:image/png;base64,${cityCorpUserById?.photo || truckDriver?.photo}`} className="user-img-dashboard-2 mb-2" alt="" /> : <img src={avatar} title="ইউজারের ছবি দেওয়া হয়নি" alt="" className="user-img-dashboard-2 mb-2" />}
                                        {(user?.email || truckDriver?.nid) && <p className="nav-text text-center fs-5">{user?.displayName || truckDriver?.displayName}</p>}
                                    </div>
                                    <div><NavLink className="dropdown-item" to="">প্রোফাইল</NavLink></div>
                                    <div className='mb-3'>
                                        {truckDriver?.nid ?
                                            <button onClick={logOutTruckDriver} className='dropdown-item'>সাইন আউট</button>
                                            :
                                            <button onClick={logOutCityCorpUser} className='dropdown-item'>সাইন আউট</button>
                                        }
                                    </div>
                                </div>
                            </div> :
                                <NavLink to="/authentication" className="nav-item-links-offcanvas">সাইন ইন</NavLink>
                            }
                        </div>
                    </div>
                </div>
            </div>

            <div id='dashboard'>
                <nav className="navbar navbar-expand-lg navbar-dark page-bg-black">
                    <div className="container">
                        <button style={{ 'color': 'rgb(227, 255, 227)' }} className="btn btn-transparent p-2 me-2" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                            <i className="fa-solid fa-bars fs-3"></i>
                        </button>
                        <NavLink
                            to="/"
                            className="navbar-brand d-none d-lg-block">
                            <img src={logo} alt="" width="130" height="50" className="d-inline-block align-text-top" />
                        </NavLink>
                        <ul className="navbar-nav flex-row align-items-center ms-auto">
                            <li className="nav-item me-4 me-lg-5">
                                <NavLink
                                    to="/"
                                    className='nav-dashboard'
                                >
                                    হোম
                                </NavLink>
                            </li>
                            <li className="nav-item me-4 me-lg-5">
                                <NavLink
                                    to="/dashboard"
                                    className='nav-dashboard'
                                >
                                    ড্যাশবোর্ড
                                </NavLink>
                            </li>
                            <li className="nav-item me-2">
                                {truckDriver?.nid ?
                                    <p style={{ 'color': 'rgb(227, 255, 227)', 'cursor': 'pointer' }} onClick={logOutTruckDriver} className='m-0'>সাইন আউট</p>
                                    :
                                    <p style={{ 'color': 'rgb(227, 255, 227)', 'cursor': 'pointer' }} onClick={logOutCityCorpUser} className='m-0'>সাইন আউট</p>
                                }
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>

            <div >
                {(<div className={`${localStorage.getItem('loggedIn') ? 'active-toast' : 'toast-container'} toast-bg`} style={{ 'zIndex': 11 }} role="alert">
                    <p className='m-0'>সাইন ইন সফল হয়েছে</p>
                </div>)}
            </div>

            <div>
                <Outlet />
            </div>
        </>
    );
};

export default DashBoardLayout;