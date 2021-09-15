import styled from 'styled-components';

import FlexMixins from '../../utility/mixins/mixins-flex.styles'
import OtherMixins from '../../utility/mixins/mixins-other.styles'
import CssVars from '../../utility/variables.styles'
import { Slide } from '../slide/slide.styles';

export const HeaderContainer = styled(Slide)`
  ${FlexMixins.display({ ai: 'center', jc: 'space-between' })}
  max-width: 1600px;
  margin: 0 auto;
`

export const HeaderDesc = styled.div`
  
`