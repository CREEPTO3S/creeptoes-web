import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { AVAILABLE_COMMANDS } from '@helpers';

import { CommandPrompt } from '@components';

describe('#render', () => {
  it('renders properly', () => {
    const { container } = render(<CommandPrompt />);

    expect(container.querySelector('pre')).toBeInTheDocument();
    expect(container.querySelector('#cmd-1')).toBeInTheDocument();
  });
});

describe('#handleClick', () => {
  it('focus on input field', () => {
    const { container } = render(<CommandPrompt />);
    jest.spyOn(container.querySelector('#cmd-1'), 'focus').mockImplementation(() => {});

    fireEvent.click(container.querySelector('pre'));

    expect(container.querySelector('#cmd-1').focus).toHaveBeenCalled();
  });
});

describe('#handleOnChange', () => {
  it('adjust input width dynamically', () => {
    const { container } = render(<CommandPrompt />);

    expect(container.querySelector('#cmd-1').style.width).toEqual('1ch');

    fireEvent.change(container.querySelector('#cmd-1'), { target: { value: 'test' } });

    expect(container.querySelector('#cmd-1').style.width).toEqual('5ch');
  });
});

describe('#handleKeyDown', () => {
  describe('add new commands on enter', () => {
    it('#random', () => {
      const { container } = render(<CommandPrompt />);

      fireEvent.change(container.querySelector('#cmd-1'), { target: { value: 'test' } });
      fireEvent.keyDown(container.querySelector('#cmd-1'), { key: 'Enter' });

      expect(container.querySelector('#cmd-2')).toBeInTheDocument();
      expect(container.querySelector('pre').innerHTML).toContain("'test' is not recognized as an internal or external command,\noperable program or batch file.");
    });

    it('#clear', async () => {
      const { container } = render(<CommandPrompt />);

      fireEvent.change(container.querySelector('#cmd-1'), { target: { value: 'clear' } });
      fireEvent.keyDown(container.querySelector('#cmd-1'), { key: 'Enter' });

      await waitFor(() => {
        expect(container.querySelector('#cmd-1').value).toEqual('');
        expect(container.querySelector('#cmd-2')).not.toBeInTheDocument();
      });
    });

    it('#help', async () => {
      const { container } = render(<CommandPrompt />);
      const availableCommands = Object.entries(AVAILABLE_COMMANDS).map((cmd) => `${cmd[1].cmd} - ${cmd[1].desc}`).join('\n');

      fireEvent.change(container.querySelector('#cmd-1'), { target: { value: 'help' } });
      fireEvent.keyDown(container.querySelector('#cmd-1'), { key: 'Enter' });

      await waitFor(() => {
        expect(container.querySelector('#cmd-2')).toBeInTheDocument();
        expect(container.querySelector('pre').innerHTML).toContain(availableCommands);
      });
    });
  });

  it('does not add new commands on other keydown except enter', () => {
    const { container } = render(<CommandPrompt />);

    fireEvent.change(container.querySelector('#cmd-1'), { target: { value: 'abcdefghijklmnopqrstuvwxyz' } });
    fireEvent.keyDown(container.querySelector('#cmd-1'), { key: 'a' });

    expect(container.querySelector('#cmd-2')).not.toBeInTheDocument();
    expect(container.querySelector('pre').innerHTML).not.toContain("'abcdefghijklmnopqrstuvwxyz' is not recognized as an internal or external command,\noperable program or batch file.");
  });
});
