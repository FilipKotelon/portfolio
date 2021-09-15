import styled from 'styled-components';

import FlexMixins from '../../utility/mixins/mixins-flex.styles'
import OtherMixins from '../../utility/mixins/mixins-other.styles'
import CssVars from '../../utility/variables.styles';

export const NavContainer = styled.nav`
  ${FlexMixins.display({ ai: 'center' })}
  ${OtherMixins.fix({ left: '0', top: '0' })}
  ${OtherMixins.rect({ w: '100%', h: '60px' })}
  font-family: ${CssVars.fonts.display};
`

export const NavLink = styled.div`
  ${FlexMixins.display({ ai: 'center' })}
  height: 100%;
  padding: 0 13px;
  font-size: 32px;
  cursor: pointer;
`

/**
 * Holds the space of navigation height
 */
export const NavHeight = styled.div`
  height: 60px;
`

export const LogoContainer = styled.a`
  ${FlexMixins.display({ center: true })}
  ${OtherMixins.rect({ w: '110px', h: '100%' })}
  background: ${CssVars.colors.tanCrayola};
  color: ${CssVars.colors.creamWhite};
  font-size: 48px;
  margin-right: 13px;
`