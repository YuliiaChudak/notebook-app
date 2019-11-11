import React, { useState } from 'react'
import { Button, Confirm } from 'semantic-ui-react'

const ConfirmButtons = () => {
    const [open, setOpen] = useState(false);

    const handleConfirm = () => setOpen(false);
    const handleCancel = () => setOpen(true);

    return (
        <div>
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

export default ConfirmButtons;
