import SignUp from "./signup/Signup";
import Login from "./login/Login";
import Profile from "./profile/Profile";
import Dashboard from "./dashboard/Dashboard";
import LastComments from "./lastcomments/LastComments";
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App" style={{ backgoundColor: '#fafafa' }}>
      <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: '100vh'}}>
        <div className="w-100" style={{ maxWidth: '50%'}}>
          <Router>
            <Switch>
              <Route exact path="/" component={Dashboard} />
              <Route path="/signup" component={SignUp} />
              <Route path="/login" component={Login} />
              <Route path="/profile" component={Profile} />
              <Route path="/last-comments" component={LastComments} />
            </Switch>
          </Router>
        </div>
      </Container>
    </div>
  );
}

export default App;
