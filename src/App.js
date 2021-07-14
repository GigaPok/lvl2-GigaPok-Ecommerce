import { Route, Switch } from 'react-router-dom';
import './App.css';
import Colors from './components/Color';
import MainPage from './pages/MainPage';
import { BrowserRouter as Router } from 'react-router-dom';
import { HOME, Single_Product, Product_List } from './router';
import NotFound from './pages/NotFound';
import SinglePage from './pages/SinglePage';

function App() {

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path={Product_List} component={Colors} exact />
          <Route path='/single/:paramId'>
            <SinglePage />
          </Route>
          <Route path={HOME} component={MainPage} exact />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
