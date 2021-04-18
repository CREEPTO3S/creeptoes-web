import React from 'react';
import PropTypes from 'prop-types';
import { Window } from '@layouts';
import style from './style';

const { Text } = style;

const FourOFourPages = ({ constraintsRef }) => (
  <Window constraintsRef={constraintsRef} title="Error">
    <Text>404 Not Found.</Text>
  </Window>
);

FourOFourPages.propTypes = {
  constraintsRef: PropTypes.oneOfType([PropTypes.func, PropTypes.shape({
    current: PropTypes.instanceOf(Element),
  })]),
};

FourOFourPages.defaultProps = {
  constraintsRef: null,
};

export default FourOFourPages;
