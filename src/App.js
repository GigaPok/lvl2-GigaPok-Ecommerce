import { Route, Switch } from 'react-router-dom';
import './App.css';
import Colors from './components/Color';
import MainPage from './pages/MainPage';
import { BrowserRouter as Router } from 'react-router-dom';
import NotFound from './pages/NotFound';
import { SinglePage } from './pages/SinglePage/SinglePage';
import { Product_List, HOME, Single_Product, Admin_Panel, Sign_In, Sign_Up } from './router';
import AdminPanel from './layouts/AdminPanel'
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import React, { useContext, useEffect } from 'react';
import { UserContext } from './store/UserContext';
import { checkUser } from './services/auth';

function App() {
  const { data } = useContext(UserContext);

  useEffect(() => {
    if (!data.user) return;

    checkUser();
  });

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path={Product_List} component={Colors} exact />
          <Route path={Single_Product} component={SinglePage} exact />
          <Route path={HOME} component={MainPage} exact />
          {data.isLoggedIn && <Route path={Admin_Panel} component={AdminPanel} />}
          <Route path={Sign_In} component={SignIn} exact />
          <Route path={Sign_Up} component={SignUp} exact />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
