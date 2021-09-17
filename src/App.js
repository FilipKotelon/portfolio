import './App.css';
import Nav from './components/nav/nav.component';
import { BodyContainer } from './components/body-container/body-container.styles';
import Header from './components/header/header.component';
import Skills from './components/skills/skills.component';
import About from './components/about/about.component';
import Projects from './components/projects/projects.component';
import Contact from './components/contact/contact.component';

function App() {
  return (
    <BodyContainer>
      <Nav />
      <Header />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </BodyContainer>
  );
}

export default App;
