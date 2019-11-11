import React from 'react';
import { usePersonsAPI } from '../../hooks/use-personsAPI';
import { Grid, Header, Loader } from 'semantic-ui-react';
import NoteItem from './components/NoteItem';

const NoteList = () => {
    const { loading, persons } = usePersonsAPI();

    return (
        <>
            <Header color="blue" as="h3" icon="address book outline" textAlign="center" content="Note List" />
            {loading && <Loader active inline="centered" size="large" />}
            <Grid divided="vertically">
                <Grid.Row columns={2}>
                    {persons.map(person => (
                        <NoteItem key={person.id} {...person} />
                    ))}
                </Grid.Row>
            </Grid>
            {!loading && !persons && <Header color="blue" icon="users" content="There is no person in your list" />}
        </>
    );
};

export default NoteList;
