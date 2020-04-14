import React from 'react';
import ReactDOM from 'react-dom';
import './style.scss';

import Header from './components/Header.js';
import Module from './components/Module.js';
import Camera from './components/Camera.js';
import Terminal from './components/Terminal.js';

import openSocket from 'socket.io-client';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      io: openSocket('http://localhost:5000')
    }
  }

  componentDidMount() {
    this.state.io.on('connect', () => {
      console.log('Socket connected');
    });
  }

  render() {
    return (
      <div className="app">
        <Header />
        <main>
          <div className="modules">
            <Module title="Module 1" content="sample content sample content" io={this.state.io}/>
            <Module title="Module 2" content="sample content sample content" io={this.state.io}/>
            <Module title="Module 3" content="sample content sample content" io={this.state.io}/>
            <Module title="Module 4" content="sample content sample content" io={this.state.io}/>
          </div>
          <Camera io={this.state.io}/>
          <div className="modules">
            <Module title="Module 5" content="sample content sample content" io={this.state.io}/>
            <Module title="Module 6" content="sample content sample content" io={this.state.io}/>
            <Module title="Module 7" content="sample content sample content" io={this.state.io}/>
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
