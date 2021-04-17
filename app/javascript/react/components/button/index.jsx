import React from 'react';
import PropTypes from 'prop-types';
import style from './style';

const {
  Field,
  Control,
  Button,
} = style;

const ButtonComponent = ({ text, variant }) => (
  <Field className="field has-text-right">
    <Control className="control">
      <Button className={`button ${variant}`}>
        {text}
      </Button>
    </Control>
  </Field>
);

ButtonComponent.propTypes = {
  text: PropTypes.string,
  variant: PropTypes.string,
};

ButtonComponent.defaultProps = {
  text: '',
  variant: '',
};

export default ButtonComponent;
