import { useState, useEffect } from 'react';
import { getRolesRequest } from "../utils/server";

export const useRoles = () => {
    const [roles, setRoles] = useState([]);
    useEffect(() => {
        const fetchRoles = async () => {
            const response = await getRolesRequest();
            console.log(response)
            setRoles(response.data);
        };

        fetchRoles();
    }, []);

    return {
        roles,
    };
};
