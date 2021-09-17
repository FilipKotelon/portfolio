import styled from 'styled-components'
import FlexMixins from '../../utility/mixins/mixins-flex.styles'

import OtherMixins from '../../utility/mixins/mixins-other.styles'
import CssVars from '../../utility/variables.styles'

const PATH_WIDTH = 10;

export const PathMakerContainer = styled.div`
  position: relative;
  width: 100%;
`

export const PathMakerWaypoint = styled.div`
  position: relative;
  left: ${ ({ left }) => left ? left : '0'};
  transition: ${CssVars.transition};
  opacity: ${ ({ shown }) => shown ? '1' : '0'};
`

export const PathMakerChildrenContainer = styled.div`
  ${FlexMixins.display({ dir: 'column', ai: 'flex-start' })}
  ${OtherMixins.mNotLast({ margin: '115px', dir: 'bottom'})}
`

export const PathContainer = styled.svg`
  ${OtherMixins.abs({ left: '0', top: '0' })}
  ${OtherMixins.square('100%')}
  z-index: -1;
`

export const ThePath = styled.path`
  stroke: ${CssVars.colors.darkLava};
  stroke-width: ${PATH_WIDTH}px;
  fill: none;
  opacity: ${ ({visible}) => visible ? '1' : '0' };
  transition: all .1s;
`

export const Unfolder = styled.path`
  stroke: ${CssVars.colors.creamWhite};
  stroke-width: ${PATH_WIDTH + 2}px;
  fill: none;
  transition: all .2s;
`