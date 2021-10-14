import styled from 'styled-components';

import FlexMixins from '../../utility/mixins/mixins-flex.styles'
import OtherMixins from '../../utility/mixins/mixins-other.styles'
import CssVars from '../../utility/variables.styles'

export const SkillsContainer = styled.section`
  ${FlexMixins.display({ dir: 'column', ai: 'center' })}
  background: ${CssVars.colors.white};
  padding: 50px 50px 100px;
`

export const SkillsTitleCon = styled.div`
  ${FlexMixins.display({ dir: 'column', ai: 'center' })}
  margin-bottom: 60px;
`

export const SkillsTitleInfo = styled.div`
  margin-top: 10px;
`

export const SkillsSection = styled.div`
  ${FlexMixins.display({ center: 'true', wrap: 'wrap' })}

  &:not(:last-child){
    margin-bottom: 60px;
  }
`