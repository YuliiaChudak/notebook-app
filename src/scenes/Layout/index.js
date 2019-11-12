import React from 'react';
import PropTypes from 'prop-types';
import { Container, Segment } from 'semantic-ui-react';

import Menu from './components/Menu';

const Layout = ({ children }) => {
    return (
        <Container>
            <Menu />
            <Segment textAlign="center" vertical basic>
                {children}
            </Segment>
        </Container>
    );
};

Layout.propTypes = {
    children: PropTypes.element.isRequired,
};

export default Layout;
