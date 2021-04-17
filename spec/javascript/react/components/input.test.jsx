import React from 'react';
import { render } from '@testing-library/react';

import { Input } from '@components';

describe('#render', () => {
  it('renders properly', () => {
    const { container } = render(<Input type="email" name="email" placeholder="placeholder" icon="envelope" />);

    expect(container.querySelector('input[placeholder="placeholder"]')).toBeInTheDocument();
    expect(container.querySelector('span.icon i.fas.fa-envelope')).toBeInTheDocument();
  });

  it('renders properly when no placeholder and icon props', () => {
    const { container } = render(<Input type="email" name="email" />);

    expect(container.querySelector('input[placeholder="Email"]')).toBeInTheDocument();
    expect(container.querySelector('span.icon')).not.toBeInTheDocument();
  });
});
