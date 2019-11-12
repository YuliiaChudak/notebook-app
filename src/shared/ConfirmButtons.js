import React, { useState } from 'react';
import { Button, Confirm } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const ConfirmButtons = ({ children }) => {
    const [open, setOpen] = useState(false);

    const handleConfirm = () => setOpen(false);
    const handleCancel = () => setOpen(true);

    return (
        <div>
            {children}
            <Confirm
                open={setOpen(true)}
                cancelButton="Never mind"
                confirmButton="Let's do it"
                onCancel={handleCancel}
                onConfirm={handleConfirm}
            />
        </div>
    );
};

ConfirmButtons.propTypes = {
    children: PropTypes.element.isRequired,
};

export default ConfirmButtons;
