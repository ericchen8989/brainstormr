import React, {useRef, useState, useEffect, useContext, Component} from 'react';
import AuthContext from '../components/context/AuthProvider';

import axios from './api/axios';
const LOGIN_URL = '/auth';

import Navbar from '../components/Layouts/Navbar';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/Layouts/Footer';
import Link from 'next/link';

const Login = () => {
  const {setAuth} = useContext(AuthContext);
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState('');
  const [pwd, setPwd] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg('');
  }, [user, pwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        LOGIN_URL,
        JSON.stringify({user, pwd}),
        {
          headers: {'Content-Type': 'application/json'},
          withCredentials: true,
        },
      );
      console.log(JSON.stringify(response?.data));
      //console.log(JSON.stringify(response));
      const accessToken = response?.data?.accessToken;
      const roles = response?.data?.roles;
      setAuth({user, pwd, roles, accessToken});
      setUser('');
      setPwd('');
      setSuccess(true);
    } catch (err) {
      if (!err?.response) {
        setErrMsg('No Server Response');
      } else if (err.response?.status === 400) {
        setErrMsg('Missing Username or Password');
      } else if (err.response?.status === 401) {
        setErrMsg('Unauthorized');
      } else {
        setErrMsg('Login Failed');
      }
      errRef.current.focus();
    }
  };

  return (
    <>
      {success ? (
        <section>
          <h1>You are logged in!</h1>
          <br />
          <p>
            <a href="/">Go to Home</a>
          </p>
        </section>
      ) : (
        <>
          <Navbar />
          <PageBanner
            pageTitle="Login"
            homePageUrl="/"
            homePageText="Home"
            activePageText="Login"
          />
          <div className="user-area-all-style log-in-area ptb-100">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="contact-form-action">
                    <div className="form-heading text-center">
                      <p
                        ref={errRef}
                        className={errMsg ? 'errmsg' : 'offscreen'}
                        aria-live="assertive">
                        {errMsg}
                      </p>
                      <h3 className="form-title">Login to your account!</h3>
                    </div>

                    <form onSubmit={handleSubmit}>
                      <div className="row">
                        <div className="col-lg-4 col-md-4 col-sm-12">
                          <a href="#" className="default-btn mb-30">
                            <i className="bx bxl-google"></i> Google
                          </a>
                        </div>

                        <div className="col-lg-4 col-md-4 col-sm-12">
                          <a href="#" className="default-btn mb-30">
                            <i className="bx bxl-facebook"></i> Facebook
                          </a>
                        </div>

                        <div className="col-lg-4 col-md-4 col-sm-12">
                          <a href="#" className="default-btn mb-30">
                            <i className="bx bxl-twitter"></i> Twitter
                          </a>
                        </div>

                        <div className="col-12">
                          <div className="form-group">
                            <label htmlFor="username">Username or Email:</label>
                            <input
                              className="form-control"
                              type="text"
                              name="name"
                              placeholder="Username or Email"
                              id="username"
                              ref={userRef}
                              autoComplete="off"
                              onChange={(e) => setUser(e.target.value)}
                              value={user}
                              required
                            />
                          </div>
                        </div>

                        <div className="col-12">
                          <div className="form-group">
                            <label htmlFor="password">Password:</label>
                            <input
                              className="form-control"
                              type="password"
                              name="password"
                              placeholder="Password"
                              id="password"
                              onChange={(e) => setPwd(e.target.value)}
                              value={pwd}
                              required
                            />
                          </div>
                        </div>

                        <div className="col-lg-6 col-sm-6 form-condition">
                          <div className="agree-label">
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="gridCheck"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="gridCheck">
                                Remember me
                              </label>
                            </div>
                          </div>
                        </div>

                        <div className="col-lg-6 col-sm-6">
                          <Link href="/recover-password">
                            <a className="forget">Forgot my password?</a>
                          </Link>
                        </div>

                        <div className="col-12">
                          <button className="default-btn btn-two" type="submit">
                            Log In Now
                          </button>
                        </div>

                        <div className="col-12">
                          <p className="account-desc">
                            Not a member?
                            <Link href="/sign-up">
                              <a>Register</a>
                            </Link>
                          </p>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </>
      )}
    </>
  );
};

export default Login;
