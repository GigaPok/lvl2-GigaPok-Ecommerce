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
import React, { useEffect } from 'react';
import { checkUser } from './services/auth';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from './store/user/userSelector';
import { loginUser } from './store/user/userActions';

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    if (!user.user) return;
    checkUser();
  });

  useEffect(() => {
    dispatch(loginUser)
  }, []);

  const user = useSelector(selectUser)

  console.log(user);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path={Product_List} component={Colors} exact />
          <Route path={Single_Product} component={SinglePage} exact />
          <Route path={HOME} component={MainPage} exact />
          {user.isLoggedIn && <Route path={Admin_Panel} component={AdminPanel} />}
          <Route path={Sign_In} component={SignIn} exact />
          <Route path={Sign_Up} component={SignUp} exact />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
