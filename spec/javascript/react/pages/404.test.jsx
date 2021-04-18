import React from 'react';
import { render } from '@testing-library/react';

import { FourOFour } from '@pages';

describe('#render', () => {
  it('renders properly', () => {
    const { container } = render(<FourOFour />);

    expect(container.querySelector('.title-bar-text').innerHTML).toEqual('Error');
    expect(container.querySelector('.window-body p').innerHTML).toEqual('404 Not Found.');
  });
});
