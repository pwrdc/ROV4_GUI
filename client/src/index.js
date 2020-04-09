import React from 'react';
import ReactDOM from 'react-dom';
import './style.scss';

import Header from './components/Header.js';
import Module from './components/Module.js';
import Camera from './components/Camera.js';
import Terminal from './components/Terminal.js';


class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Header />
        <main>
          <div className="modules">
            <Module title="Module 1" content="sample content sample content" />
            <Module title="Module 2" content="sample content sample content" />
            <Module title="Module 3" content="sample content sample content" />
            <Module title="Module 4" content="sample content sample content" />
          </div>
          <Camera />
          <div className="modules">
            <Module title="Module 5" content="sample content sample content" />
            <Module title="Module 6" content="sample content sample content" />
            <Module title="Module 7" content="sample content sample content" />
          </div>
        </main>
        <div className="terminals">
          <Terminal title="Terminal 1" />
          <Terminal title="Terminal 2" />
        </div>
      </div>
    );
  }
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
);
