import React from 'react'

import { BrownButton } from '../button/button.styles'
import { CoverImage } from '../images/images.styles'
import { ShadowBlock } from '../shadow-block/shadow-block.styles'
import { BigDesc, BigTitle } from '../typography/typography.styles'
import { HeaderContainer, HeaderDesc, HeaderImageContainer } from './header.styles'

import HeaderImage from '../../assets/photos/placeholder-me.png'

const Header = () => (
  <HeaderContainer>
    <HeaderDesc>
      <BigTitle className="header-title">Hi there! I’m Filip.</BigTitle>
      <BigDesc className="header-desc">
        And I spent like waaaay too much time on choosing the right fonts. Luckily, I’m extremely fast at coding websites so it didn’t delay anything. And that’s how you do self promotion.
      </BigDesc>
      <BrownButton>Nice</BrownButton>
    </HeaderDesc>
    <HeaderImageContainer>
      <ShadowBlock size="big" className="header-image">
        <CoverImage src={ HeaderImage } />
      </ShadowBlock>
    </HeaderImageContainer>
  </HeaderContainer>
)

export default Header