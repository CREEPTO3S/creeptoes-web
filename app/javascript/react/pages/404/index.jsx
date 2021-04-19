import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Window } from '@layouts';
import { WINDOW_TYPE_ENUMS } from '@helpers';
import style from './style';

const { Text } = style;

const FourOFour = ({ constraintsRef, setWindows }) => {
  const handleHelp = () => setWindows((prevState) => ([...prevState, 'x']));

  return (
    <Window
      constraintsRef={constraintsRef}
      title="Error"
      type={WINDOW_TYPE_ENUMS.error}
      handleHelp={handleHelp}
    >
      <Text>404 Not Found.</Text>
    </Window>
  );
};

const FourOFourPages = ({ constraintsRef }) => {
  const [windows, setWindows] = useState(['x']);

  return (
    <>
      {
        windows.map((_, i) => (
          <FourOFour
            // eslint-disable-next-line react/no-array-index-key
            key={i}
            constraintsRef={constraintsRef}
            setWindows={setWindows}
          />
        ))
      }
    </>
  );
};

FourOFour.propTypes = {
  constraintsRef: PropTypes.oneOfType([PropTypes.func, PropTypes.shape({
    current: PropTypes.instanceOf(Element),
  })]),
  setWindows: PropTypes.func.isRequired,
};

FourOFour.defaultProps = {
  constraintsRef: null,
};

FourOFourPages.propTypes = {
  constraintsRef: PropTypes.oneOfType([PropTypes.func, PropTypes.shape({
    current: PropTypes.instanceOf(Element),
  })]),
};

FourOFourPages.defaultProps = {
  constraintsRef: null,
};

export default FourOFourPages;
