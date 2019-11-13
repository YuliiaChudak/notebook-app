import React, { useState } from 'react';
import { Button, Confirm as SemanticConfirm } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { deletePerson } from '../../../utils/server';

const DeleteButton = ({ personId }) => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleConfirm = () => {
        deletePerson(personId);
        setOpen(false);
    };
    const handleCancel = () => setOpen(false);

    return (
        <div>
            <Button onClick={handleOpen} secondary>
                Delete
            </Button>
            <SemanticConfirm
                open={open}
                cancelButton="Never mind"
                confirmButton="Let's do it"
                onCancel={handleCancel}
                onConfirm={handleConfirm}
            />
        </div>
    );
};

DeleteButton.propTypes = {
    personId: PropTypes.number.isRequired,
};

export default DeleteButton;
