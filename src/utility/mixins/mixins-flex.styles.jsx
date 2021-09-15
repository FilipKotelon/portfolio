import { css } from 'styled-components';

class FlexMixins {
  static display = ({ai, jc, dir, wrap, center}) => css`
    display: flex;
    ${
      center  ? `
        align-items: center;
        justify-content: center;
      ` : ``
    }
    ${ai      ? `align-items: ${ai};`     : ``}
    ${jc      ? `justify-content: ${jc};` : ``}
    ${dir     ? `flex-direction: ${dir};` : ``}
    ${wrap    ? `flex-wrap: ${wrap};`     : ``}
  `
  
  static flexRow = ({perRow, gutter}) => css`
    ${this.display({ wrap: 'wrap' })}

    & > *{
      flex-grow: 0;
      flex-shrink: 0;
      flex-basis: calc(100% / ${perRow} - ${perRow - 1} / ${perRow} * ${gutter});
      margin-bottom: ${gutter};

      &:not(:nth-child(${perRow}n)){
          margin-right: ${gutter};
      }
    }
  `
}

export default FlexMixins;