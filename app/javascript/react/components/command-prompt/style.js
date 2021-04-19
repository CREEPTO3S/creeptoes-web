import styled from 'styled-components';

const style = {
  Pre: styled.pre``,
  Input: styled.input`
    background-color: #000;
    color: silver;
    font-size: 1rem;
    font-family: 'Perfect DOS VGA 437 Win';
    border: 0;  

    &:focus-visible {
      outline: 0;
    }
  `,
  Command: styled.div``,
};

export default style;
