import './index.css'
import About from './pages/About';
import Contacts from './pages/Contacts';
import Project from './pages/Project';
import Skills from './pages/Skills';
import Tools from './pages/Tools/ index';

function App() {
  return (
    <div className='flex flex-col gap-32 ml-52 mt-16 mb-64'>
      <About />
      <Skills />
      <Tools />
      <Project />
      <Contacts />
    </div>
  )
}

export default App;