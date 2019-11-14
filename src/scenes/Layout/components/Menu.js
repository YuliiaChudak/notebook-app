import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

const Navigation = () => {
    const { pathname } = useLocation();

    return (
        <Menu secondary>
            <Menu.Item as="span" active={pathname === '/'}>
                <Link to="/">Birthday list</Link>
            </Menu.Item>
            <Menu.Item as="span" active={pathname === '/note-list'}>
                <Link to="/note-list">Note list</Link>
            </Menu.Item>
        </Menu>
    );
};

export default Navigation;
