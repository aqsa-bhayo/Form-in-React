import React, { useEffect, useState } from 'react';
import './contact.css';


const Contact = () => {
  const [userDetails, setUserDetails] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    confirmPassword: "",
  });

  // error
  const [userErr, setUserErr] = useState({
    emailErr: false,
    passwordErr: false,
    confirmPasswordErr: false,
    firstNameErr: false,
    lastNameErr: false,
  });

  const signInHandler = (e) => {
    e.preventDefault();

    if (userDetails.firstName === "" && userDetails.lastName === "" && userDetails.email === "" && userDetails.password === "" && userDetails.confirmPassword === ""){
      setUserErr({firstNameErr: true, lastNameErr:true, emailErr:true, passwordErr:true, confirmPasswordErr:true});
    }

    
      console.log(userDetails);
    
  };

  useEffect(() => {
    if (userDetails.firstName !== ""){
      setUserErr({ ...userErr, firstNameErr:false});
    }

    if (userDetails.lastName !== ""){
      setUserErr({ ...userErr, lastNameErr:false});
    }

    if (userDetails.email !== ""){
      setUserErr({ ...userErr, emailErr:false});
    }

    if (userDetails.password !== ""){
      setUserErr({ ...userErr, passwordErr:false});
    }

    if (userDetails.confirmPassword !== ""){
      setUserErr({ ...userErr, confirmPasswordErr:false});
    }
    
  }, [userDetails]);

  return (
    <div>
      <main className="form-signin w-100 m-auto">
        <form onSubmit={signInHandler}>
          <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

          <div className="form-floating">
            <h6>First Name</h6>
            <input
              type="text"
              className="form-control"
              id="floatingInputFirstName"
              placeholder=""
              value={userDetails.firstName}
              onChange={(e) =>
                setUserDetails({ ...userDetails, firstName: e.target.value })
              }
              style={{ border: userErr.firstNameErr ? "2px solid red" : "" }} 
            />
            {userErr.firstNameErr && (
              <span className="text-danger">Enter your first name.</span>
            )}
          </div>

          <div className="form-floating mt-3">
            <h6>Last Name</h6>
            <input
              type="text"
              className="form-control"
              id="floatingInputLastName"
              placeholder=""
              value={userDetails.lastName}
              onChange={(e) =>
                setUserDetails({ ...userDetails, lastName: e.target.value })
              }
              style={{ border: userErr.lastNameErr ? "2px solid red" : "" }}
            />
            {userErr.lastNameErr && (
              <span className="text-danger">Enter your last name.</span>
            )}
          </div>

          <div className="form-floating mt-3">
            <h6>Email Address</h6>
            <input
              type="email"
              className="form-control"
              id="floatingInputEmail"
              value={userDetails.email}
              placeholder="name@example.com"
              onChange={(e) =>
                setUserDetails({ ...userDetails, email: e.target.value })
              }
              style={{ border: userErr.emailErr ? "2px solid red" : "" }}
            />
            {userErr.emailErr && (
              <span className="text-danger">Enter your email.</span>
            )}
          </div>

          <div className="form-floating mt-3">
            <h6>Password</h6>
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
              value={userDetails.password}
              onChange={(e) =>
                setUserDetails({ ...userDetails, password: e.target.value })
              }
              style={{ border: userErr.passwordErr ? "2px solid red" : "" }}
            />
            {userErr.passwordErr && (
              <span className="text-danger">Enter your password.</span>
            )}
          </div>

          <div className="form-floating mt-3">
            <h6>Confirm Password</h6>
            <input
              type="password"
              className="form-control"
              id="floatingConfirmPassword"
              placeholder="Confirm Password"
              value={userDetails.confirmPassword}
              onChange={(e) =>
                setUserDetails({
                  ...userDetails,
                  confirmPassword: e.target.value,
                })
              }
              style={{
                border: userErr.confirmPasswordErr ? "2px solid red" : "",
              }}
            />
            {userErr.confirmPasswordErr && (
              <span className="text-danger">Confirm your password.</span>
            )}
          </div>

          <div className="checkbox mb-3">
            <label>
              <input type="checkbox" value="remember-me" /> Remember me
            </label>
          </div>

          <button className="w-100 btn btn-lg btn-warning" type="submit">
            Sign in
          </button>
          <p className="mt-5 mb-3 text-muted">&copy; 2017–2022</p>
        </form>
      </main>
    </div>
  );
};

export default Contact;
