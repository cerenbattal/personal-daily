import React, {useRef} from 'react';
import { Form, Button, Card } from 'react-bootstrap';
import { Link } from "react-router-dom";

function Login() {
    const emailRef = useRef(),
        passwordRef = useRef();
    return (
        <div>
        <Card>
            <Card.Body>
                <h2 className="text-center mb-4">Login</h2>
                <Form>
                    <Form.Group id="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" ref={emailRef} required />
                    </Form.Group>
                    <Form.Group id="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" ref={passwordRef} required />
                    </Form.Group>
                    <Button className="w-100" type="submit">Login</Button>
                </Form>
            </Card.Body>
        </Card>
        <div className="w-100 text-center mt-2">
            Do not have an account? <Link to="/signup">Sign Up.</Link>
        </div>
    </div>
    )
}

export default Login
