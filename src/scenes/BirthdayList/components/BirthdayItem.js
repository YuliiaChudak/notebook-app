import React from 'react';
import PropTypes from 'prop-types';

import Avatar from 'react-avatar';
import { Button, Grid, Header } from 'semantic-ui-react';
import { useCongratulationAPI } from '../../../hooks/use-congratulationAPI';

const BirthdayItem = ({ id, first_name, last_name }) => {
    const name = `${first_name} ${last_name}`;

    const { sending, sendCongratulation } = useCongratulationAPI();
    return (
        <Grid.Column textAlign="center">
            <Avatar round={true} name={name} />
            <Header color="blue" content={name} />
            <Button onClick={() => sendCongratulation(id, name)} primary>
                {sending ? 'is Sending' : 'Congratulate'}
            </Button>
        </Grid.Column>
    );
};

BirthdayItem.propTypes = {
    id: PropTypes.number.isRequired,
    first_name: PropTypes.string.isRequired,
    last_name: PropTypes.string.isRequired,
};

export default BirthdayItem;
