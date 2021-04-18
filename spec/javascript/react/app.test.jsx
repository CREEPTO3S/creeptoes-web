import React from 'react';
import { render } from '@testing-library/react';

import App from '@root/app';

describe('#render', () => {
  it('renders properly', () => {
    const { container } = render(<App />);

    expect(container).toMatchSnapshot();
  });
});
