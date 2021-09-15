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
`

export const BrownButton = styled(RectButton)`
  background-color: ${CssVars.colors.darkLava};
  color: ${CssVars.colors.white};

  &:hover{
    background-color: ${CssVars.colors.tanCrayola};
  }
`