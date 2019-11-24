import React from 'react';
import useReactRouter from 'use-react-router';
import { usePersonsAPI } from '../../hooks/use-personsAPI';
import { Button, Grid, Header, Icon, Loader } from 'semantic-ui-react';
import NoteItem from './components/NoteItem';
import FilterNote from './components/FilterNote';

const NoteList = () => {
    const { loading, persons, fetchPersons } = usePersonsAPI();
    const { history } = useReactRouter();
    const redirectToAddNotePage = () => {
        history.push('/note-list/new');
    };

    return (
        <>
            <Grid divided="vertically">
                <Grid.Row columns={2}>
                    <Grid.Column floated="left">
                        <Header
                            color="blue"
                            as="h3"
                            icon="address book outline"
                            textAlign="center"
                            content="Note List"
                        />
                    </Grid.Column>
                    <Grid.Column floated="right">
                        <Button floated="right" onClick={redirectToAddNotePage}>
                            <Icon name="plus" />
                            Add note
                        </Button>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
            <FilterNote onApplyFilters={fetchPersons} />
            {loading && <Loader active inline="centered" size="large" />}
            <Grid divided="vertically">
                <Grid.Row columns={3}>
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
