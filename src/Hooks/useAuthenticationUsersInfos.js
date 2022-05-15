import { useEffect, useState } from "react";
import useAuthValues from '../Hooks/useAuthValues';

const useAuthenticationUsersInfos = () => {
    const [truckDriverInfos, setTruckDriverInfos] = useState([]);
    const [cityCorpUserInfos, setCityCorpUserInfos] = useState([]);

    const { token } = useAuthValues();

    useEffect(() => {
        fetch('https://enigmatic-tundra-42778.herokuapp.com/truckDriverUsers')
            .then(res => res.json())
            .then(data => setTruckDriverInfos(data));
    }, [])

    useEffect(() => {
        fetch('https://enigmatic-tundra-42778.herokuapp.com/cityCorporationUsers')
            .then(res => res.json())
            .then(data => setCityCorpUserInfos(data));
    }, [])

    return [truckDriverInfos, cityCorpUserInfos];
}

export default useAuthenticationUsersInfos;