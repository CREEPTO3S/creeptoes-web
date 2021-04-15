import React from 'react';
import { render } from '@testing-library/react';

import FourOFour from '@pages/404';

describe('#render', () => {
  it('renders properly', () => {
    const { container } = render(<FourOFour />);

    expect(container).toMatchSnapshot();
  });
});
