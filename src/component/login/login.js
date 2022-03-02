import { Button, Form } from 'react-bootstrap'
import './login.scss'
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { useState } from 'react';
import fire from '../../config/firebase';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const uiConfig = {
    signInFlow: 'redirect',
    signInSuccessUrl: '/home',
    signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID
    ],

};
const Login = () => {
    const history = useHistory();
    const [user, setUser] = useState({
        username: '',
        password: ''
    })

    const handleChangeInput = (event) => {
        const value = event.target.value;
        setUser({
            ...user,
            [event.target.name]: value
        }
        )
    }
    const login = (e) => {
        e.preventDefault()
        fire.auth().signInWithEmailAndPassword(user.username, user.password).then((user) => {
            history.push('/')
        })
            .catch((error) => {
                toast.error('Wrong username or password')
            })

    }

    return (
        <>
            <div className="login-container">
                <h2>
                    Login
                </h2>
                <Form onSubmit={login}>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Username</Form.Label>
                        <div className="input-container">
                            <Form.Control size='lg' type="user name" placeholder="Username"
                                value={user.username}
                                onChange={(event) => { handleChangeInput(event) }}
                                name="username" />
                            <FontAwesomeIcon className='input-icon' icon={faUser} />
                        </div>

                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                        <Form.Label>Password</Form.Label>
                        <div className="input-container">
                            <Form.Control size='lg' type="password" placeholder="Password"
                                name="password"
                                value={user.password}
                                onChange={(event) => { handleChangeInput(event) }} />
                            <FontAwesomeIcon className='input-icon' icon={faLock} />
                        </div>
                    </Form.Group>
                    <div className="remember-me">
                        <input type="checkbox" />
                        <span>Remember me</span>
                    </div>
                    <button className="btn-login" type="submit">Login</button>
                    <StyledFirebaseAuth
                        uiConfig={uiConfig}
                        firebaseAuth={firebase.auth()} />
                </Form>
                <div className="privacy">
                    By clicking 'Log In' you agree to our website Creators Club Terms & Conditions, adidas Privacy Notice and Terms & Conditions.

                </div>
            </div>
        </>
    )
}
export default Login