import styled from 'styled-components';

import FlexMixins from '../../utility/mixins/mixins-flex.styles'
import OtherMixins from '../../utility/mixins/mixins-other.styles'
import CssVars from '../../utility/variables.styles'

export const PopupCon = styled.div`
  ${OtherMixins.fix({ left: '0', top: '0' })}
  ${OtherMixins.square('100%')}
  ${FlexMixins.display({ center: true })}
  z-index: 500;
  transition: ${CssVars.transition};
  padding: 30px;

  ${({ isOpen }) => isOpen ? `
    opacity: 1;
    visibility: visible;
  ` : `
    opacity: 0;
    visibility: hidden;
  `}
`

export const PopupBg = styled.div`
  ${OtherMixins.abs({ left: '0', top: '0' })}
  ${OtherMixins.square('100%')}
  z-index: 0;
  background: rgba(255, 247, 237, .7);
  cursor: pointer;
  z-index: 0;
`

export const PopupContentCon = styled.div`
  position: relative;
  background: ${CssVars.colors.white};
  border-radius: 3px;
  max-width: 840px;
  padding: 40px 25px 25px;
  z-index: 1;
`

export const PopupContent = styled.div`
  ${FlexMixins.display({ dir: 'column', ai: 'center' })}
  text-align: center;
`

export const PopupContentImg = styled.img`
  max-width: 50%;
  max-height: 300px;
  margin-bottom: 30px;
`

export const PopupContentDesc = styled.div`
  font-size: 24px;
`

export const PopupClose = styled.img`
  ${OtherMixins.abs({ right: '20px', top: '20px' })}
  ${OtherMixins.square('30px')}
  cursor: pointer;
`