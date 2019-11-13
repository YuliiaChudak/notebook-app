import { useState } from 'react';
import { sendCongratulationRequest } from '../utils/server';

export const useCongratulationAPI = () => {
    const [sending, setSending] = useState(false);

    const sendCongratulation = async (id, name) => {
        const message = `My congrats ${name}!`;

        try {
            setSending(true);

            await sendCongratulationRequest(id, message);

            setSending(false);
        } catch (e) {
            setSending(false);
            alert('It was not sent (((');
        }
    };

    return {
        sending,
        sendCongratulation,
    };
};
