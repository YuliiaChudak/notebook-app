import React, { useContext } from 'react';
import { Button, Form } from 'semantic-ui-react';
import { DataContext } from '../../context/DataProvider';
import PropTypes from 'prop-types';

const NoteForm = ({ disabled, handleOnSubmitForm, handleChange, values }) => {
  const { roles } = useContext(DataContext);
  const normalizeRolesForDropdown = roles =>
    roles.map(role => ({
      key: role.id,
      value: role.id,
      text: role.name,
    }));

  return (
    <>
      <Form onSubmit={handleOnSubmitForm}>
        <Form.Input
          label="First Name"
          type="string"
          name="first_name"
          value={values['first_name']}
          onChange={handleChange}
          placeholder="First Name"
          required
        />
        <Form.Input
          label="Last Name"
          type="string"
          name="last_name"
          value={values['last_name']}
          onChange={handleChange}
          placeholder="Last Name"
          required
        />
        <Form.Input
          label="Patronymic"
          type="string"
          value={values['patronymic']}
          onChange={handleChange}
          name="patronymic"
          placeholder="Patronymic"
        />
        <Form.Input
          label="Birth Date"
          type="date"
          value={values['birthday']}
          onChange={handleChange}
          name="birthday"
          placeholder="Birthday"
          required
        />
        <Form.Input
          label="Occupation"
          type="string"
          value={values['occupation']}
          onChange={handleChange}
          name="occupation"
          placeholder="Occupation"
          required
        />
        <Form.Input
          label="Phone"
          type="string"
          value={values['phone']}
          onChange={handleChange}
          name="phone"
          placeholder="Phone"
        />
        <Form.Select
          label="Relationship"
          placeholder="Select Relationship"
          options={normalizeRolesForDropdown(roles)}
          value={values['role_id']}
          onChange={handleChange}
          name="role_id"
          selection
          required
        />
        <Form.Group inline>
          <Form.Field>
            <Form.Input
              label="Country"
              type="string"
              value={values['country']}
              onChange={handleChange}
              name="country"
              placeholder="Country"
            />
          </Form.Field>
          <Form.Field>
            <Form.Input
              label="City"
              type="string"
              value={values['city']}
              onChange={handleChange}
              name="city"
              placeholder="City"
            />
          </Form.Field>
          <Form.Field>
            <Form.Input
              label="Address"
              type="string"
              value={values['address']}
              onChange={handleChange}
              name="address"
              placeholder="Address"
            />
          </Form.Field>
        </Form.Group>
        <Button type="submit" primary disabled={disabled}>
          Save
        </Button>
      </Form>
    </>
  );
};

NoteForm.propTypes = {
  disabled: PropTypes.bool.isRequired,
  handleOnSubmitForm: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  values: PropTypes.shape({
    first_name: PropTypes.string,
    last_name: PropTypes.string,
    patronymic: PropTypes.string,
    birthday: PropTypes.string,
    occupation: PropTypes.string,
    phone: PropTypes.string,
    role_id: PropTypes.number,
    country: PropTypes.string,
    city: PropTypes.string,
    address: PropTypes.string,
  }).isRequired,
};

export default NoteForm;
