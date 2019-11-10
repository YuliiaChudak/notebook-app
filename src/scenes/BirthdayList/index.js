import React, { useEffect, useState } from 'react';
import { Loader, Header, Grid } from 'semantic-ui-react';
import axios from 'axios';

import BirthdayItem from './components/BirthdayItem';

export const getPersonsByBirthday = async date => {
    const url = `http://localhost:3001/api/notes?birthday=${date}`;

    return axios.get(url);
};

const usePersonBirthdayProvider = () => {
    const [today] = new Date().toISOString().split('T');
    console.log(today);

    const [loading, setLoading] = useState(true);
    const [persons, setPersons] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getPersonsByBirthday(today);

                setPersons(response.data);
                console.log(response);
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

const BirthdayList = () => {
    const { loading, persons } = usePersonBirthdayProvider();
    const isAnyPersonBirthdayToday = persons && persons.length > 0;

    return (
        <>
            <Header
                color="blue"
                as="h3"
                icon="calendar alternate outline"
                textAlign="center"
                content="Birthday calendar"
            />
            {loading && <Loader active inline="centered" size="large" />}
            {!loading && isAnyPersonBirthdayToday && (
                <Grid divided="vertically">
                    <Grid.Row columns={persons.length}>
                        {persons.map(person => (
                            <BirthdayItem key={person.id} {...person} />
                        ))}
                    </Grid.Row>
                </Grid>
            )}
            {!loading && !isAnyPersonBirthdayToday && (
                <Header color="blue" icon="birthday cake" content="No person has a birthday today!" />
            )}
        </>
    );
};

export default BirthdayList;
