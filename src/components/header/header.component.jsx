import React from 'react'

import { BrownButton } from '../button/button.styles'
import { CoverImage } from '../images/images.styles'
import { BigDesc, BigTitle } from '../typography/typography.styles'
import { HeaderContainer, HeaderDesc, HeaderImageContainer, HeaderImage } from './header.styles'

import HeaderImageUrl from '../../assets/photos/me.png'
import { useScrollSection } from 'react-scroll-section'

const Header = () => {
  const aboutSection = useScrollSection('about');

  return (
    <HeaderContainer>
      <HeaderDesc>
        <BigTitle className="header-title">Hi there! I’m Filip.</BigTitle>
        <BigDesc className="header-desc">
          And I spent like waaaay too much time on choosing the right fonts. Luckily, I’m extremely fast at coding websites so it didn’t delay anything. And that’s how you do self promotion.
        </BigDesc>
        <BrownButton onClick={aboutSection.onClick}>Nice</BrownButton>
      </HeaderDesc>
      <HeaderImageContainer>
        <HeaderImage size="big" className="header-image">
          <CoverImage src={ HeaderImageUrl } />
        </HeaderImage>
      </HeaderImageContainer>
    </HeaderContainer>
  )
}


export default Header