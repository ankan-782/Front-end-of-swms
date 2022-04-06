import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import { Link as NavLink } from 'react-router-dom';
import useAuthValues from '../../../Hooks/useAuthValues';
import logo from '../../../Images/logo.png';
import avatar from '../../../Images/avatar.jpg';
import './Navbar.css';

const Navbar = () => {
    const { user, logOutCityCorpUser, logOutTruckDriver } = useAuthValues();

    // const [navLinkActive, setNavLinkActive] = useState('');
    // const [navLinkActiveToggle, setNavLinkActiveToggle] = useState(true);
    const [isClicked, setIsClicked] = useState(false);

    const [cityCorpUserById, setCityCorpUserById] = useState({});
    const [truckDriver, setTruckDriver] = useState({});

    const hamburger = document.querySelector('.navbar .nav-list .hamburger');
    const mobile_menu = document.querySelector('.navbar .nav-list ul');


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
        // setInterval(() => {
        //     setNavLinkActive(JSON.parse(localStorage.getItem('nav-state')))
        // }, 100)
    }, [])


    useEffect(() => {
        if (isClicked) {
            hamburger.classList.toggle('active-hamburger');
            mobile_menu.classList.toggle('active-ul');
        }
    }, [isClicked])

    const handleHamburger = () => {
        setIsClicked(!isClicked);
        if (isClicked) {
            hamburger.classList.toggle('active-hamburger');
            mobile_menu.classList.toggle('active-ul');
        }
    }

    return (
        <>
            <div id='navbar'>
                <nav className="navbar navbar-expand-lg navbar-dark page-bg-black">
                    <div className="container nav-bar">
                        <Link
                            to='home'
                            className="navbar-brand"
                            activeClass='active'
                            style={{ 'cursor': 'pointer' }}
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={500}
                        >
                            <img src={logo} alt="" width="130" height="50" className="d-inline-block align-text-top" />
                        </Link>
                        <div className='nav-list'>
                            <div className="hamburger" onClick={handleHamburger}>
                                <div className="bar"></div>
                            </div>
                            <ul >
                                <li className='d-block d-lg-none'>
                                    <Link
                                        to='home'
                                        data-after="হোম"
                                        onClick={() => {
                                            // localStorage.setItem('nav-state', JSON.stringify('home'));
                                            // setNavLinkActiveToggle(!navLinkActiveToggle);
                                            setIsClicked(true);
                                            if (isClicked) {
                                                hamburger.classList.toggle('active-hamburger');
                                                mobile_menu.classList.toggle('active-ul');
                                            }
                                        }}
                                        // className={`${navLinkActive === 'home' && 'active'} nav-link`}
                                        className='nav-link'
                                        activeClass='active'
                                        style={{ 'cursor': 'pointer' }}
                                        spy={true}
                                        smooth={true}
                                        offset={0}
                                        duration={500}
                                    >
                                        হোম
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to='motive'
                                        data-after="উদ্দেশ্য"
                                        onClick={() => {
                                            // localStorage.setItem('nav-state', JSON.stringify('motive'));
                                            // setNavLinkActiveToggle(!navLinkActiveToggle);
                                            setIsClicked(true);
                                            if (isClicked) {
                                                hamburger.classList.toggle('active-hamburger');
                                                mobile_menu.classList.toggle('active-ul');
                                            }
                                        }}
                                        // className={`${navLinkActive === 'motive' && 'active'} nav-link`}
                                        className='nav-link'
                                        activeClass='active'
                                        style={{ 'cursor': 'pointer' }}
                                        spy={true}
                                        smooth={true}
                                        offset={0}
                                        duration={500}
                                    >
                                        উদ্দেশ্য
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to='solution'
                                        data-after="সমাধান"
                                        onClick={() => {
                                            // localStorage.setItem('nav-state', JSON.stringify('solution'));
                                            // setNavLinkActiveToggle(!navLinkActiveToggle);
                                            setIsClicked(true);
                                            if (isClicked) {
                                                hamburger.classList.toggle('active-hamburger');
                                                mobile_menu.classList.toggle('active-ul');
                                            }
                                        }}
                                        // className={`${navLinkActive === 'solution' && 'active'} nav-link`}
                                        className='nav-link'
                                        activeClass='active'
                                        style={{ 'cursor': 'pointer' }}
                                        spy={true}
                                        smooth={true}
                                        offset={0}
                                        duration={500}
                                    >
                                        সমাধান
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to='procedure'
                                        data-after="কার্যপ্রণালী"
                                        onClick={() => {
                                            // localStorage.setItem('nav-state', JSON.stringify('procedure'));
                                            // setNavLinkActiveToggle(!navLinkActiveToggle);
                                            setIsClicked(true);
                                            if (isClicked) {
                                                hamburger.classList.toggle('active-hamburger');
                                                mobile_menu.classList.toggle('active-ul');
                                            }
                                        }}
                                        // className={`${navLinkActive === 'procedure' && 'active'} nav-link`}
                                        className='nav-link'
                                        activeClass='active'
                                        style={{ 'cursor': 'pointer' }}
                                        spy={true}
                                        smooth={true}
                                        offset={0}
                                        duration={500}
                                    >
                                        কার্যপ্রণালী
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to='benefits'
                                        data-after="সুবিধাসমুহ"
                                        onClick={() => {
                                            // localStorage.setItem('nav-state', JSON.stringify('benefits'));
                                            // setNavLinkActiveToggle(!navLinkActiveToggle);
                                            setIsClicked(true);
                                            if (isClicked) {
                                                hamburger.classList.toggle('active-hamburger');
                                                mobile_menu.classList.toggle('active-ul');
                                            }
                                        }}
                                        // className={`${navLinkActive === 'benefits' && 'active'} nav-link`}
                                        className='nav-link'
                                        activeClass='active'
                                        style={{ 'cursor': 'pointer' }}
                                        spy={true}
                                        smooth={true}
                                        offset={0}
                                        duration={500}
                                    >
                                        সুবিধাসমুহ
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to='contact'
                                        data-after="যোগাযোগ"
                                        onClick={() => {
                                            // localStorage.setItem('nav-state', JSON.stringify('contact'));
                                            // setNavLinkActiveToggle(!navLinkActiveToggle);
                                            setIsClicked(true);
                                            if (isClicked) {
                                                hamburger.classList.toggle('active-hamburger');
                                                mobile_menu.classList.toggle('active-ul');
                                            }
                                        }}
                                        // className={`${navLinkActive === 'contact' && 'active'} nav-link`}
                                        className='nav-link'
                                        activeClass='active'
                                        style={{ 'cursor': 'pointer' }}
                                        spy={true}
                                        smooth={true}
                                        offset={0}
                                        duration={500}
                                    >
                                        যোগাযোগ
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to='developers'
                                        data-after="আমাদের সম্পর্কে"
                                        onClick={() => {
                                            // localStorage.setItem('nav-state', JSON.stringify('developers'));
                                            // setNavLinkActiveToggle(!navLinkActiveToggle);
                                            setIsClicked(true);
                                            if (isClicked) {
                                                hamburger.classList.toggle('active-hamburger');
                                                mobile_menu.classList.toggle('active-ul');
                                            }
                                        }}
                                        // className={`${navLinkActive === 'developers' && 'active'} nav-link`}
                                        className='nav-link'
                                        activeClass='active'
                                        style={{ 'cursor': 'pointer' }}
                                        spy={true}
                                        smooth={true}
                                        offset={0}
                                        duration={500}
                                    >
                                        আমাদের সম্পর্কে
                                    </Link>
                                </li>
                                <li>
                                    <NavLink
                                        to="/dashboard"
                                        data-after="ড্যাশবোর্ড"
                                        className='nav-link nav-route'
                                        onClick={() => {
                                            localStorage.setItem('nav-state', 'dashboard');
                                        }}
                                    >
                                        ড্যাশবোর্ড
                                    </NavLink>
                                </li>
                                {(user?.email || truckDriver?.nid) ?
                                    <li>
                                        <button
                                            type='button'
                                            onClick={truckDriver?.nid ? logOutTruckDriver : logOutCityCorpUser}
                                            className='nav-link nav-route'
                                        >
                                            সাইন আউট
                                        </button>
                                    </li> :
                                    <li>
                                        <NavLink
                                            to="/authentication"
                                            data-after="সাইন ইন"
                                            className="nav-link nav-route"
                                        >
                                            সাইন ইন
                                        </NavLink>
                                    </li>
                                }
                                {(user?.email || truckDriver?.nid) && <li>
                                    <div className='d-flex justify-content-center align-items-center'>
                                        {cityCorpUserById?.photo || truckDriver?.photo ? <img src={`data:image/png;base64,${cityCorpUserById?.photo || truckDriver?.photo}`} className="user-img-navbar me-3 mb-1" alt="" /> : <img src={avatar} title="ইউজারের ছবি দেওয়া হয়নি" alt="" className="user-img-navbar me-3 mb-1" />}
                                        {(user?.email || truckDriver?.nid) && <p style={{ 'color': 'rgb(227, 255, 227)' }} className="text-center fs-6 mb-1 ">{user?.displayName || truckDriver?.displayName}</p>}
                                    </div>
                                </li>}
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    );
};

export default Navbar;