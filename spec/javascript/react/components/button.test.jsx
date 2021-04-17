import React from 'react';
import { render } from '@testing-library/react';

import { Button } from '@components';

describe('#render', () => {
  it('renders properly', () => {
    const { container } = render(<Button text="Login" variant="is-success" />);

    expect(container.querySelector('.field .control button.button.is-success').innerHTML).toEqual('Login');
  });
});
