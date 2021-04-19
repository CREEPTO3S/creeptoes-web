import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { WINDOW_TYPE_ENUMS } from '@helpers';

import { Window } from '@layouts';

describe('#render', () => {
  it('renders properly', () => {
    const { container } = render(<Window title="title bar"><div id="test">HELLO</div></Window>);

    expect(container.querySelector('.title-bar-text').innerHTML).toEqual('title bar');
    expect(container.querySelector('.window-body #test').innerHTML).toEqual('HELLO');
  });

  it('renders at center', () => {
    const { container } = render(<Window title="title bar"><div id="test">HELLO</div></Window>);

    const window = container.querySelector('#window');

    expect(global.getComputedStyle(window).top).toEqual('calc(50% - 0px)');
    expect(global.getComputedStyle(window).left).toEqual('calc(50% - 0px)');
  });
});

describe('#renderIcon', () => {
  it('renders warning', () => {
    const { container } = render(<Window title="title bar" type={WINDOW_TYPE_ENUMS.warning}><div id="test">HELLO</div></Window>);

    expect(container.querySelector('.window-body img.warning')).toBeInTheDocument();
  });

  it('renders error', () => {
    const { container } = render(<Window title="title bar" type={WINDOW_TYPE_ENUMS.error}><div id="test">HELLO</div></Window>);

    expect(container.querySelector('.window-body img.error')).toBeInTheDocument();
  });

  it('renders no icon', () => {
    const { container } = render(<Window title="title bar"><div id="test">HELLO</div></Window>);

    expect(container.querySelector('.window-body img.warning')).not.toBeInTheDocument();
    expect(container.querySelector('.window-body img.error')).not.toBeInTheDocument();
  });
});

describe('#handlePointerDown', () => {
  it('set z-index 9999 on active window', () => {
    const { container } = render(
      <>
        <Window title="title bar"><div id="test">HELLO</div></Window>
        <Window title="title bar"><div id="test">HELLO</div></Window>
      </>,
    );

    const windows = container.querySelectorAll('#window');

    expect(container.querySelector('.window-active')).not.toBeInTheDocument();

    fireEvent.pointerDown(windows[0]);

    expect(windows[0].classList.contains('window-active')).toEqual(true);
    expect(windows[1].classList.contains('window-active')).toEqual(false);

    fireEvent.pointerDown(windows[1]);

    expect(windows[0].classList.contains('window-active')).toEqual(false);
    expect(windows[1].classList.contains('window-active')).toEqual(true);
  });
});

describe('#handleClose', () => {
  it('close window', () => {
    const { container } = render(<Window title="title bar"><div id="test">HELLO</div></Window>);

    expect(container.querySelector('.title-bar-text')).toBeInTheDocument();
    expect(container.querySelector('.window-body #test')).toBeInTheDocument();

    fireEvent.click(container.querySelector('button[aria-label="Close"]'));

    expect(container.querySelector('.title-bar-text')).not.toBeInTheDocument();
    expect(container.querySelector('.window-body #test')).not.toBeInTheDocument();
  });
});

describe('#handleHelp', () => {
  it('calls handleHelp', () => {
    const handleHelp = jest.fn();
    const { container } = render(<Window title="title bar" handleHelp={handleHelp}><div id="test">HELLO</div></Window>);

    fireEvent.click(container.querySelector('button[aria-label="Help"]'));

    expect(handleHelp).toHaveBeenCalled();
  });

  it('has no handleHelp', () => {
    const { container } = render(<Window title="title bar"><div id="test">HELLO</div></Window>);

    expect(container.querySelector('button[aria-label="Help"]')).not.toBeInTheDocument();
  });
});
