import styled from 'styled-components'

import FlexMixins from '../../utility/mixins/mixins-flex.styles'
import OtherMixins from '../../utility/mixins/mixins-other.styles'
import CssVars from '../../utility/variables.styles'

export const NavContainer = styled.nav`
  ${FlexMixins.display({ ai: 'center' })}
  ${OtherMixins.fix({ left: '0', top: '0' })}
  font-family: ${CssVars.fonts.display};
  z-index: 1000;
  transition: ${CssVars.transition};

  @media(min-width: 993px){
    ${({ isScrolled }) => OtherMixins.rect({ w: '100%', h: isScrolled ? '40px' : '60px' })}
    font-size: ${ ({ isScrolled }) => isScrolled ? '24px' : '32px' };
    background: ${ ({ isScrolled }) => isScrolled ? CssVars.colors.white : 'transparent' };
  }

  @media(max-width: 992px){
    ${OtherMixins.rect({ w: '100%', h: '40px' })}
    font-size: 20px;
    background: ${CssVars.colors.white};
  }
`

export const NavLink = styled.div`
  ${FlexMixins.display({ ai: 'center' })}
  height: 100%;
  padding: 0 13px;
  cursor: pointer;
  ${ ({ active }) => active ? `color: ${CssVars.colors.tanCrayola};` : `` }
  transition: ${CssVars.transition};

  @media(max-width: 992px){
    padding: 0 9px;
  }
`

export const LogoContainer = styled.div`
  ${FlexMixins.display({ center: true })}
  ${OtherMixins.rect({ w: '110px', h: '100%' })}
  background: ${CssVars.colors.tanCrayola};
  color: ${CssVars.colors.creamWhite};
  transition: ${CssVars.transition};
  margin-right: 13px;
  cursor: pointer;

  @media(min-width: 993px){
    font-size: ${ ({ isScrolled }) => isScrolled ? '32px' : '48px' };
  }

  @media(max-width: 992px){
    font-size: 24px;
    width: 60px;
    margin-right: 5px;
  }
`