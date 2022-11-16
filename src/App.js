import Header from './components/Header';
import Home from './components/Home';
import classes from './App.module.css';

function App() {
  return (
    <div className={classes.app}>
      <Header/>
      <Home/>
    </div>
  );
}

export default App;
