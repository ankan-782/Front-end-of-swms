import initializeAuthentication from '../FirebaseConfig/firebase.init';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, getIdToken } from 'firebase/auth';
import { getDatabase, ref, child, get } from "firebase/database";
import { useEffect, useState } from 'react';

//initialize Authentication app
initializeAuthentication();

const useFunctionalityOfAuthenticationAndDatabase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [backendError, setBackendError] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [token, setToken] = useState('');

    const [fillPercentageValue, setFillPercentageValue] = useState();

    //authentication functionality of firebase and mongoDb

    const auth = getAuth();

    // observe whether user auth state changed or not
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                getIdToken(user)
                    .then(idToken => {
                        setToken(idToken);
                    })
            } else {
                setUser({});
            }
            setIsLoading(false);
        });
        return () => unsubscribe;
    }, [auth]);


    // Sign in or login for city corporation
    const loginProcessForCityCorp = (email, password, location, navigate) => {
        setIsLoading(true);

        loadSpecificCityCorpUser(email);

        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                // alert('successfully logged in');
                const destination = location?.state?.from || '/';
                navigate(destination);
                setError('');
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => setIsLoading(false));
    }


    // Sign in or login for truck driver user
    const loginProcessForTruckDriver = (nid, pin, location, navigate) => {
        setIsLoading(true);
        fetch(`http://localhost:5000/truckDriverUsers/details/${nid}`)
            .then(res => res.json())
            .then(data => {
                if (data?.pin) {
                    if (data?.pin === pin) {
                        localStorage.setItem('truckId', data._id);
                        localStorage.setItem('loggedIn', data._id);

                        // const destinationRoute = localStorage.getItem('route');

                        const destination = location?.state?.from || '/';
                        console.log(destination);
                        navigate(destination);
                    }
                    else {
                        setError('পিন নাম্বার মিলছে না');
                    }

                }
                else {
                    setBackendError(data.message);
                }
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => setIsLoading(false));
    }

    // Sign up or Registration for city corporation
    const registrationProcessForCityCorp = (email, password, name, photo) => {
        setIsLoading(true);
        //save city corporation user to the database
        saveCityCorporationUser(email, name, photo, 'POST');

        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                // alert('successfully registered');
                setError('');
                setSuccess('এডমিন ইউজার সংযুক্তি সফল হয়েছে');

                //save user by email & name immediately when user creation
                const newCityCorporationUser = { email: email, displayName: name };
                setUser(newCityCorporationUser);

            })
            .catch((error) => {
                if (error.message === 'Firebase: Error (auth/email-already-in-use).') {
                    setError('');
                }
                else {
                    setError(error.message);
                }
            })
            .finally(() => setIsLoading(false));
    }


    // Sign up or Registration for truck drivers
    const registrationProcessForTruckDriver = (truckDriverUserInfos, photo) => {
        setIsLoading(true);

        const formData = new FormData();
        formData.append('name', truckDriverUserInfos.name);
        formData.append('age', truckDriverUserInfos.age);
        formData.append('gender', truckDriverUserInfos.gender);
        formData.append('phone', truckDriverUserInfos.phone);
        formData.append('pin', truckDriverUserInfos.pin);
        formData.append('nid', truckDriverUserInfos.nid);
        formData.append('dln', truckDriverUserInfos.dln);
        formData.append('address', truckDriverUserInfos.address);
        formData.append('photo', photo);

        fetch('http://localhost:5000/truckDriverUsers', {
            method: 'POST',
            body: formData,
        })
            .then(res => res.json())
            .then(data => {
                if (data.message) {
                    setError(data.message);
                }
                else if (data.insertedId) {
                    // localStorage.setItem('truckId', data.insertedId);
                    // localStorage.setItem('signedUp', data.insertedId);
                    // alert('successfully registered');
                    setSuccess('নতুন ড্রাইভার সংযুক্তি সফল হয়েছে');
                }
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => setIsLoading(false));
    }


    //log out functionality for city corporation user
    const logOutCityCorpUser = () => {
        setIsLoading(true);
        localStorage.removeItem('cityId');
        localStorage.setItem('logout', '2');
        signOut(auth)
            .then(() => {
                // Sign-out successful.
                window.location.reload();
            }).catch((error) => {
                setError(error.message);
            })
            .finally(() => setIsLoading(false));
    }


    //log out functionality for truck driver user
    const logOutTruckDriver = () => {
        localStorage.removeItem('truckId');
        localStorage.setItem('logout', '1');
        window.location.reload();
    }


    // save city corporation user to the database when registration
    const saveCityCorporationUser = (email, name, photo, method) => {
        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('photo', photo);

        fetch('http://localhost:5000/cityCorporationUsers', {
            method: method,
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                if (data.message) {
                    setBackendError(data.message);
                }
                else {
                    localStorage.setItem('cityId', data.insertedId);
                    localStorage.setItem('signedUp', data.insertedId);
                    console.log('success', data);
                }
            })
            .catch(error => console.error('error', error))
    }

    //load specific city corp user for displaying photo when login
    const loadSpecificCityCorpUser = (email) => {
        fetch(`http://localhost:5000/cityCorporationUsers/searchByEmail/${email}`)
            .then(res => res.json())
            .then(data => {
                if (data.message) {
                    setBackendError(data.message);
                }
                else {
                    //for photo
                    localStorage.setItem('cityId', data._id);
                    //for homepage confirmation
                    localStorage.setItem('loggedIn', data._id);
                    //for dashboard confirmation
                    // localStorage.setItem('loggedInC', data._id);
                }
            })
            .catch(error => setError(error))
    }


    //Database Functionality of firebase
    const db = getDatabase();

    const handleDatabase = () => {
        const dbRef = ref(db);
        // console.log(dbRef);
        get(child(dbRef, 'ultrasonic_value')).then((snapshot) => {
            if (snapshot.exists()) {
                // console.log(snapshot.val());
                const sensorDistance = snapshot.val();
                const fillPercentage = Math.round(((20 - sensorDistance) / 20) * 100);
                if (fillPercentage < 0) {
                    setFillPercentageValue(0);
                }
                else if (fillPercentage >= 0 && fillPercentage <= 100) {
                    setFillPercentageValue(fillPercentage);
                }
                else if (fillPercentage > 100) {
                    setFillPercentageValue(100);
                }
            } else {
                setError("কোনো ডাটা পাওয়া যায় নি");
            }
        }).catch((error) => {
            setError(error);
        });
    }

    return {
        user,
        setUser,
        token,
        setToken,
        error,
        setError,
        backendError,
        setBackendError,
        success,
        setSuccess,
        isLoading,
        setIsLoading,
        registrationProcessForCityCorp,
        loginProcessForCityCorp,
        registrationProcessForTruckDriver,
        loginProcessForTruckDriver,
        logOutCityCorpUser,
        logOutTruckDriver,
        fillPercentageValue,
        handleDatabase,
    };
}

export default useFunctionalityOfAuthenticationAndDatabase;