import './App.css';
import Nav from './components/nav/nav.component';
import { BodyContainer } from './components/body-container/body-container.styles';
import Header from './components/header/header.component';
import Skills from './components/skills/skills.component';

function App() {
  return (
    <BodyContainer>
      <Nav></Nav>
      <Header></Header>
      <Skills></Skills>
    </BodyContainer>
  );
}

export default App;
