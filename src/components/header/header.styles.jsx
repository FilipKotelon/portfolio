import styled from 'styled-components';

import FlexMixins from '../../utility/mixins/mixins-flex.styles'
import OtherMixins from '../../utility/mixins/mixins-other.styles'
import CssVars from '../../utility/variables.styles'
import { ShadowBlock } from '../shadow-block/shadow-block.styles';
import { Slide } from '../slide/slide.styles';

export const HeaderContainer = styled(Slide)`
  ${FlexMixins.display({ ai: 'center', jc: 'space-between' })}
  max-width: 1440px;
  margin: 0 auto;
`

export const HeaderDesc = styled.div`
  ${FlexMixins.display({ dir: 'column', ai: 'flex-start', jc: 'center' })}
  width: 50%;
  padding-right: 60px;

  & .header-title{
    margin-bottom: 40px;
  }

  & .header-desc{
    margin-bottom: 100px;
  }
`

export const HeaderImageContainer = styled.div`
  ${FlexMixins.display({ center: true })}
  height: 100%;
`

export const HeaderImage = styled(ShadowBlock)`
  ${OtherMixins.rect({ w: '540px', h: '830px' })}
`