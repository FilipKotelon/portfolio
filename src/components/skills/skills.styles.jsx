import styled from 'styled-components';

import FlexMixins from '../../utility/mixins/mixins-flex.styles'
import OtherMixins from '../../utility/mixins/mixins-other.styles'
import CssVars from '../../utility/variables.styles'
import { Slide } from '../slide/slide.styles';
import { MediumDesc, SectionTitle } from '../typography/typography.styles';

export const SkillsContainer = styled(Slide)`
  ${FlexMixins.display({ dir: 'column', ai: 'flex-start' })}
  background: ${CssVars.colors.white};
  padding: 50px 50px 100px;
`

export const SkillsTitle = styled(SectionTitle)`
  margin-bottom: 60px;
`

export const SkillsChart = styled.div`
  ${FlexMixins.display({ ai: 'flex-end' })}
  ${OtherMixins.square('100%')}
  position: relative;
  border-bottom: 6px solid ${CssVars.colors.darkLava};
  border-left: 6px solid ${CssVars.colors.darkLava};
`

export const YAxisDesc = styled.div`
  ${FlexMixins.display({ dir: 'column' })}
  ${OtherMixins.abs({ right: 'calc(100% + 10px)', top: '0' })}
  height: 100%;
  font-size: 14px;
  text-align: right;
`

export const YAxisDescItem = styled.div`
  height: 25%;
`

export const SkillBarsContainer = styled.div`
  ${FlexMixins.display({ jc: 'space-between', ai: 'flex-end' })}
  ${OtherMixins.square('100%')}
  padding: 4px 30px 0;
`

export const SkillBar = styled.div`
  position: relative;
  cursor: pointer;
  transition: all .5s ease-in-out ${({ delay }) => delay / 1000}s;
  height: ${ ({ expanded, level }) => expanded ? level : 0 }%;
  width: 30px;

  ${
    ({ level }) => {
      if(level >= 75){
        return `background: ${CssVars.colors.copperRed};`
      } else if(level >= 50){
        return `background: ${CssVars.colors.tanCrayola};`
      } else {
        return `background: ${CssVars.colors.deepChampagne};`
      }
    }
  }

  ${ ({ level }) => level > 100 ? `z-index: 9999;` : '' }

  ${
    ({ expanded }) => expanded ? `
      &:hover{
        & div{
          visibility: visible;
          opacity: 1;
        }
      }
    ` : ''
  }
`

export const SkillBarTitle = styled(MediumDesc)`
  ${OtherMixins.absCenterX}
  top: calc(100% + 30px);
  text-align: center;
  white-space: nowrap;
`

export const SkillBarDesc = styled.div`
  ${OtherMixins.absCenterY}
  ${ ({ side }) => side === 'left' ? 'right' : 'left' }: calc(100% + 12px);
  box-shadow: ${CssVars.shadows.default};
  padding: 14px 16px;
  max-width: 540px;
  width: max-content;
  opacity: 0;
  visibility: hidden;
  z-index: 1;
  transition: ${CssVars.transition};
  cursor: initial;
  background: ${CssVars.colors.white};
`