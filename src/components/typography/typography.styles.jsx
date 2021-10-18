import styled from 'styled-components'
import OtherMixins from '../../utility/mixins/mixins-other.styles'

import CssVars from '../../utility/variables.styles'
import { ShadowBlock } from '../shadow-block/shadow-block.styles'

export const BigTitle = styled.h1`
  font-size: 96px;
  line-height: 131px;

  @media(max-width: 1600px){
    font-size: 64px;
    line-height: 96px;
  }

  @media(max-width: 992px){
    font-size: 48px;
    line-height: 64px;
  }

  @media(max-width: 768px){
    font-size: 36px;
    line-height: 48px;
  }
`

export const SectionTitle = styled.h2`
  font-size: 64px;

  @media(max-width: 1500px){
    font-size: 54px;
  }

  @media(max-width: 1200px){
    font-size: 48px;
  }

  @media(max-width: 768px){
    font-size: 36px;
  }

  @media(max-width: 576px){
    font-size: 28px;
  }
`

export const MediumTitle = styled.h3`
  font-size: 36px;
`

export const BigDesc = styled.p`
  font-size: 32px;
  line-height: 48px;

  @media(max-width: 1600px){
    font-size: 24px;
    line-height: 33px;
  }

  @media(max-width: 992px){
    font-size: 18px;
    line-height: 27px;
  }
`

export const MediumDesc = styled.p`
  font-size: 24px;
  line-height: 33px;

  @media(max-width: 1500px){
    font-size: 18px;
    line-height: 27px;
  }
`

export const SmallDesc = styled.p`
  font-size: 18px;
  line-height: 27px;
`

export const Clickable = styled.span`
  color: ${CssVars.colors.tanCrayola};
  cursor: pointer;
  ${OtherMixins.hoverUnderline({h: '1px', top: 'calc(100% - 1px)', bg: CssVars.colors.tanCrayola, dist: '4px'})}
`

export const Tag = styled(ShadowBlock)`
  background: ${CssVars.colors.white};
  font-size: 18px;
  line-height: 24px;
  padding: 7px 8px;
  white-space: nowrap;

  &::after{
    left: -4px;
    bottom: -4px;
  }
`