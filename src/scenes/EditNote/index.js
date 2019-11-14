import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { usePersonByIdAPI } from '../../hooks/use-personsAPI';
import { useForm } from '../../hooks/use-form';
import { Button, Form, Header, Loader } from 'semantic-ui-react';
import { DataContext } from '../../context/DataProvider';
import { useNormalizedRoles } from '../../hooks/use-normalizedRoles';
import { updateNoteRequest } from '../../utils/server';

const EditNote = props => {
    const id = props.match.params.id;
    const { loading, person } = usePersonByIdAPI(id);
    const { values, handleChange, disabled } = useForm();
    const { roles } = useContext(DataContext);
    const { normalizeRolesForDropdown } = useNormalizedRoles(roles);
    const handleOnSubmitForm = async e => {
        e.preventDefault();
        await updateNoteRequest(id, values);
    };
    console.log(values, 'values');

    console.log(person.first_name, 'props person');
    return (
        <>
            <Header color="blue" as="h3" textAlign="center" content="Edit Note" />
            {loading && <Loader active inline="centered" size="large" />}
            {!loading && (
                <Form onSubmit={handleOnSubmitForm}>
                    <Form.Input
                        label="First Name"
                        type="string"
                        name="first_name"
                        defaultValue={person.first_name}
                        value={values['first_name']}
                        onChange={handleChange}
                        placeholder="First Name"
                    />
                    <Form.Input
                        label="Last Name"
                        type="string"
                        name="last_name"
                        defaultValue={person.last_name}
                        value={values['last_name']}
                        onChange={handleChange}
                        placeholder="Last Name"
                    />
                    <Form.Input
                        label="Patronymic"
                        type="string"
                        defaultValue={person.patronymic}
                        value={values['patronymic']}
                        onChange={handleChange}
                        name="patronymic"
                        placeholder="Patronymic"
                    />
                    <Form.Input
                        label="Birth Date"
                        type="date"
                        defaultValue={person.birthday}
                        value={values['birthday']}
                        onChange={handleChange}
                        name="birthday"
                        placeholder="Birthday"
                    />
                    <Form.Input
                        label="Occupation"
                        type="string"
                        defaultValue={person.occupation}
                        value={values['occupation']}
                        onChange={handleChange}
                        name="occupation"
                        placeholder="Occupation"
                    />
                    <Form.Select
                        label="Relationship"
                        placeholder="Select Relationship"
                        options={normalizeRolesForDropdown(roles)}
                        defaultValue={person.role_id}
                        value={values['role_id']}
                        onChange={handleChange}
                        name="role_id"
                        selection
                    />
                    <Form.Checkbox
                        name="is_studying"
                        defaultValue={person.is_studying}
                        value={values['is_studying']}
                        onChange={handleChange}
                        label="Are you a student?"
                    />
                    <Button type="submit" disabled={disabled}>
                        Edit Note
                    </Button>
                </Form>
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
