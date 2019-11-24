import { useState, useEffect } from 'react';
import { getPersonsByBirthdayRequest } from '../utils/server';

export const usePersonBirthdayProvider = () => {
    const [loading, setLoading] = useState(true);
    const [persons, setPersons] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getPersonsByBirthdayRequest();

                setPersons(response.data);
            } catch (error) {
                alert('No person in your note');
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
