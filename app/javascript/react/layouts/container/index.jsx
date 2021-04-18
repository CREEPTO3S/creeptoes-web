import React from 'react';
import PropTypes from 'prop-types';
import style from './style';

const {
  Container,
} = style;

const ContainerLayout = ({ children, innerRef }) => (
  <Container ref={innerRef}>
    {children}
  </Container>
);

ContainerLayout.propTypes = {
  children: PropTypes.element,
  innerRef: PropTypes.oneOfType([PropTypes.func, PropTypes.shape({
    current: PropTypes.instanceOf(Element),
  })]),
};

ContainerLayout.defaultProps = {
  children: <></>,
  innerRef: null,
};

export default ContainerLayout;
