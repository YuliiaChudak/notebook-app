import { useCallback } from 'react';

export const useNormalizedRoles = data => {
    const normalizeRolesForDropdown = useCallback(
        roles =>
            roles.map(role => ({
                key: role.id,
                value: role.id,
                text: role.name,
            })),
        [data],
    );

    return {
        normalizeRolesForDropdown,
    };
};
