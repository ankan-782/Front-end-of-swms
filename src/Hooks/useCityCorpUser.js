import { useEffect, useState } from "react";

const useCityCorpUser = () => {
    const [cityCorpUser, setCityCorpUser] = useState({});

    useEffect(() => {
        if (localStorage.getItem('cityId')) {
            const cityCorpUserId = localStorage.getItem('cityId');
            fetch(`https://enigmatic-tundra-42778.herokuapp.com/cityCorporationUsers/${cityCorpUserId}`)
                .then(res => res.json())
                .then(data => setCityCorpUser(data));
        }
    }, []);

    return [cityCorpUser]
}

export default useCityCorpUser;