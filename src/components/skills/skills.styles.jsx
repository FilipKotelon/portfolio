import styled from 'styled-components';

import FlexMixins from '../../utility/mixins/mixins-flex.styles'
import OtherMixins from '../../utility/mixins/mixins-other.styles'
import CssVars from '../../utility/variables.styles'

export const SkillsContainer = styled.section`
  ${FlexMixins.display({ dir: 'column', ai: 'center' })}
  background: ${CssVars.colors.white};
  padding: 50px 50px 100px;

  @media(max-width: 768px){
    padding: 30px 30px 60px;
  }

  @media(max-width: 576px){
    padding: 30px 15px 60px;
  }
`

export const SkillsTitleCon = styled.div`
  ${FlexMixins.display({ dir: 'column', ai: 'center' })}
  margin-bottom: 60px;
  text-align: center;

  @media(max-width: 768px){
    margin-bottom: 30px;
  }
`

export const SkillsTitleInfo = styled.div`
  margin-top: 10px;
`

export const SkillsSection = styled.div`
  ${FlexMixins.display({ center: 'true', wrap: 'wrap' })}

  &:not(:last-child){
    margin-bottom: 60px;

    @media(max-width: 768px){
      margin-bottom: 30px;
    }
  }
`