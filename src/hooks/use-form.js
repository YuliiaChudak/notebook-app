import { useState, useEffect } from 'react';
import { today } from '../utils/consts';

const initialValues = {
  address: '',
  birthday: today,
  city: '',
  country: '',
  first_name: '',
  last_name: '',
  occupation: '',
  patronymic: '',
  phone: '',
  role_id: 1,
};

export const useForm = data => {
  const [values, setValues] = useState(initialValues);
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
