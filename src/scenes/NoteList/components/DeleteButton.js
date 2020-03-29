import React, { useState } from 'react';
import { Button, Confirm as SemanticConfirm } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { deletePerson } from '../../../utils/server';

const DeleteButton = ({ personId, onDelete }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleConfirm = async () => {
    await deletePerson(personId);
    setOpen(false);
    onDelete(personId);
  };
  const handleCancel = () => setOpen(false);

  return (
    <div>
      <Button fluid primary onClick={handleOpen}>
        Delete
      </Button>
      <SemanticConfirm
        open={open}
        cancelButton="Cancel"
        confirmButton="Yes"
        onCancel={handleCancel}
        onConfirm={handleConfirm}
      />
    </div>
  );
};

DeleteButton.propTypes = {
  onDelete: PropTypes.func.isRequired,
  personId: PropTypes.number.isRequired,
};

export default DeleteButton;
