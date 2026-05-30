

import Day1Practice from './days/day-01-react-introduction/Practice';
import Day2Practice from './days/day-02-jsx-and-babel/Practice';
import Day3Practice from './days/day-03-components/Practice';
import Day4Practice from './days/day-04-props/Practice';
import Day6Practice from './days/day-06-state-management/Practice';
import './index.css';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>React Engineering Series 2026</h1>
        <p>Master React Step by Step</p>
      </header>
      
      <Day1Practice />
      <Day2Practice />
      <Day3Practice />
      <Day4Practice />
      <Day6Practice />

    </div>
  );
}

export default App;