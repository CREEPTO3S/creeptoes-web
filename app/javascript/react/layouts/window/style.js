import styled from 'styled-components';

const style = {
  Window: styled.div`
    width: min-content;
  `,

  WindowBody: styled.div``,
  TitleBar: styled.div``,
  TitleBartext: styled.div``,
  TitleBarControls: styled.div``,

  Button: styled.button`
    cursor: pointer;

    &[aria-label=Help] {
      cursor: help;
    }
  `,
};

export default style;
