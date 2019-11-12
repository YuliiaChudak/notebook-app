import React from 'react';
import {Checkbox, Input} from "semantic-ui-react";

const AddNote = () => {
    return (
        <>
            <form onSubmit={() => console.log('submitted')}>
                <Input type="string" name="first_name" placeholder="First Name" />
                <Input type="string" name="last_name" placeholder="Last Name" />
                <Input type="string" name="patronymic" placeholder="Patronymic" />
                <Input type="date" name="date" placeholder="Birthday" />
                <Input type="string" name="occupation" placeholder="Occupation" />
                <Checkbox name="is_studying" label="Are you a student?" />
            </form>
        </>
    )
};

export default AddNote;
