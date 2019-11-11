import React from 'react';
import { Loader, Header, Grid } from 'semantic-ui-react';

import BirthdayItem from './components/BirthdayItem';
import { usePersonBirthdayProvider } from '../../hooks/use-personBirthdayProvider';

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
                    <Grid.Row columns={3}>
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
