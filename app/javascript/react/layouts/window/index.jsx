import React from 'react';
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

const WindowLayout = ({ children, constraintsRef, title }) => (
  <motion.div
    drag
    dragConstraints={constraintsRef}
    dragElastic={0}
    dragMomentum={false}
    style={{ width: 'min-content' }}
  >
    <Window className="window">
      <TitleBar className="title-bar">
        <TitleBartext className="title-bar-text">{title}</TitleBartext>
        <TitleBarControls className="title-bar-controls">
          <Button type="button" aria-label="Minimize" />
          <Button type="button" aria-label="Maximize" />
          <Button type="button" aria-label="Close" />
        </TitleBarControls>
      </TitleBar>
      <WindowBody className="window-body">
        {children}
      </WindowBody>
    </Window>
  </motion.div>
);

WindowLayout.propTypes = {
  children: PropTypes.element,
  constraintsRef: PropTypes.oneOfType([PropTypes.func, PropTypes.shape({
    current: PropTypes.instanceOf(Element),
  })]),
  title: PropTypes.string,
};

WindowLayout.defaultProps = {
  children: <></>,
  constraintsRef: null,
  title: '',
};

export default WindowLayout;
