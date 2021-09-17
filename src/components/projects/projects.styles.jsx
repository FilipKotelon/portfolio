import styled from 'styled-components';

import FlexMixins from '../../utility/mixins/mixins-flex.styles'
import OtherMixins from '../../utility/mixins/mixins-other.styles'
import CssVars from '../../utility/variables.styles'
import { CoverImage } from '../images/images.styles';
import { Slide } from '../slide/slide.styles';

export const ProjectsContainer = styled(Slide)`
  ${FlexMixins.display({})}
  position: relative;
`

export const ProjectsSectionDesc = styled.div`
  ${OtherMixins.absCenterX}
  top: 60px;
  z-index: 1;
`

export const SingleProject = styled.div`
  ${FlexMixins.display({ dir: 'column', ai: 'center', jc: 'flex-end' })}
  ${OtherMixins.rect({ w: '50%', h: '100%' })}
  padding: 60px;
  position: relative;
  cursor: pointer;

  &:hover{
    & > img{
      filter: brightness(.75);
    }
  }
`

export const SingleProjectImg = styled(CoverImage)`
  ${OtherMixins.abs({ left: '0px', top: '0px' })}
  filter: brightness(.55);
  transition: all .5s;
  z-index: -1;
`