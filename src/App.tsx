import Hero from './components/Hero2';
import Navbar from './components/Navbar';
import Projects from './components/Projects2';
import Skills from './components/Skills';
import projectsData from './data/projects.data';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      {/* <Projects title="basic projects" projects={projectsData} /> */}
    </div>
  );
}

export default App;
