import React from 'react';
import { render } from '@testing-library/react';

import { Window } from '@layouts';

describe('#render', () => {
  it('renders properly', () => {
    const { container } = render(<Window title="title bar"><div id="test">HELLO</div></Window>);

    expect(container.querySelector('.title-bar-text').innerHTML).toEqual('title bar');
    expect(container.querySelector('.window-body #test').innerHTML).toEqual('HELLO');
  });
});
