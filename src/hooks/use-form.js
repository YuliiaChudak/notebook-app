import { useState, useEffect } from 'react';
import { today } from '../utils/consts';

export const useForm = data => {
    const [values, setValues] = useState({ birthday: today });
    const [disabled, setDisabled] = useState(true);

    useEffect(() => {
        if (data) {
            setValues(data);
        }
    }, [data]);

    const handleChange = (_, data) => {
        setValues(values => {
            switch (data.name) {
                case 'address':
                case 'city':
                case 'country':
                case 'first_name':
                case 'last_name':
                case 'patronymic':
                case 'birthday':
                case 'phone':
                case 'role_id':
                case 'occupation': {
                    return { ...values, [data.name]: data.value };
                }
                case 'is_studying': {
                    return { ...values, [data.name]: data.checked };
                }
                default:
                    return values;
            }
        });

        setDisabled(false);
    };

    return {
        disabled,
        handleChange,
        values,
    };
};
