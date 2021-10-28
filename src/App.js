import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Admin from './components/Admin/Admin';
import EventRegistration from './components/EventRegistration/EventRegistration';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Register from './components/Register/Register';
import AuthProvider from './contexts/AuthProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import MyEvent from './components/MyEvent/MyEvent';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          {/* <Header /> */}
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <PrivateRoute path="/event-register/:id">
              <EventRegistration />
            </PrivateRoute>
            <PrivateRoute path="/my-event">
              <MyEvent />
            </PrivateRoute>
            <PrivateRoute path="/admin">
              <Admin />
            </PrivateRoute>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
