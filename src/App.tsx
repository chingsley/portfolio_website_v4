import './App.css';
import Hero from './components/Hero';
import Projects from './components/Projects';
import projectsData from './data/projects.data';

function App() {
  return (
    <div className="App">
      <Hero />
      <Projects title="basic projects" projects={projectsData} />
    </div>
  );
}

export default App;
