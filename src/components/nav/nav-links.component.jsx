import React from 'react'
import { useScrollSection } from 'react-scroll-section'

import { LogoContainer, NavLink } from './nav.styles'

const NavLinks = ({ isScrolled }) => {
  const headerSection = useScrollSection('header');
  const aboutSection = useScrollSection('about');
  const skillsSection = useScrollSection('skills');
  const projectsSection = useScrollSection('projects');
  const contactSection = useScrollSection('contact');

  return (
    <>
      <LogoContainer onClick={headerSection.onClick} isScrolled={isScrolled} >
        MCLEO
      </LogoContainer>
      <NavLink onClick={aboutSection.onClick} active={aboutSection.selected}>
        About me
      </NavLink>
      <NavLink onClick={skillsSection.onClick} active={skillsSection.selected}>
        My skills
      </NavLink>
      <NavLink onClick={projectsSection.onClick} active={projectsSection.selected}>
        Projects
      </NavLink>
      <NavLink onClick={contactSection.onClick} active={contactSection.selected}>
        Contact me
      </NavLink>
    </>
  )
}

export default NavLinks