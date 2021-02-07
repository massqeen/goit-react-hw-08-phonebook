import { Suspense, useEffect, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import routs from 'routs';

import { getIsRefreshing } from 'redux/auth/authSelectors';
import authOperations from 'redux/auth/authOperations';
import Navigation from 'components/Navigation';
import PrivateRoute from 'components/PrivateRoute';
import PublicRoute from 'components/PublicRoute';

const HomeView = lazy(() => import('views/HomeView'));
const PhonebookView = lazy(() => import('views/PhonebookView'));
const SignupView = lazy(() => import('views/SignupView'));
const LoginView = lazy(() => import('views/LoginView'));

const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(getIsRefreshing);

  useEffect(() => {
    dispatch(authOperations.getCurrentUser());
  }, [dispatch]);

  return (
    <>
      {!isRefreshing && (
        <>
          <Navigation />
          <Suspense fallback={<p>Загрузка...</p>}>
            <Switch>
              <Route path={routs.home} exact>
                <HomeView />
              </Route>

              <PrivateRoute path={routs.phonebook} redirectTo={routs.login}>
                <PhonebookView />
              </PrivateRoute>

              <PublicRoute
                path={routs.signup}
                redirectTo={routs.phonebook}
                restricted
              >
                <SignupView />
              </PublicRoute>

              <PublicRoute
                path={routs.login}
                redirectTo={routs.phonebook}
                restricted
              >
                <LoginView />
              </PublicRoute>
            </Switch>
          </Suspense>
        </>
      )}
    </>
  );
};

export default App;
