import { useState, useEffect } from 'react';
import { getPersonsRequest } from '../utils/server';

export const usePersonsAPI = () => {
    const [loading, setLoading] = useState(true);
    const [persons, setPersons] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getPersonsRequest();

                setPersons(response.data);
            } catch (error) {
                throw new Error();
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return {
        loading,
        persons,
    };
};
