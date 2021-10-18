import styled from 'styled-components';

import FlexMixins from '../../utility/mixins/mixins-flex.styles'
import OtherMixins from '../../utility/mixins/mixins-other.styles'
import CssVars from '../../utility/variables.styles'
import { Slide } from '../slide/slide.styles';
import { MediumDesc } from '../typography/typography.styles';

export const ContactContainer = styled(Slide)`
  ${FlexMixins.display({ dir: 'column', center: true })}
  padding: 30px;

  @media(min-width: 577px){
    ${OtherMixins.mNotLast({ margin: '75px', dir: 'bottom' })}
  }

  @media(max-width: 576px){
    ${OtherMixins.mNotLast({ margin: '45px', dir: 'bottom' })}
  }

  & a{
    color: ${CssVars.colors.tanCrayola};
    font-size: 24px;
  
    @media(max-width: 576px){
      font-size: 18px;
    }
  }
`

export const ContactDesc = styled(MediumDesc)`
  text-align: center;
`

export const ContactInfo = styled.div`
  ${FlexMixins.display({ center: true })}

  @media(min-width: 577px){
    ${OtherMixins.mNotLast({ margin: '30px', dir: 'right' })}
  }
  
  @media(max-width: 576px){
    flex-direction: column;
    ${OtherMixins.mNotLast({ margin: '18px', dir: 'bottom' })}
  }
`