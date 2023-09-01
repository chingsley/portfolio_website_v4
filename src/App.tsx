import Hero from './components/Hero2';
import Navbar from './components/Navbar';
import Projects from './components/Projects2';
import AboutSection from './components/about/AboutSection';
import SkillSection from './components/skills/SkillSection';
// import projectsData from './data/projects.data';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <SkillSection />
      <AboutSection />
      <Projects />
      {/* <Projects title="basic projects" projects={projectsData} /> */}
    </div>
  );
}

export default App;
