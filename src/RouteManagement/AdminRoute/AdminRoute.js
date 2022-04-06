import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuthValues from '../../Hooks/useAuthValues';
import spinner from '../../Images/spinner.gif';

const PrivateRoute = ({ children }) => {
    const { user, isLoading } = useAuthValues();
    let location = useLocation();
    if (isLoading) {
        return (
            <>
                <div className="all-page-bg page-bg-white d-flex justify-content-center align-items-center">
                    <img className='spinner' src={spinner} alt="" />
                </div>
            </>
        );
    }
    if (user?.email) {
        return children;
    }
    return <Navigate to="/authentication/loginForCityCorp" state={{ from: location }} />;
};

export default PrivateRoute;