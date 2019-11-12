import React, { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useRoles } from '../hooks/use-roles';

const Context = createContext({
    roles: [],
    getRoleNameById: () => {},
});

const DataProvider = ({ children }) => {
    const [roles, setRoles] = useState([]);
    const { roles: collection } = useRoles();

    useEffect(() => {
        setRoles(collection);
    }, [collection]);

    const getRoleNameById = id => {
        const result = collection.find(item => item.id === id);

        return result ? result.name : 'Unknown';
    };

    return <Context.Provider value={{ roles, getRoleNameById }}>{children}</Context.Provider>;
};

DataProvider.propTypes = {
    children: PropTypes.element.isRequired,
};

export { Context as DataContext };

export default DataProvider;
