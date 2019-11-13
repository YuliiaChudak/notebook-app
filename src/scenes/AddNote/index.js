import React, { useContext, useCallback } from 'react';
import { Button, Form, Header } from 'semantic-ui-react';
import { today } from '../../utils/consts';
import { useForm } from '../../hooks/use-form';
import { DataContext } from '../../context/DataProvider';
import { addNoteRequest } from '../../utils/server';

const AddNote = () => {
    const { values, handleChange, disabled } = useForm();
    const { roles } = useContext(DataContext);

    const normalizeRolesForDropdown = useCallback(
        roles =>
            roles.map(role => ({
                key: role.id,
                value: role.id,
                text: role.name,
            })),
        [roles],
    );

    const handleOnSubmitForm = async e => {
        e.preventDefault();
        await addNoteRequest(values);
    };

    return (
        <>
            <Header color="blue" as="h3" icon="note" textAlign="center" content="Note List">
                Add new note
            </Header>
            <Form onSubmit={handleOnSubmitForm}>
                <Form.Input
                    label="First Name"
                    type="string"
                    name="first_name"
                    value={values['first_name']}
                    onChange={handleChange}
                    placeholder="First Name"
                />
                <Form.Input
                    label="Last Name"
                    type="string"
                    name="last_name"
                    value={values['last_name']}
                    onChange={handleChange}
                    placeholder="Last Name"
                />
                <Form.Input
                    label="Patronymic"
                    type="string"
                    value={values['patronymic']}
                    onChange={handleChange}
                    name="patronymic"
                    placeholder="Patronymic"
                />
                <Form.Input
                    label="Birth Date"
                    type="date"
                    defaultValue={today}
                    value={values['birthday']}
                    onChange={handleChange}
                    name="birthday"
                    placeholder="Birthday"
                />
                <Form.Input
                    label="Occupation"
                    type="string"
                    value={values['occupation']}
                    onChange={handleChange}
                    name="occupation"
                    placeholder="Occupation"
                />
                <Form.Select
                    label="Relationship"
                    placeholder="Select Relationship"
                    options={normalizeRolesForDropdown(roles)}
                    value={values['role_id']}
                    onChange={handleChange}
                    name="role_id"
                    selection
                />
                <Form.Checkbox
                    name="is_studying"
                    value={values['is_studying']}
                    onChange={handleChange}
                    label="Are you a student?"
                />
                <Button type="submit" disabled={disabled}>
                    Add Note
                </Button>
            </Form>
        </>
    );
};

export default AddNote;
