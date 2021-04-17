import React from 'react';
import { Container } from '@layouts';
import { Input, Button } from '@components';
import style from './style';

const {
  Columns,
  Column,
  Form,
} = style;

const Login = () => (
  <Container>
    <Columns className="columns is-flex is-vcentered is-centered">
      <Column className="column is-half">
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
      </Column>
    </Columns>
  </Container>
);

export default Login;
