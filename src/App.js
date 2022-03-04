import logo from './logo.svg';
import './App.css';
import Main from './component/home/main';
import Nav from './component/nav';
import Detail from './component/Detail/main';
import { Switch,Route } from 'react-router-dom';

function App() {
  
  

  return (
  
    <div className='App' >
      <Nav />
      <Switch>
        <Route path='/' exact><Main/></Route>
        <Route path='/detail/:id'> <Detail/></Route>
      </Switch>
     
     
    </div>

  );
}

export default App;
