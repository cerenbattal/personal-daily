import React, { Component } from "react";
import AuthService from "../services/authService";
import SignUp from "./signup/Signup";
import Login from "./login/Login";
import Profile from "./profile/Profile";
import Dashboard from "./dashboard/Dashboard";
import LastComments from "./lastcomments/LastComments";
import AdminPanel from "./adminpanel/AdminPanel";
import LastPosts from "./lastposts/LastPosts";
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);
    this.state = {
      showAdminBoard: false,
      currentUser: undefined,
    };
  }
  componentDidMount() {
    const user = AuthService.getCurrentUser();
    if (user) {
      this.setState({
        currentUser: user,
        showAdminBoard: user.roles.includes("ROLE_ADMIN"),
      });
    }
  }

  logOut() {
    AuthService.logout();
  }

  render() {
    const { currentUser, showAdminBoard } = this.state;
    return (
      <div className="App" style={{ backgoundColor: '#fafafa' }}>
        <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: '100vh'}}>
          <div className="w-100" style={{ maxWidth: '50%'}}>
            <Router>
              <Switch>
                <Route exact path={["/", "/login"]} component={Login} />
                <Route path="/signup" component={SignUp} />
                <Route user={currentUser} path="/dashboard" component={Dashboard} />
                <Route user={currentUser} path="/profile" component={Profile} />
                <Route user={currentUser} path="/admin-panel" component={AdminPanel} />
                <Route user={currentUser} path="/last-posts" component={LastPosts} />
                <Route user={currentUser} path="/last-comments" component={LastComments} />
              </Switch>
            </Router>
          </div>
        </Container>
      </div>
    );
  }
  
}

export default App;
