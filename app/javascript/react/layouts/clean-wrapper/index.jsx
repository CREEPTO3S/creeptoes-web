import React from 'react';
import PropTypes from 'prop-types';
import style from './style';

const {
  Wrapper,
} = style;

const CleanWrapperLayout = ({ children, innerRef }) => (
  <Wrapper ref={innerRef}>
    {children}
  </Wrapper>
);

CleanWrapperLayout.propTypes = {
  children: PropTypes.element,
  innerRef: PropTypes.oneOfType([PropTypes.func, PropTypes.shape({
    current: PropTypes.instanceOf(Element),
  })]),
};

CleanWrapperLayout.defaultProps = {
  children: <></>,
  innerRef: null,
};

export default CleanWrapperLayout;
