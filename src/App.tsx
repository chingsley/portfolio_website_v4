import Navbar from './components/Navbar';
import AboutSection from './components/about/AboutSection';
import HeroSection from './components/hero/HeroSection';
import ProjectSection from './components/projects/ProjectSection';
import SkillSection from './components/skills/SkillSection';
// import projectsData from './data/projects.data';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <SkillSection />
      <AboutSection />
      <ProjectSection />
      {/* <Projects title="basic projects" projects={projectsData} /> */}
    </div>
  );
}

export default App;
