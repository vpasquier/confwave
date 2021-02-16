import React, {useState} from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import firebase from "firebase/app";
import "firebase/auth";
/********* STYLES *********/
import "../../App.css";


export const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signIn = () => {
      // [START auth_signin_password]
      firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
          // Signed in
          var user = userCredential.user;
          // ...
        })
        .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
        });
    };

    const signUp = () => {
      firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
          // Signed in
          var user = userCredential.user;
          // ...
        })
        .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          // ..
        });
    };

    const sendEmailVerification = () => {
      firebase.auth().currentUser.sendEmailVerification()
        .then(() => {
          // Email verification sent!
          // ...
        });
    };

    const sendPasswordReset = () => {
      firebase.auth().sendPasswordResetEmail(email)
        .then(() => {
          // Password reset email sent!
          // ..
        })
        .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          // ..
        });
    };

    return (
      <div className="section section-header">
        <div className="parallax">
          <div className="container">
            <div className="meso-content-title">
              <h1 className="title-modern">Support</h1>
            </div>
            <Form onSubmit={signIn()}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Your email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" value={email}
                              onChange={e => setEmail(e.target.value)}/>
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password"/>
              </Form.Group>
              <Button variant="primary" type="submit">
                Login
              </Button>
            </Form>
          </div>
        </div>
      </div>
    );
  }
;