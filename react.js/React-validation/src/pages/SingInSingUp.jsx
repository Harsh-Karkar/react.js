import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Home from "./Home";
import Login from "./Login";

const SignInSignUp = () => {
  const [showLogin, setShowLogin] = useState(false);
  const localSignUp = localStorage.getItem("signUp");
  const localEmail = localStorage.getItem("email");
  const localPassword = localStorage.getItem("password");
  const localName = localStorage.getItem("name");

  const handleSignIn = (values, { setSubmitting }) => {
    if (values.email === localEmail && values.password === localPassword) {
      localStorage.setItem("signUp", values.email);
      window.location.reload();
    } else {
      alert("Invalid Email or Password");
    }
    setSubmitting(false);
  };

  const handleSubmit = (values, { setSubmitting }) => {
    if (values.name && values.email && values.password) {
      localStorage.setItem("name", values.name);
      localStorage.setItem("email", values.email);
      localStorage.setItem("password", values.password);
      localStorage.setItem("signUp", values.email);
      alert("Account Successfully Created");
      window.location.reload();
    }
    setSubmitting(false);
  };

  return (
    <div>
      {localSignUp ? (
        <Home />
      ) : showLogin ? (
        <Login handleSignIn={handleSignIn} />
      ) : (
        <div className="flex h-screen bg-indigo-600 justify-center items-center">
          <div className="bg-white p-12 border-4 border-solid border-gray-700">
            <figcaption className="text-center font-bold text-xl text-gray-800">Sign Up</figcaption>
            <Formik
              initialValues={{ name: '', email: '', password: '' }}
              validate={(values) => {
                const errors = {};
                if (!values.name) {
                  errors.name = 'Required valid name';
                }
                if (!values.email) {
                  errors.email = 'Required valid email';
                } else if (
                  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                  errors.email = 'Invalid email address';
                }
                if (!values.password) {
                  errors.password = 'Required valid password';
                }
                return errors;
              }}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting }) => (
                <Form>
                  <div className="mt-4">
                    <Field type="text" name="name" placeholder="Name" className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                    <ErrorMessage name="name" component="div" className="text-red-500" />
                  </div>
                  <div className="mt-4">
                    <Field type="email" name="email" placeholder="Email" className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                    <ErrorMessage name="email" component="div" className="text-red-500" />
                  </div>
                  <div className="mt-4">
                    <Field type="password" name="password" placeholder="Password" className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                    <ErrorMessage name="password" component="div" className="text-red-500" />
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-indigo-700 w-full mt-4 py-2 text-white font-bold rounded-md hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  >
                    Sign Up
                  </button>
                </Form>
              )}
            </Formik>
            <p className="mt-4 text-center cursor-pointer text-indigo-500" onClick={() => setShowLogin(true)}>Already have an account? Sign In</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default SignInSignUp;
