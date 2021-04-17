import React from 'react';
import PropTypes from 'prop-types';
import { Container, Draggable } from '@layouts';
import { Input, Button } from '@components';
import style from './style';

const {
  Columns,
  Column,
  Form,
} = style;

const LoginPage = ({ constraintsRef }) => (
  <Container>
    <Columns className="columns is-flex is-vcentered is-centered">
      <Column className="column is-half">
        <Draggable constraintsRef={constraintsRef}>
          <Form className="box">
            <Input
              type="email"
              name="email"
              icon="envelope"
            />
            <Input
              type="password"
              name="password"
              icon="lock"
            />
            <Button text="Login" variant="is-success" />
          </Form>
        </Draggable>
      </Column>
    </Columns>
  </Container>
);

LoginPage.propTypes = {
  constraintsRef: PropTypes.oneOfType([PropTypes.func, PropTypes.shape({
    current: PropTypes.instanceOf(Element),
  })]),
};

LoginPage.defaultProps = {
  constraintsRef: null,
};

export default LoginPage;
