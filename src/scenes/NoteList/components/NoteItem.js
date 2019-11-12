import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import Avatar from 'react-avatar';
import { Button, Grid, Header, List, Segment } from 'semantic-ui-react';
import DeleteButton from './DeleteButton';
import { DataContext } from '../../../context/DataProvider';

const NoteItem = ({ id, first_name, last_name, patronymic, birthday, occupation, role_id }) => {
    const { getRoleNameById } = useContext(DataContext);
    const name = `${first_name} ${last_name}`;
    const role = getRoleNameById(role_id);

    return (
        <Grid.Column textAlign="center">
            <Avatar round={true} name={name} />
            <Header color="blue" content={name} />
            <Segment style={{ margin: '0 auto' }} compact basic textAlign="center">
                <List>
                    {patronymic && <List.Item icon="users" content={patronymic} />}
                    <List.Item icon="birthday cake" content={birthday} />
                    <List.Item icon="user circle" content={occupation} />
                    <List.Item icon="user circle" content={role} />
                </List>
                <div>
                    <Button primary>edit</Button>
                    <DeleteButton personId={id} />
                </div>
            </Segment>
        </Grid.Column>
    );
};

NoteItem.propTypes = {
    id: PropTypes.number.isRequired,
    first_name: PropTypes.string.isRequired,
    last_name: PropTypes.string.isRequired,
    patronymic: PropTypes.string,
    birthday: PropTypes.string.isRequired,
    occupation: PropTypes.string.isRequired,
};

export default NoteItem;
