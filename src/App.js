
import './App.css'
import Navbar from './components/Navbar'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './components/pages/Home'
import AboutMe from './components/pages/AboutMe'
import BlogsVlogs from './components/pages/BlogsVlogs'
import ProfessionalExperience from './components/pages/ProfessionalExperience'
import Projects from './components/pages/Projects'

function App() {
  return (
  <>
  <Router>
    <Navbar />
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/aboutmoi' component={AboutMe} />
      <Route path='/blogs-vlogs' component={BlogsVlogs} />
      <Route path='/professionalexperience' component={ProfessionalExperience} />
      <Route path='/projects' component={Projects} />
    </Switch>
  </Router>
  </>
  );
}

export default App;
