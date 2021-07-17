import { Route, Switch } from 'react-router-dom';
import './App.css';
import Colors from './components/Color';
import MainPage from './pages/MainPage';
import { BrowserRouter as Router } from 'react-router-dom';
import NotFound from './pages/NotFound';
import { SinglePage } from './pages/SinglePage/SinglePage';
import { Product_List, HOME, Single_Product, Admin_Panel } from './router';
import AdminPanel from './layouts/AdminPanel'

function App() {

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path={Product_List} component={Colors} exact />
          <Route path={Single_Product} component={SinglePage} exact />
          <Route path={HOME} component={MainPage} exact />
          <Route path={Admin_Panel} component={AdminPanel} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
