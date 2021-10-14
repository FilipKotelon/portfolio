import styled from 'styled-components';

import FlexMixins from '../../../utility/mixins/mixins-flex.styles'
import OtherMixins from '../../../utility/mixins/mixins-other.styles'
import CssVars from '../../../utility/variables.styles'

export const SkillItemCon = styled.div`
  ${OtherMixins.square('260px')}
  ${FlexMixins.display({ center: true })}
  position: relative;
  margin: 0 20px 40px;

  & .transition-container{
    position: relative;
    z-index: 100;
  }

  & .lazy-load-image-background{
    display: flex !important;
    justify-content: center;
    align-content: center;
  }

  &:hover{
    & .skill-item-bg{
      transform: translate(-50%, -50%) scale(1.1);
    }
  }
`

export const SkillItemBg = styled.div`
  ${OtherMixins.absCenter}
  ${OtherMixins.circle('100%')}
  background-color: ${CssVars.colors.creamWhite};
  z-index: 0;
  cursor: pointer;
  transition: ${CssVars.transition};
`

export const SkillItemImage = styled.img`
  ${OtherMixins.square('60%')}
  object-fit: contain;
  position: relative;
  z-index: 1;
  cursor: pointer;
`