import './App.css'
import { ScrollingProvider, Section } from 'react-scroll-section'

import Nav from './components/nav/nav.component'
import { BodyContainer } from './components/body-container/body-container.styles'
import Header from './components/header/header.component'
import Skills from './components/skills/skills.component'
import About from './components/about/about.component'
import Projects from './components/projects/projects.component'
import Contact from './components/contact/contact.component'

function App() {
  return (
    <ScrollingProvider>
      <BodyContainer>
        <Nav />
        <Section id="header"><Header /></Section>
        <Section id="about"><About /></Section>
        <Section id="skills"><Skills /></Section>
        <Section id="projects"><Projects /></Section>
        <Section id="contact"><Contact /></Section>
      </BodyContainer>
    </ScrollingProvider>
  );
}

export default App;
