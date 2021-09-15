import styled from 'styled-components'

import FlexMixins from '../../utility/mixins/mixins-flex.styles'
import CssVars from '../../utility/variables.styles'
import { ShadowCard } from '../shadow-block/shadow-block.styles'
import { MediumDesc } from '../typography/typography.styles'

export const AboutContainer = styled.section`
  ${FlexMixins.display({ dir: 'column', ai: 'center' })}
  padding: 50px;

  & .path-maker{
    margin-top: 75px;
    margin-bottom: 75px;
  }
`

export const AboutCard = styled(ShadowCard)`
  width: 600px;
  ${FlexMixins.display({ ai: 'flex-start' })}
`

export const AboutCardNumber = styled.div`
  font-size: 36px;
  line-height: 49px;
  font-weight: bold;
  color: ${CssVars.colors.chineseRed};
`

export const AboutCardDesc = styled(MediumDesc)`
  margin-top: 8px;
  margin-left: 15px;
`