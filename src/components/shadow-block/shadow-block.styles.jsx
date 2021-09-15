import styled from 'styled-components'

import OtherMixins from '../../utility/mixins/mixins-other.styles'
import CssVars from '../../utility/variables.styles'

export const ShadowBlock = styled.div`
  position: relative;

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

export const ShadowCard = styled(ShadowBlock)`
  background: ${CssVars.colors.white};
  padding: ${props => props.bigPadding ? '15px 40px' : '15px 23px'};
`