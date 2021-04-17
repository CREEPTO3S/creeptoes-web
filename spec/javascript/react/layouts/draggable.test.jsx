import React from 'react';
import { render } from '@testing-library/react';

import { Draggable } from '@layouts';

describe('#render', () => {
  it('renders properly', () => {
    const { container } = render(<Draggable><div id="test">HELLO</div></Draggable>);

    expect(container.querySelector('div #test').innerHTML).toEqual('HELLO');
  });
});
