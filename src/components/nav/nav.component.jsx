import React from 'react'
import { LogoContainer, NavContainer, NavLink } from './nav.styles'

class Nav extends React.Component {
  state = {
    isScrolled: false
  }

  componentDidMount(){
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount(){
    window.removeEventListener('scroll', this.handleScroll)
  }

  /**
   * Changes the navigation background depending on scroll progress on the page
   */
  handleScroll = () => {
    const { isScrolled } = this.state;

    if(!isScrolled && window.scrollY > 0){
      this.setState({ isScrolled: true });
    } else if(isScrolled && window.scrollY === 0){
      this.setState({ isScrolled: false });
    }
  }

  render(){
    const { isScrolled } = this.state;

    return(
      <>
        <NavContainer isScrolled={isScrolled}>
          <LogoContainer isScrolled={isScrolled} href="/">MCLEO</LogoContainer>
          <NavLink>About me</NavLink>
          <NavLink>My skills</NavLink>
          <NavLink>Projects</NavLink>
          <NavLink>Contact me</NavLink>
        </NavContainer>
      </>
    )
  }
}

export default Nav