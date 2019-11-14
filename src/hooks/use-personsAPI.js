import { useState, useEffect } from 'react';
import { getPersonByIdRequest, getPersonsRequest } from '../utils/server';

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

export const usePersonByIdAPI = id => {
    const [loading, setLoading] = useState(true);
    const [person, setPerson] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getPersonByIdRequest(id);
                console.log(response.data);
                setPerson(response.data);
            } catch (error) {
                throw new Error();
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [id]);

    console.log('PERSONNN', person);
    return {
        loading,
        person,
    };
};
