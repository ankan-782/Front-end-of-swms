import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import useAuthValues from '../Hooks/useAuthValues';

const withAuthentication = (OriginalComponent) => {

    const NewComponent = () => {
        const [inputActive, setInputActive] = useState('');
        const [inputFieldInfos, setInputFieldInfos] = useState({});
        const [pinNumberState, setPinNumberState] = useState(true);
        const [photo, setPhoto] = useState(null);
        const [showPassword, setShowPassword] = useState(false);
        const [showConfirmPassword, setShowConfirmPassword] = useState(false);

        const { setError } = useAuthValues();


        const location = useLocation();
        const navigate = useNavigate();

        const showHideTogglePassword = () => {
            if (!showPassword) {
                setShowPassword(true);
            }
            else setShowPassword(false);
        }

        const showHideToggleConfirmPassword = () => {
            if (!showConfirmPassword) {
                setShowConfirmPassword(true);
            }
            else setShowConfirmPassword(false);
        }

        const handleOnChange = (e) => {
            const field = e.target.name;
            const fieldValue = e.target.value;
            if (field === 'pin') {
                if (fieldValue.length > 4) {
                    setPinNumberState(false);
                    setError('পিন নাম্বার ৪ ডিজিট এর বেশি ব্যবহার করা যাবে না');
                }
                else {
                    setPinNumberState(true);
                    setError('');
                }
            }
            const newInputFieldInfos = { ...inputFieldInfos };
            newInputFieldInfos[field] = fieldValue;
            setInputFieldInfos(newInputFieldInfos);
        }

        // for photo upload
        const handleOnPhotoUpload = e => {
            const insertedPhoto = e.target.files[0];
            console.log(insertedPhoto);
            setPhoto(insertedPhoto);
        }

        return (<OriginalComponent
            inputActive={inputActive}
            photo={photo}
            setInputActive={setInputActive}
            showPassword={showPassword}
            showConfirmPassword={showConfirmPassword}
            inputFieldInfos={inputFieldInfos}
            pinNumberState={pinNumberState}
            location={location}
            navigate={navigate}
            showHideTogglePassword={showHideTogglePassword}
            showHideToggleConfirmPassword={showHideToggleConfirmPassword}
            handleOnChange={handleOnChange}
            handleOnPhotoUpload={handleOnPhotoUpload}
        />);
    };

    return NewComponent;
};

export default withAuthentication;