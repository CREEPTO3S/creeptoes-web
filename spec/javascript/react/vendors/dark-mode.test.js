import Darkmode from 'darkmode-js';

import { DarkMode } from '@vendors';

jest.mock('darkmode-js');

describe('#init', () => {
  it('calls Darkmode', () => {
    DarkMode.init();

    expect(Darkmode).toHaveBeenCalled();
  });
});
