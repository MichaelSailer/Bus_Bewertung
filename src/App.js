import {Switch,Route, BrowserRouter, Redirect, withRouter, Link} from 'react-router-dom'
import './App.css';
import MainRoutes from './routes/MainRoutes'

function App() {
  

  return (
    <div className="App">
       
        <div className="background">

        <BrowserRouter>
          <MainRoutes></MainRoutes>
        </BrowserRouter>
        </div>
    
    </div>
    
  );
}

export default App;
