import styled from 'styled-components'

import OtherMixins from '../../utility/mixins/mixins-other.styles'
import CssVars from '../../utility/variables.styles'

export const ShadowBlock = styled.div`
  position: relative;
  z-index: 1;

  &::after{
    position: absolute;
    left: ${props => props.size === 'big' ? '-20px' : '-10px'};
    bottom: ${props => props.size === 'big' ? '-20px' : '-10px'};
    z-index: -1;
    content: '';
    ${OtherMixins.rect({ w: '100%', h: '100%' })}
    background: ${CssVars.colors.tanCrayola};
  }
`