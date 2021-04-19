import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Window } from '@layouts';
import { CommandPrompt } from '@components';

const Component = ({ children, constraintsRef, title }) => (
  <Window
    constraintsRef={constraintsRef}
    title={title}
  >
    {children}
  </Window>
);

const HomePages = ({ constraintsRef }) => {
  const [windows] = useState([CommandPrompt]);

  return (
    <>
      {
        windows.map((WindowContent, i) => (
          <Component
            // eslint-disable-next-line react/no-array-index-key
            key={i}
            constraintsRef={constraintsRef}
            title="Command Prompt"
          >
            <WindowContent />
          </Component>
        ))
      }
    </>
  );
};

Component.propTypes = {
  children: PropTypes.element,
  constraintsRef: PropTypes.oneOfType([PropTypes.func, PropTypes.shape({
    current: PropTypes.instanceOf(Element),
  })]),
  title: PropTypes.string,
};

Component.defaultProps = {
  children: <></>,
  constraintsRef: null,
  title: '',
};

HomePages.propTypes = {
  constraintsRef: PropTypes.oneOfType([PropTypes.func, PropTypes.shape({
    current: PropTypes.instanceOf(Element),
  })]),
};

HomePages.defaultProps = {
  constraintsRef: null,
};

export default HomePages;
