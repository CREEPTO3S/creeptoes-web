import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

const DraggableLayout = ({ children, constraintsRef }) => (
  <motion.div
    drag
    dragConstraints={constraintsRef}
    whileHover={{ scale: 1.1 }}
    dragElastic={0}
    dragMomentum={false}
  >
    {children}
  </motion.div>
);

DraggableLayout.propTypes = {
  children: PropTypes.element,
  constraintsRef: PropTypes.oneOfType([PropTypes.func, PropTypes.shape({
    current: PropTypes.instanceOf(Element),
  })]),
};

DraggableLayout.defaultProps = {
  children: <></>,
  constraintsRef: null,
};

export default DraggableLayout;
