import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import style from './style';

const {
  Window,
  WindowBody,
  TitleBar,
  TitleBartext,
  TitleBarControls,
  Button,
} = style;

const WindowLayout = ({
  children,
  constraintsRef,
  title,
  handleHelp,
}) => {
  const [isShown, setIsShown] = useState(true);
  const [windowHeight, setWindowHeight] = useState(0);
  const [windowWidth, setWindowWidth] = useState(0);

  const handleClick = (e) => {
    const windows = document.querySelectorAll('#window');

    windows.forEach((window) => {
      window.classList.remove('window-active');
    });

    e.currentTarget.className = 'window-active';
  };

  const handleClose = () => setIsShown(false);

  useEffect(() => {
    const window = document.querySelector('#window');
    setWindowHeight(window.clientHeight);
    setWindowWidth(window.clientWidth);
  }, []);

  if (!isShown) {
    return null;
  }

  return (
    <motion.div
      id="window"
      drag
      dragConstraints={constraintsRef}
      dragElastic={0}
      dragMomentum={false}
      style={{
        width: 'min-content',
        position: 'absolute',
        top: `calc(50% - ${windowHeight / 2}px)`,
        left: `calc(50% - ${windowWidth / 2}px)`,
      }}
      onMouseDown={handleClick}
    >
      <Window className="window">
        <TitleBar className="title-bar">
          <TitleBartext className="title-bar-text">{title}</TitleBartext>
          <TitleBarControls className="title-bar-controls">
            <Button
              type="button"
              aria-label="Help"
              onClick={handleHelp}
            />
            <Button
              type="button"
              aria-label="Close"
              onClick={handleClose}
            />
          </TitleBarControls>
        </TitleBar>
        <WindowBody className="window-body">
          {children}
        </WindowBody>
      </Window>
    </motion.div>
  );
};

WindowLayout.propTypes = {
  children: PropTypes.element,
  constraintsRef: PropTypes.oneOfType([PropTypes.func, PropTypes.shape({
    current: PropTypes.instanceOf(Element),
  })]),
  title: PropTypes.string,
  handleHelp: PropTypes.func,
};

WindowLayout.defaultProps = {
  children: <></>,
  constraintsRef: null,
  title: '',
  handleHelp: null,
};

export default WindowLayout;
