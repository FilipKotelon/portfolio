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
  padding: 60px 30px 30px;

  @media(max-width: 992px){
    padding: 60px 15px 15px;
  }

  @media(max-width: 576px){
    padding: 40px 0 0;
  }

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
  max-height: 100%;
  padding: 60px 30px 45px;
  z-index: 1;
  overflow: hidden;

  @media(max-width: 1500px){
    max-width: 780px;
    padding: 60px 24px 30px;
  }

  @media(max-width: 992px){
    padding: 40px 15px 24px;
  }

  @media(max-width: 576px){
    ${OtherMixins.square('100%')}
  }
`

export const PopupContent = styled.div`
  ${FlexMixins.display({ dir: 'column', ai: 'center' })}
  text-align: center;
  overflow: auto;
  max-height: 100%;

  @media(max-width: 768px){
    text-align: left;
  }
`

export const PopupContentImg = styled.img`
  margin-bottom: 30px;
  
  @media(min-width: 993px){
    max-width: 60%;
    max-height: 300px;
  }

  @media(max-width: 992px){
    width: 100%;
    margin-bottom: 24px;
  }
`

export const PopupContentDesc = styled.div`
  font-size: 24px;

  @media(max-width: 1500px){
    font-size: 18px;
    line-height: 27px;
  }

  & h3{
    font-size: 32px;
    font-weight: bold;
    margin-bottom: 1em;

    @media(max-width: 1500px){
      font-size: 24px;
      line-height: 33px;
    }
  }
`

export const PopupClose = styled.img`
  ${OtherMixins.abs({ right: '20px', top: '20px' })}
  ${OtherMixins.square('30px')}
  cursor: pointer;

  @media(max-width: 992px){
    right: 10px;
    top: 10px;
    ${OtherMixins.square('20px')}
  }
`