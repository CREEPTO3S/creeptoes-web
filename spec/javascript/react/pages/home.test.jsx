import React from 'react';
import { render } from '@testing-library/react';

import { Home } from '@pages';

describe('#render', () => {
  it('renders properly', () => {
    const { container } = render(<Home />);

    expect(container.querySelector('.title-bar-text').innerHTML).toEqual('Command Prompt');
    expect(container.querySelector('.window-body pre')).toBeInTheDocument();
  });
});
