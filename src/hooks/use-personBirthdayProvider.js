import { useState, useEffect } from 'react';
import { getPersonsByBirthdayRequest } from '../utils/server';

export const usePersonBirthdayProvider = () => {
    const [today] = new Date().toISOString().split('T');
    console.log(today);

    const [loading, setLoading] = useState(true);
    const [persons, setPersons] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getPersonsByBirthdayRequest(today);

                setPersons(response.data);
            } catch (error) {
                throw new Error();
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [today]);

    return {
        loading,
        persons,
    };
};
