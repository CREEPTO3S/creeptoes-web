import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import { FourOFour } from '@pages';

describe('#render', () => {
  it('renders properly', () => {
    const { container } = render(<FourOFour />);

    expect(container.querySelector('.title-bar-text').innerHTML).toEqual('Error');
    expect(container.querySelector('.window-body img.error')).toBeInTheDocument();
    expect(container.querySelector('.window-body p').innerHTML).toEqual('404 Not Found.');
  });
});

describe('#handleHelp', () => {
  it('renders new 404 window', () => {
    const { container } = render(<FourOFour />);

    expect(container.querySelectorAll('.window-body p').length).toEqual(1);

    fireEvent.click(container.querySelector('button[aria-label="Help"]'));
    fireEvent.click(container.querySelector('button[aria-label="Help"]'));

    expect(container.querySelectorAll('.window-body p').length).toEqual(3);
  });
});
