import React from 'react';
import PropTypes from 'prop-types';

import Avatar from 'react-avatar';
import { Button, Grid, Header } from 'semantic-ui-react';

const BirthdayItem = ({ id, first_name, last_name }) => {
    const name = `${first_name} ${last_name}`;

    return (
        <Grid.Column textAlign="center">
            <Avatar round={true} name={name} />
            <Header color="blue" content={name} />
            <Button primary>Congratulate</Button>
        </Grid.Column>
    );
};

BirthdayItem.propTypes = {
    id: PropTypes.number.isRequired,
    first_name: PropTypes.string.isRequired,
    last_name: PropTypes.string.isRequired,
};

export default BirthdayItem;
