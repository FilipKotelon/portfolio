import styled from 'styled-components';

import FlexMixins from '../../utility/mixins/mixins-flex.styles'
import OtherMixins from '../../utility/mixins/mixins-other.styles'
import CssVars from '../../utility/variables.styles'
import { Slide } from '../slide/slide.styles';
import { MediumDesc } from '../typography/typography.styles';

export const ContactContainer = styled(Slide)`
  ${FlexMixins.display({ dir: 'column', center: true })}
`

export const ContactDesc = styled(MediumDesc)`
  text-align: center;
`