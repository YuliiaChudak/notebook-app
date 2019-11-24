import React from 'react';
import PropTypes from 'prop-types';

import Avatar from 'react-avatar';
import { Grid, Header, Icon, Segment } from 'semantic-ui-react';
import DeleteButton from './DeleteButton';
import { Link } from 'react-router-dom';

const NoteItem = ({ id, first_name, last_name }) => {
    const name = `${first_name} ${last_name}`;

    return (
        <Grid.Column textAlign="center">
            <Segment basic>
                <Avatar round={true} name={name} />
            </Segment>
            <Link to={`/note-list/${id}/detailed-note`}>
                <Header color="grey" content={name} />
            </Link>
            <p>
                <Link to={`/note-list/${id}/edit`}>
                    <Icon name="edit outline" /> Edit note
                </Link>
            </p>
            <DeleteButton personId={id} />
        </Grid.Column>
    );
};

NoteItem.propTypes = {
    id: PropTypes.number.isRequired,
    first_name: PropTypes.string.isRequired,
    last_name: PropTypes.string.isRequired,
};

export default NoteItem;
