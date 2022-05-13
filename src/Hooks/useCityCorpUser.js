import { useEffect, useState } from "react";

const useCityCorpUser = () => {
    const [cityCorpUser, setCityCorpUser] = useState({});

    useEffect(() => {
        if (localStorage.getItem('cityId')) {
            const cityCorpUserId = localStorage.getItem('cityId');
            fetch(`http://localhost:5000/cityCorporationUsers/${cityCorpUserId}`)
                .then(res => res.json())
                .then(data => setCityCorpUser(data));
        }
    }, []);

    return [cityCorpUser]
}

export default useCityCorpUser;