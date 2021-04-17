import React from 'react';
import { render } from '@testing-library/react';

import { FourOFour } from '@pages';

describe('#render', () => {
  it('renders properly', () => {
    const { container } = render(<FourOFour />);

    expect(container).toMatchSnapshot();
  });
});
