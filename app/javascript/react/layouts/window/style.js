import styled, { css } from 'styled-components';

const style = {
  Window: styled.div`
    width: min-content;
  `,

  WindowBody: styled.div`
    ${(props) => props.type && css`
      display: flex;
      gap: 10px;
    `}
  `,
  TitleBar: styled.div``,
  TitleBartext: styled.div``,
  TitleBarControls: styled.div``,

  TitleBarButton: styled.button`
    cursor: pointer;

    &[aria-label=Help] {
      cursor: help;
    }
  `,

  Img: styled.img``,
};

export default style;
