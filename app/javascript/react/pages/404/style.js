import styled, { keyframes } from 'styled-components';

const scales = keyframes`
  from { transform: scale(0.98) }
  to{ transform: scale(1) }
`;

const rotatePao = keyframes`
  0% { transform: rotate(0deg) }
  50% , 60%{ transform: rotate(-20deg) }
  100%{  transform: rotate(0deg) }
`;

const rotateOlhos = keyframes`
  0%{
    transform: rotateX(0deg);
  }
   100%{
    transform: rotateX(30deg);
  }
`;

const fadeOut = keyframes`
  0%{
    opacity: 0; 
  }
`;

const dash = keyframes`
  0%, 30%{
    fill: 4B4B62;
    stroke-dashoffset: 0;
  }

  80%,100%{
    fill: transparent;
    stroke-dashoffset: -200;
  }
`;

const style = {
  Fundo: styled.path`
    animation: ${scales} 3s alternate infinite;
    transform-origin: center;
  `,

  PaoBaixo: styled.g`
    animation: ${rotatePao} 14s cubic-bezier(.1,.49,.41,.97) infinite;
    transform-origin: center;
  `,

  PaoCima: styled.g`
    animation: ${rotatePao} 7s 1s cubic-bezier(.1,.49,.41,.97)  infinite;
    transform-origin: center;
  `,

  Olhos: styled.g`
    animation: ${rotateOlhos} 2s alternate infinite;
    transform-origin: center;
  `,

  LeftSparks: styled.g`
    animation: ${fadeOut} 4s alternate infinite;
    transform-origin: 150px 156px;
  `,

  RightSparks: styled.g`
    animation: ${fadeOut} 4s alternate infinite;
    transform-origin: 310px 150px;
  `,

  Main: styled.div`
    min-height: 600px;
    margin: 0px auto;
    width: auto;
    max-width: 460px;
    display: flex;
    align-items: center;
    justify-content: center;
  `,

  Path: styled.path`
    stroke-dasharray: 300;
    stroke-dashoffset: 300;
    animation: ${dash} 4s   alternate infinite;
  `,
};

export default style;
