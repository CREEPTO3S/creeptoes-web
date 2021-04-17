import React from 'react';
import PropTypes from 'prop-types';
import '@helpers';
import style from './style';

const {
  Field,
  Label,
  Control,
  Input,
  Icon,
} = style;

const InputComponent = ({
  type,
  name,
  placeholder,
  icon,
}) => (
  <Field className="field">
    <Label className="label">{name.capitalize()}</Label>
    <Control className="control has-icons-left">
      <Input className="input" type={type} placeholder={placeholder || name.capitalize()} />
      {icon && (
        <Icon className="icon is-small is-left">
          <i className={`fas fa-${icon}`} />
        </Icon>
      )}
    </Control>
  </Field>
);

InputComponent.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  icon: PropTypes.string,
};

InputComponent.defaultProps = {
  placeholder: '',
  icon: '',
};

export default InputComponent;
