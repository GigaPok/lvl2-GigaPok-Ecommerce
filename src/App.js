import { Route, Switch } from 'react-router-dom';
import './App.css';
import Colors from './components/Color';
import MainPage from './pages/MainPage';
import { BrowserRouter as Router } from 'react-router-dom';
import NotFound from './pages/NotFound';
import { SinglePage } from './pages/SinglePage/SinglePage';
import { Product_List, HOME } from './Router';

function App() {

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path={Product_List} component={Colors} exact />
          <Route path='/single/:paramId' component={SinglePage} exact />
          <Route path={HOME} component={MainPage} exact />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
