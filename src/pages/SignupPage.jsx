import { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import { FirebaseContext } from '../context/firebase';
import '../style/pages/signinPage.css'

const SignupPage = () => {
    const navigate = useNavigate();
    const { firebase } = useContext(FirebaseContext);
    const [firstName, setFirstName] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const isInvalid = password === '' || emailAddress === '';
    
    const handleSignUp = (e) => {
        e.preventDefault();

        // Initialize Firebase Authentication and get a reference to the service
        const auth = getAuth(firebase);
        
        // firebase work here!
        createUserWithEmailAndPassword(auth, emailAddress, password)
        .then((userCredential) => {
            //TODO: update profile to user's profile
            const user = userCredential.user;
            
            //TODO: push to the browse page
            navigate('/');
        })
        .catch((error) => {
            setFirstName('');
            setEmailAddress('');
            setPassword('');
            setError(error.message);
        });
    };

    return (
        <div>
            <div className='nav'>
                <img
                    alt="Netflix Logo"
                    className="nav__logo"
                    src="https://res.cloudinary.com/dew1za4wz/image/upload/v1670898666/plants/React/Netflix_2015_logo.svg_pffsfl.png"
                    />
            </div>
            
            <div className='form-container'>
                <h1>Register</h1>

                {error && <div className='error'>{error}</div>}
                
                <form onSubmit={handleSignUp} method="POST">
                    <input placeholder="Enter your name"
                        value={firstName} onChange={({ target }) => setFirstName(target.value)}
                    />
                    <input type='email' placeholder="Email address"
                        value={emailAddress} onChange={({ target }) => setEmailAddress(target.value)}
                    />
                    <input type="password" placeholder="Password" autoComplete="off"
                        value={password} onChange={({ target }) => setPassword(target.value)}
                    />
                    <button disabled={isInvalid} type="submit">
                        SignUp
                    </button>
                </form>
                <p>
                Already a user? <Link to="/signin"><span>Sign in now.</span></Link>
                </p>
            </div>
        </div>
    );
}

export default SignupPage;
