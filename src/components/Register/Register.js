import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';
import logo from '../../images/Group 1329.png'
import './Register.css'


const Register = () => {
    const { signInUsingGoogle, setIsLoading } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_url = location.state?.from || '/home';


    const handleGoogleSignIn = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_url)
            })
            .finally(() => {
                setIsLoading(false);
            });
    }

    return (
        <Container className="text-center">
            <img className="main-logo" src={logo} alt="" />
            <div className="w-50 border border-2 mx-auto py-5 mt-5">
                <h2>Login With</h2>
                <Button
                    onClick={handleGoogleSignIn}
                    className="rounded-pill border border-1 my-4 d-flex align-items-center mx-auto" variant="light">
                    <img
                        className="google-icon"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2048px-Google_%22G%22_Logo.svg.png" alt="" />
                    <span className="px-4">Continue With Google</span>
                </Button>
                <p>
                    Don't have an account?<Link to="#"> create an account</Link>
                </p>
            </div>
        </Container>
    );
};

export default Register;