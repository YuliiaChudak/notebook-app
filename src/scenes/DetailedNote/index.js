import React, { useContext } from 'react';
import { DataContext } from '../../context/DataProvider';
import { useNoteByPersonIdAPI } from '../../hooks/use-personsAPI';
import PropTypes from 'prop-types';
import { Card, Header, Icon, Loader, Segment } from 'semantic-ui-react';
import Avatar from 'react-avatar';
import Property from './components/Property';

const DetailedNote = ({ match }) => {
    const id = match.params.id;
    const { loading, note } = useNoteByPersonIdAPI(id);
    const {
        role_id,
        first_name,
        last_name,
        patronymic,
        birthday,
        occupation,
        phone,
        country,
        city,
        address,
        is_studying,
    } = note;
    const { getRoleNameById } = useContext(DataContext);
    const name = `${first_name} ${last_name}`;
    const role = getRoleNameById(role_id);
    return (
        <>
            {loading && <Loader active inline="centered" size="large" />}
            <Header color="blue" as="h3" icon="address book outline" textAlign="center" content="Detailed note" />
            <Card centered={true}>
                <Segment textAlign="center" basic>
                    <Avatar round={true} name={name} />
                </Segment>
                <Card.Content>
                    <Card.Header textAlign="center">{name}</Card.Header>
                    <Card.Description>
                        <Property name="Patronymic" value={patronymic} />
                        <Property name="Birthday" value={birthday} />
                        <Property name="Occupation" value={occupation} />
                        <Property name="Phone" value={phone} />
                        <Property name="Is person a student?" value={is_studying} />
                        <Property name="Country" value={country} />
                        <Property name="City" value={city} />
                        <Property name="Address" value={address} />
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <p>
                        <Icon name="user" />
                        {role}
                    </p>
                </Card.Content>
            </Card>
        </>
    );
};

DetailedNote.propTypes = {
    match: PropTypes.shape({
        params: PropTypes.shape({
            id: PropTypes.string,
        }),
    }).isRequired,
};

export default DetailedNote;
