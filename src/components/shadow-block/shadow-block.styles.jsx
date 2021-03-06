import styled from 'styled-components'

import OtherMixins from '../../utility/mixins/mixins-other.styles'
import CssVars from '../../utility/variables.styles'

export const ShadowBlock = styled.div`
  position: relative;

  &::after{
    position: absolute;
    z-index: -1;
    content: '';
    ${OtherMixins.square('100%')}
    background: ${CssVars.colors.tanCrayola};

    @media(min-width: 993px){
      left: ${props => props.size === 'big' ? '-20px' : '-10px'};
      bottom: ${props => props.size === 'big' ? '-20px' : '-10px'};
    }

    @media(max-width: 992px){
      left: ${props => props.size === 'big' ? '-10px' : '-5px'};
      bottom: ${props => props.size === 'big' ? '-10px' : '-5px'};
    }
  }
`

export const ShadowCard = styled(ShadowBlock)`
  @media(min-width: 577px){
    padding: ${props => props.bigPadding ? '15px 40px' : '15px 23px'};
  }

  @media(max-width: 576px){
    padding: ${props => props.bigPadding ? '12px 20px' : '12px 15px'};
  }

  & > *{
    position: relative;
    z-index: 1;
  }

  &::before{
    ${OtherMixins.abs({ left: '0', top: '0' })};
    background: ${CssVars.colors.white};
    ${OtherMixins.square('100%')}
    z-index: 0;
    content: '';
  }
`