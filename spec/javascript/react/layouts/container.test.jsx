import React from 'react';
import { render } from '@testing-library/react';

import { Container } from '@layouts';

describe('#render', () => {
  it('renders properly', () => {
    const { container } = render(<Container><div id="test">HELLO</div></Container>);

    expect(container.querySelector('div #test').innerHTML).toEqual('HELLO');
  });
});
