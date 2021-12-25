import logo from './logo.svg';
import salt from './assets/salt.jpg';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          <h1 id="NameTitle"> Hi, I'm Justin Roesner. </h1>
          <div>I'm a front-end web developer.</div> <br/>
          Personal Projects:🧂<br/>
          <a href="http://eqtimer.hugesalt.com" target="_blank">Timer</a>
          <a id="l" href="http://eqtimer.hugesalt.com" target="_blank">Github</a><br/>
          <a href="http://eqtimer.hugesalt.com" target="_blank">Mind Map</a>
          <a id="l" href="http://eqtimer.hugesalt.com" target="_blank">Github</a><br/>
          <a href="http://eqtimer.hugesalt.com" target="_blank">Racing Game</a>
          <a id="l" href="http://eqtimer.hugesalt.com" target="_blank">Github</a><br/>
        </p>
        <br/>
        <p>
          Mahasin <br/>
          <img src={salt} alt="random image of a salt mine" />
        </p>
      </header>
    </div>
  );
}

export default App;
