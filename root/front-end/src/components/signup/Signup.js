import React, { Component } from 'react'
import { Button, Card, Alert } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { isEmail } from "validator";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
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

const email = value => {
    if (!isEmail(value)) {
        return (
            <Alert variant="danger">
                This is not a valid email.
            </Alert>
        );
    }
};

const vusername = value => {
    if (value.length < 3 || value.length > 20) {
        return (
            <Alert variant="danger">
                The username must be between 3 and 20 characters.
            </Alert>
        );
    }
};

const vpassword = value => {
    const regex = new RegExp(/^(?=.*\d)(?=.*[A-Z])(?!.*[^a-zA-Z0-9@#$^+=])(.{8,15})$/);
    if (!regex.test(value)) {
        return (
            <Alert variant="danger">
                The password must be between 8-15 characters.
            </Alert>
        );
    }
};
export default class Signup extends Component {
    constructor(props) {
        super(props);
        this.handleRegister = this.handleRegister.bind(this);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);

        this.state = {
            username: "",
            email: "",
            password: "",
            successful: false,
            message: ""
        };
    }

    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        });
    }

    onChangeEmail(e) {
        this.setState({
            email: e.target.value
        });
    }

    onChangePassword(e) {
        this.setState({
            password: e.target.value
        });
    }

    handleRegister(e) {
        e.preventDefault();

        this.setState({
            message: "",
            successful: false
        });

        this.form.validateAll();

        if (this.checkBtn.context._errors.length === 0) {
            AuthService.register(
                this.state.username,
                this.state.email,
                this.state.password
            ).then(
                response => {
                    this.setState({
                        message: response.data.message,
                        successful: true
                    });
                },
                error => {
                    const resMessage =
                        (error.response &&
                            error.response.data &&
                            error.response.data.message) ||
                        error.message ||
                        error.toString();

                    this.setState({
                        successful: false,
                        message: resMessage
                    });
                }
            );
        }
    }
    
    render() {
        return (
            <div>
                <Card>
                    <Card.Body>
                        <h2 className="text-center mb-4">Sign Up</h2>
                        <Form
                            onSubmit={this.handleRegister}
                            ref={form => {
                              this.form = form;
                            }}
                        >
                            <div id="username" className="form-group">
                                <label className="form-label">Username</label>
                                <Input 
                                    className="form-control" 
                                    type="text" 
                                    value={this.state.username}
                                    onChange={this.onChangeUsername}
                                    validations={[required, vusername]}
                                    required/>
                            </div>
                            <div id="email" className="form-group">
                                <label className="form-label">Email</label>
                                <Input 
                                    className="form-control" 
                                    type="email"
                                    name="email"
                                    value={this.state.email}
                                    onChange={this.onChangeEmail}
                                    validations={[required, email]}
                                    required/>
                            </div>
                            <div id="password" className="form-group">
                                <label className="form-label">Password</label>
                                <Input 
                                    className="form-control" 
                                    type="password"
                                    value={this.state.password}
                                    onChange={this.onChangePassword}
                                    validations={[required, vpassword]}
                                    required />
                            </div>
                            <Button className="w-100" type="submit">Sign Up</Button>

                            {this.state.message &&
                                (<Alert variant={this.state.successful
                                    ? "success"
                                    : "danger"}>
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
                    Already have an account? <Link to="/login">Login.</Link>
                </div>
            </div>

        )
    }
}
