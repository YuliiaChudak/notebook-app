import { useState, useEffect } from 'react';
import { getNoteByIdRequest, getPersonsRequest } from '../utils/server';

export const usePersonsAPI = () => {
    const [loading, setLoading] = useState(true);
    const [persons, setPersons] = useState([]);

    const fetchPersons = async query => {
        try {
            const response = await getPersonsRequest(query);

            setPersons(response.data);
        } catch (error) {
            alert('No person in your note');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchPersons();
    }, []);

    return {
        loading,
        persons,
        fetchPersons,
    };
};

export const useNoteByPersonIdAPI = id => {
    const [loading, setLoading] = useState(true);
    const [note, setNote] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            try {
                const {
                    data: [note],
                } = await getNoteByIdRequest(id);

                setNote(note);
            } catch (error) {
                alert('Error has occurred while fetching note data.');
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [id]);

    return {
        loading,
        note,
    };
};
