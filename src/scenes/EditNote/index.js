import React from 'react';
import useReactRouter from 'use-react-router';
import PropTypes from 'prop-types';
import { useNoteByPersonIdAPI } from '../../hooks/use-personsAPI';
import { useForm } from '../../hooks/use-form';
import { Header, Loader } from 'semantic-ui-react';
import { updateNoteRequest } from '../../utils/server';
import NoteForm from '../shared/NoteForm';

const EditNote = props => {
    const id = props.match.params.id;
    const { loading, note } = useNoteByPersonIdAPI(id);
    const { values, handleChange, disabled } = useForm(note);
    const { history } = useReactRouter();
    const redirectToNoteList = () => {
        history.push('/note-list');
    };

    const handleOnSubmitForm = async e => {
        e.preventDefault();
        const { phone, country, city, address, ...data } = values;

        await updateNoteRequest(id, {
            ...data,
            phones: [phone],
            addresses: [{ country, city, address }],
        });

        redirectToNoteList();
    };

    return (
        <>
            <Header color="blue" as="h3" textAlign="center" content="Edit Note" />
            {loading && <Loader active inline="centered" size="large" />}
            {!loading && (
                <NoteForm
                    disabled={disabled}
                    handleChange={handleChange}
                    handleOnSubmitForm={handleOnSubmitForm}
                    values={values}
                />
            )}
        </>
    );
};

EditNote.propTypes = {
    match: PropTypes.shape({
        params: PropTypes.shape({
            id: PropTypes.string,
        }),
    }).isRequired,
};

export default EditNote;
