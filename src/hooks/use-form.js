import { useState } from 'react';

export const useForm = () => {
    const [values, setValues] = useState({});

    const handleChange = (_, data) => {
        console.log(data, 'DATA');
        setValues(values => {
            switch (data.name) {
                case 'first_name':
                case 'last_name':
                case 'patronymic':
                case 'birthday':
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
    };

    return {
        handleChange,
        values,
    };
};
