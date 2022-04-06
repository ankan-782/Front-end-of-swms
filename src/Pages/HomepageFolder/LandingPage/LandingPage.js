import React, { useEffect, useState } from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import Home from '../Home/Home';
import Motive from '../Motive/Motive';
import Solution from '../Solution/Solution';
import Procedure from '../Procedure/Procedure';
import Benefits from '../Benefits/Benefits';
import Contact from '../More/Contact/Contact';
import DevelopersMeet from '../More/DevelopersMeet/DevelopersMeet';
import './LandingPage.css';

const LandingPage = () => {
    
    //removing user authentication state message
    const [toast, setToast] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            if (localStorage.getItem('loggedIn')) {
                localStorage.removeItem('loggedIn');
                setToast(false);
            }
            else if (localStorage.getItem('signedUp')) {
                localStorage.removeItem('signedUp');
                setToast(false);
            }
            else if (localStorage.getItem('logout')) {
                localStorage.removeItem('logout');
                setToast(false);
            }
        }, 5000);
    }, [toast]);


    return (
        <>
            <Navbar />
            <Home />
            <Motive />
            <Solution />
            <Procedure />
            <Benefits />
            <Contact />
            <DevelopersMeet />

            {/* displaying user authentication state message */}
            <div >
                {(<div className={`${localStorage.getItem('loggedIn') ? 'active-toast' : 'toast-container'} toast-bg`} style={{ 'zIndex': 11 }} role="alert">
                    <p className='m-0'>সাইন ইন সফল হয়েছে</p>
                </div>)}
                {(<div className={`${localStorage.getItem('signedUp') ? 'active-toast' : 'toast-container'} toast-bg`} style={{ 'zIndex': 11 }} role="alert">
                    <p className='m-0'>সাইন আপ সফল হয়েছে</p>
                </div>)}
                {(<div className={`${localStorage.getItem('logout') ? 'active-toast' : 'toast-container'} toast-bg`} style={{ 'zIndex': 11 }} role="alert">
                    <p className='m-0'>সাইন আউট সফল হয়েছে</p>
                </div>)}
            </div>
        </>
    );
};

export default LandingPage;