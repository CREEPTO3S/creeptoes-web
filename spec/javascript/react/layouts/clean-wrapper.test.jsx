import React from 'react';
import { render } from '@testing-library/react';

import { CleanWrapper } from '@layouts';

describe('#render', () => {
  it('renders properly', () => {
    const { container } = render(<CleanWrapper><div id="test">HELLO</div></CleanWrapper>);

    expect(container.querySelector('div #test').innerHTML).toEqual('HELLO');
  });
});
