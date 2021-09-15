import styled from 'styled-components';

import FlexMixins from '../../utility/mixins/mixins-flex.styles'
import OtherMixins from '../../utility/mixins/mixins-other.styles'
import CssVars from '../../utility/variables.styles'
import { Slide } from '../slide/slide.styles';

export const SkillsContainer = styled(Slide)`
  background: ${CssVars.colors.white};
  padding: 50px;
`