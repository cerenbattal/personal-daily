import React, { Component } from 'react';
import { Button, Card, Alert } from 'react-bootstrap';
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { Link } from "react-router-dom";

import AuthService from "../../services/authService";

const required = value => {
    if (!value) {
        return (
            <Alert variant="danger">
                This field is required!
            </Alert>
        );
    }
};

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.handleLogin = this.handleLogin.bind(this);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);

        this.state = {
            username: "",
            password: "",
            loading: false,
            message: ""
        };
    }

    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        });
    }

    onChangePassword(e) {
        this.setState({
            password: e.target.value
        });
    }

    handleLogin(e) {
        e.preventDefault();

        this.setState({
            message: "",
            loading: true
        });

        this.form.validateAll();

        if (this.checkBtn.context._errors.length === 0) {
            AuthService.login(this.state.username, this.state.password).then(
                (response) => {
                    const user_id = response.id;
                    console.log("user_id: ", user_id)
                    AuthService.findProfilePicOfUser(user_id).then((picture) => {
                        console.log(picture);
                        this.setState({
                            message: picture
                        });
                    }, (error) => {
                        const errMsg =
                                (error.response &&
                                    error.response.data &&
                                    error.response.data.message) ||
                                error.message ||
                                error.toString();
        
                            this.setState({
                                message: errMsg,
                            });
                    })
                    if(response.roles[0] === 'ROLE_ADMIN') {
                        this.props.history.push("/admin-panel");
                        //window.location.reload();
                    } else if(response.roles[0] === 'ROLE_USER') {
                        this.props.history.push("/dashboard");
                        window.location.reload();
                    }

                },
                error => {
                    const resMessage =
                        (error.response &&
                            error.response.data &&
                            error.response.data.message) ||
                        error.message ||
                        error.toString();

                    this.setState({
                        loading: false,
                        message: resMessage
                    });
                }
            );
        } else {
            this.setState({
                loading: false
            });
        }
    }

    render() {
    return (
        <div>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Login</h2>
                    <Form onSubmit={this.handleLogin} ref={ form => { this.form =form; }}>
                        <div className="form-group" id="email">
                            <label className="form-label" htmlFor="username">Username</label>
                            
                            <Input 
                                className="form-control"
                                type="text"
                                placeholder="Username"
                                name="username"
                                value={this.state.username}
                                onChange={this.onChangeUsername}
                                validations={[required]}>
                            </Input>
                        </div>

                        <div className="form-group" id="password">
                            <label className="form-label" htmlFor="password">Password</label>
                            
                            <Input 
                                className="form-control"
                                type="password"
                                placeholder="Password"
                                name="password"
                                value={this.state.password}
                                onChange={this.onChangePassword}
                                validations={[required]}>  
                            </Input>
                        </div>

                        <Button className="w-100" type="submit" disabled={this.state.loading}>Login</Button>

                        {this.state.message && (<Alert variant="danger">
                            {this.state.message}
                        </Alert>)}

                        <CheckButton
                            style={{ display: "none" }}
                            ref={form => {
                                this.checkBtn = form;
                            }}
                        />
                    </Form>
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
                Do not have an account? <Link to="/signup">Sign Up.</Link>
            </div>
        </div>
    )
    }
}
