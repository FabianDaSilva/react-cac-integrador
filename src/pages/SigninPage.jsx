import { useState, useContext } from 'react';
import { useNavigate, Link, Navigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import { FirebaseContext } from "../context/firebase";
import "../style/pages/signinPage.css";

const SigninPage = () => {
  const navigate = useNavigate();
  const { firebase } = useContext(FirebaseContext);
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const isInvalid = password === "" || emailAddress === "";

  const handleSignIn = (e) => {
    e.preventDefault();

        // Initialize Firebase Authentication and get a reference to the service
        const auth = getAuth(firebase);
        
        // firebase work here!
        signInWithEmailAndPassword(auth, emailAddress, password)
        .then((userCredential) =>  {
            
            const user = userCredential.user.email;
            
            sessionStorage.setItem('user', user);

            navigate('/home');
           
        })
        .catch((error) => {
            setEmailAddress('');
            setPassword('');
            setError(error.message);
        });
    };

    const loggedIn = sessionStorage.getItem("user");

    return (
        loggedIn
        ? <Navigate to='/home'/>
        :<div>
            <div className='nav'>
                <img
                    alt="Netflix Logo"
                    className="nav__logo"
                    src="https://res.cloudinary.com/dew1za4wz/image/upload/v1670898666/plants/React/Netflix_2015_logo.svg_pffsfl.png"
                    />
            </div>
            
            <div className='form-container'>
                <h1>Sign In</h1>

        {error && <div className="error">{error}</div>}

        <form method="POST" onSubmit={handleSignIn}>
          <input
            placeholder="Email address"
            type="email"
            value={emailAddress}
            onChange={({ target }) => setEmailAddress(target.value)}
          />
          <input
            autoComplete="off"
            placeholder="Password"
            type="password"
            value={password}
            onChange={({ target }) => setPassword(target.value)}
          />
          <button className="btn-form" disabled={isInvalid} type="submit">
            SignIn
          </button>
        </form>
        <p>
          New to Netflix?{" "}
          <Link to="/signup">
            <span>Sign up now.</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SigninPage;
