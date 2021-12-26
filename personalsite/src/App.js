import salt from './assets/salt.jpg';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <h1 id="NameTitle"> Hi, I'm Justin Roesner. </h1>

            <p>
              I'm a react front-end developer. <br/> 
              On track to graduate with a BA in CS by 5/13/21. <br/>
              That's in
            </p>

       
        <br/>

        <div>
          <p>
            Personal Projects:🧂<br/>
            <a href="http://eqtimer.hugesalt.com" target="_blank">Timer</a>
            <a id="l" href="https://github.com/JustinRoesner/eq_timer/tree/master/eq_timer" target="_blank">Github</a><br/>
            <a href="http://eqtimer.hugesalt.com" target="_blank">Mind Map</a>
            <a id="l" href="https://github.com/JustinRoesner" target="_blank">Github</a><br/>
            <a href="http://eqtimer.hugesalt.com" target="_blank">Racing Game</a>
            <a id="l" href="https://github.com/JustinRoesner" target="_blank">Github</a><br/>
          </p>
        </div>


        <p>
          Mahasin <br/>
          <img src={salt} alt="random image of a salt mine" />
        </p>
      </header>
    </div>
  );
}

export default App;
