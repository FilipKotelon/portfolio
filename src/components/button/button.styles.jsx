import styled from 'styled-components';

import FlexMixins from '../../utility/mixins/mixins-flex.styles'
import CssVars from '../../utility/variables.styles'

export const RectButton = styled.button`
  ${FlexMixins.display({ center: true })}
  height: 60px;
  padding: 0 60px;
  font-family: ${CssVars.fonts.main};
  font-size: 32px;
  line-height: 48px;
  border: none;
  cursor: pointer;
  transition: ${CssVars.transition};

  @media(max-width: 1600px){
    font-size: 24px;
    line-height: 36px;
    height: 54px;
    padding: 0 45px;
  }

  @media(max-width: 992px){
    font-size: 18px;
    line-height: 27px;
    height: 42px;
    padding: 0 30px;
  }
`

export const BrownButton = styled(RectButton)`
  background-color: ${CssVars.colors.darkLava};
  color: ${CssVars.colors.white};

  @media(hover: hover){
    &:hover{
      background-color: ${CssVars.colors.tanCrayola};
    }
  }
`