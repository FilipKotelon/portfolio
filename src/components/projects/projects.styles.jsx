import styled from 'styled-components';

import FlexMixins from '../../utility/mixins/mixins-flex.styles'
import OtherMixins from '../../utility/mixins/mixins-other.styles'
import CssVars from '../../utility/variables.styles'
import { CoverImage } from '../images/images.styles';
import { ShadowCard } from '../shadow-block/shadow-block.styles';
import { Slide } from '../slide/slide.styles';

export const ProjectsContainer = styled(Slide)`
  ${FlexMixins.display({})}
  position: relative;
`

export const ProjectsSectionDesc = styled.div`
  ${OtherMixins.absCenterX}
  top: 60px;
  z-index: 200;
  ${OtherMixins.mNotLast({ margin: '24px', dir: 'bottom' })}
`

export const ProjectsSectionDescCard = styled(ShadowCard)`
  width: 520px;
  text-align: center;
`

export const SingleProject = styled.div`
  ${FlexMixins.display({ dir: 'column', ai: 'center', jc: 'flex-end' })}
  ${OtherMixins.rect({ w: '50%', h: '100%' })}
  padding: 60px;
  position: relative;
  overflow: hidden;

  ${({ comingSoon }) => comingSoon ? `` : `
    &:hover{
      & > img{
        filter: brightness(.85);
        transform: translate(-50%, -50%) scale(1.05);
      }
    }
  `}
`

export const SingleProjectImg = styled(CoverImage)`
  ${OtherMixins.absCenter}
  filter: brightness(.65);
  transform: translate(-50%, -50%) scale(1.01);
  transition: all .5s;
  z-index: 0;
  cursor: pointer;
`

export const SingleProjectDesc = styled(ShadowCard)`
  position: relative;
  z-index: 1;
  max-width: 420px;
  text-align: center;

  &:not(:last-child){
    margin-bottom: 18px;
  }
`

export const SingleProjectTags = styled.div`
  ${FlexMixins.display({ ai: 'center', wrap: 'wrap' })}
  ${OtherMixins.mNotLast({ margin: '14px', dir: 'right' })}
  margin-top: 12px;
  position: relative;
  z-index: 1;
`

export const SingleProjectComingSoon = styled.div`
  ${OtherMixins.abs({ left: '0', top: '0' })}
  ${OtherMixins.square('100%')}
  ${FlexMixins.display({ center: true })}
  z-index: 100;
  background: rgba(0, 0, 0, .75);
  color: ${CssVars.colors.white};
`