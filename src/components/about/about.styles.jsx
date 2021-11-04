import styled from 'styled-components'

import FlexMixins from '../../utility/mixins/mixins-flex.styles'
import CssVars from '../../utility/variables.styles'
import { ShadowCard } from '../shadow-block/shadow-block.styles'
import { MediumDesc } from '../typography/typography.styles'

export const AboutContainer = styled.section`
  ${FlexMixins.display({ dir: 'column', ai: 'center' })}
  padding: 50px;
  
  @media(max-width: 992px){
    padding: 30px 15px;
  }

  & .path-maker{
    margin-top: 75px;
    margin-bottom: 75px;
    
    @media(max-width: 992px){
      margin-top: 45px;
      margin-bottom: 45px;
    }
  }
`

export const AboutCard = styled(ShadowCard)`
  width: 600px;
  ${FlexMixins.display({ ai: 'flex-start' })}
  transition: ${CssVars.transition};

  @media(max-width: 1500px){
    width: 460px;
  }
  
  @media(max-width: 992px){
    max-width: 100%;
  }

  @media(min-width: 577px){
    &::after{
      transition: ${CssVars.transition}${ ({shown}) => shown ? ' .3s' : ''};
      opacity: ${ ({shown}) => shown ? '1' : '0'};
    }

    &::before{
      transition: ${CssVars.transition}${ ({shown}) => shown ? '' : ' .3s'};
      opacity: ${ ({shown}) => shown ? '1' : '0'};
    }
  }
`

export const AboutCardNumber = styled.div`
  font-size: 36px;
  line-height: 49px;
  font-weight: bold;
  color: ${CssVars.colors.chineseRed};

  @media(max-width: 1500px){
    font-size: 24px;
    line-height: 36px;
  }

  @media(max-width: 768px){
    font-size: 18px;
    line-height: 27px;
  }
`

export const AboutCardDesc = styled(MediumDesc)`
  margin-top: 6px;
  margin-left: 15px;

  & a{
    color: ${CssVars.colors.tanCrayola};
  }

  @media(max-width: 768px){
    margin-top: 0;
    margin-left: 12px;
  }
`