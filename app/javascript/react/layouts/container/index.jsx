import React from 'react';
import PropTypes from 'prop-types';
import style from './style';

const {
  Container,
} = style;

const ContainerLayout = ({ children }) => (
  <Container className="container">
    {children}
  </Container>
);

ContainerLayout.propTypes = {
  children: PropTypes.element,
};

ContainerLayout.defaultProps = {
  children: <></>,
};

export default ContainerLayout;
