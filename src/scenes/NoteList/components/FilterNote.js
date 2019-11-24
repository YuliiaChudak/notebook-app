import React, { useState } from 'react';
import { Input, Grid, Button, Select } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const options = [
    { key: 'recent', text: 'Recently updated', value: 'sort_by=updated_at&order=desc' },
    { key: 'old', text: 'Old', value: 'sort_by=updated_at&order=asc' },
    { key: 'a-z', text: 'A - Z', value: 'sort_by=last_name&order=asc' },
    { key: 'z-a', text: 'Z - A', value: 'sort_by=last_name&order=desc' },
];

const fields = [
    { key: 'first_name', text: 'First name', value: 'first_name' },
    { key: 'last_name', text: 'Last name', value: 'last_name' },
];

const FilterNote = ({ onApplyFilters }) => {
    const [order, setOrderFilter] = useState('');
    const [search, setSearchFilter] = useState('');
    const [field, setFieldFilter] = useState('first_name');

    const handleChangeOrder = (_, data) => setOrderFilter(([data.name] = data.value));
    const handleChangeSearch = (_, data) => setSearchFilter(data.value);
    const handleChangeField = (_, data) => setFieldFilter(data.value);
    const handleApply = () => {
        const operator = order ? '&' : '';
        let query = order;

        if (search) {
            query += `${operator}${field}=${search}`;
        }

        onApplyFilters(query);
    };
    const isAnyFilterActive = Boolean(order) || Boolean(search);

    const handleReset = () => {
        setOrderFilter(null);
        setSearchFilter(null);
        onApplyFilters();
    };

    return (
        <Grid divided="vertically">
            <Grid.Row columns={2}>
                <Grid.Column floated="right">
                    <Input
                        icon="search"
                        placeholder="Search..."
                        fluid
                        value={search || ''}
                        onChange={handleChangeSearch}
                    />
                </Grid.Column>
                <Grid.Column floated="left">
                    <Select
                        placeholder="Field to search"
                        options={fields}
                        value={field}
                        onChange={handleChangeField}
                        name="category"
                        selection
                        fluid
                    />
                </Grid.Column>
                <Grid.Column floated="left">
                    <Select
                        placeholder="Sort by"
                        options={options}
                        value={order}
                        onChange={handleChangeOrder}
                        name="category"
                        selection
                        fluid
                    />
                </Grid.Column>
                <Grid.Column>
                    <Button onClick={handleApply} disabled={!isAnyFilterActive}>
                        Apply
                    </Button>
                    <Button onClick={handleReset} disabled={!isAnyFilterActive}>
                        Reset
                    </Button>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    );
};

FilterNote.propTypes = {
    onApplyFilters: PropTypes.func.isRequired,
};

export default FilterNote;
