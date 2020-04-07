import React from 'react';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import * as Icon from 'react-feather';

import './App.scss';

import Home from './components/home';
import Navbar from './components/navbar';
import Links from './components/links';
import FAQ from './components/faq';
import DeepDive from './components/deepdive';
import Banner from './components/banner';
import PatientDB from './components/patientdb';

import Routes from './router';

import * as serviceWorker from './serviceWorker';

const history = require('history').createBrowserHistory;

function App() {
  const pages = [
    {
      pageLink: '/',
      view: Home,
      displayName: 'Home',
      animationDelayForNavbar: 0.2,
    },
    {
      pageLink: '/demographics',
      view: PatientDB,
      displayName: 'Demographics',
      animationDelayForNavbar: 0.3,
    },
    {
      pageLink: '/deepdive',
      view: DeepDive,
      displayName: 'Deep Dive',
      animationDelayForNavbar: 0.4,
    },
    {
      pageLink: '/links',
      view: Links,
      displayName: 'Helpful Links',
      animationDelayForNavbar: 0.5,
    },
    {
      pageLink: '/faq',
      view: FAQ,
      displayName: 'FAQ',
      animationDelayForNavbar: 0.6,
    },
  ];

  return (
    <div className="App">
      <Router history={history}>
        <Route
          render={({location}) => (
            <div className="Almighty-Router">
              <Navbar pages={pages} />
              <Banner />
              <Route exact path="/" render={() => <Redirect to="/" />} />
              <Routes location={location} />
            </div>
          )}
        />
      </Router>

      <footer className="fadeInUp" style={{animationDelay: '2s'}}>
        <h5>We stand with everyone fighting on the frontlines</h5>
        <div className="link">
          <a href="https://github.com/covid19Nepal">covid19Nepal</a>
        </div>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/covid19nepal/covid19nepal-react"
          className="button github"
        >
          <Icon.GitHub />
          <span>Open Sourced on GitHub</span>
        </a>
      </footer>
    </div>
  );
}

serviceWorker.register();

export default App;
