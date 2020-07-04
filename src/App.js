import React from 'react';
import {
  Switch,
  Route
} from 'react-router-dom';

import './App.css';

import MainPage from './pages/main/main.component';
import AboutPage from './pages/about/about.component';
import ChallengesPage from './pages/challenges/challenges.component';
import CalendarPage from './pages/calendar/calendar.component';
import BlogPage from './pages/blog/blog.component';

import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';


function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path='/' component={MainPage} />
        <Route exact path='/about' component={AboutPage} />
        <Route exact path='/challenges' component={ChallengesPage} />
        <Route exact path='/calendar' component={CalendarPage} />
        <Route path='/blog' component={BlogPage} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;