import React from 'react';
import { render } from '@testing-library/react';

import { Login } from '@pages';

describe('#render', () => {
  it('renders properly', () => {
    const { container } = render(<Login />);

    expect(container.querySelectorAll('.box input').length).toEqual(2);
    expect(container.querySelector('input[placeholder="Email"]')).toBeInTheDocument();
    expect(container.querySelector('input[placeholder="Password"]')).toBeInTheDocument();
    expect(container.querySelector('button').innerHTML).toEqual('Login');
  });
});
