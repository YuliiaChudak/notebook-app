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
        console.log(error);
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
