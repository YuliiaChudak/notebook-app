import React from 'react';
import PropTypes from 'prop-types';

import Avatar from 'react-avatar';
import { Button, Grid, Header, List, Segment } from 'semantic-ui-react';
import { deletePerson } from '../../../utils/server';

const NoteItem = ({ id, first_name, last_name, patronymic, birthday, occupation }) => {
    const name = `${first_name} ${last_name}`;

    return (
        <Grid.Column textAlign="center">
            <Avatar round={true} name={name} />
            <Header color="blue" content={name} />
            <Segment style={{ margin: '0 auto' }} compact basic textAlign="center">
                <List>
                    {patronymic && <List.Item icon="users" content={patronymic} />}
                    <List.Item icon="birthday cake" content={birthday} />
                    <List.Item icon="user circle" content={occupation} />
                </List>
                <div>
                    <Button primary>edit</Button>
                    <Button onClick={() => deletePerson(id)} secondary>
                        delete
                    </Button>
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
