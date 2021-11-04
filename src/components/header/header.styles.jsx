import styled from 'styled-components';

import FlexMixins from '../../utility/mixins/mixins-flex.styles'
import OtherMixins from '../../utility/mixins/mixins-other.styles'
import { ShadowBlock } from '../shadow-block/shadow-block.styles';
import { Slide } from '../slide/slide.styles';

export const HeaderContainer = styled(Slide)`
  ${FlexMixins.display({ ai: 'center', jc: 'space-between' })}
  max-width: 1440px;
  margin: 0 auto;

  @media(max-width: 1600px){
    max-width: 1300px;
    padding: 0 100px;
  }

  @media(max-width: 1300px){
    padding: 0 40px;
  }

  @media(max-width: 992px){
    flex-direction: column-reverse;
    justify-content: center;
    padding: 60px 30px;
  }

  @media(max-width: 768px){
    flex-direction: column-reverse;
    justify-content: center;
    padding: 80px 30px 30px;
  }
`

export const HeaderDesc = styled.div`
  ${FlexMixins.display({ dir: 'column', ai: 'flex-start', jc: 'center' })}
  width: 50%;
  padding-right: 60px;

  @media(max-width: 992px){
    width: 70%;
    padding-right: 0;
    align-items: center;
  }

  @media(max-width: 768px){
    width: 100%;
  }

  & .header-title{
    margin-bottom: 40px;

    @media(max-width: 1600px){
      margin-bottom: 28px;
    }

    @media(max-width: 992px){
      text-align: center;
      margin-bottom: 16px;
    }

    @media(max-width: 768px){
      margin-bottom: 6px;
    }
  }

  & .header-desc{
    margin-bottom: 100px;

    @media(max-width: 1600px){
      margin-bottom: 60px;
    }

    @media(max-width: 992px){
      text-align: center;
      margin-bottom: 30px;
    }
  }
`

export const HeaderImageContainer = styled.div`
  ${FlexMixins.display({ center: true })}
  height: 100%;

  @media(max-width: 992px){
    height: auto;
  }
`

export const HeaderImage = styled(ShadowBlock)`
  ${OtherMixins.rect({ w: '520px', h: '760px' })}

  @media(max-width: 1650px){
    ${OtherMixins.rect({ w: '470px', h: '680px' })}
  }

  @media(max-width: 1500px){
    ${OtherMixins.rect({ w: '400px', h: '600px' })}
    margin-right: 30px;
  }

  @media(max-width: 1300px){
    margin-right: 0;
  }

  @media(max-width: 992px){
    ${OtherMixins.rect({ w: '220px', h: '320px' })}
    margin-bottom: 30px;
  }

  @media(max-width: 768px){
    ${OtherMixins.rect({ w: '160px', h: '250px' })}
  }

  @media(max-width: 768px){
    ${OtherMixins.rect({ w: '140px', h: '200px' })}
  }
`