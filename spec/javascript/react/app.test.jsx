import React from 'react';
import { render } from '@testing-library/react';
import Darkmode from 'darkmode-js';

import App from '@root/app';

jest.mock('darkmode-js');

describe('#render', () => {
  it('renders properly', () => {
    const { container } = render(<App />);

    expect(container).toMatchSnapshot();
  });

  it('render darkmode button', () => {
    render(<App />);

    expect(Darkmode).toHaveBeenCalled();
  });
});
