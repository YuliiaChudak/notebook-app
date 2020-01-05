import React from 'react';
import useReactRouter from 'use-react-router';
import { Header } from 'semantic-ui-react';
import { useForm } from '../../hooks/use-form';
import { addNoteRequest } from '../../utils/server';
import NoteForm from '../shared/NoteForm';

const AddNote = () => {
    const { values, handleChange, disabled } = useForm();
    const { history } = useReactRouter();
    const redirectToNoteList = () => {
        history.push('/note-list');
    };

    const handleOnSubmitForm = async e => {
        e.preventDefault();
        const { phone, country, city, address, ...data } = values;
        let payload = data;

        if (phone) {
            payload.phones = [phone];
        }

        if (country && city && address) {
            payload.addresses = [{ country, city, address }]
        }

        await addNoteRequest(payload);

        redirectToNoteList();
    };

    return (
        <>
            <Header color="blue" textAlign="center" content="Add new note" />
            <NoteForm
                disabled={disabled}
                handleChange={handleChange}
                handleOnSubmitForm={handleOnSubmitForm}
                values={values}
            />
        </>
    );
};

export default AddNote;
