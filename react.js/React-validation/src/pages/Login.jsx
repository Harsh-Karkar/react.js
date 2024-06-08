import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

const Login = ({ handleSignIn }) => {
  return (
    <div>
      <div className="bg-blue-400 p-8 border-2 border-solid border-blue-600 rounded-lg">
        <h2 className="text-center text-white font-bold text-2xl">Sign In</h2>
        <Formik
          initialValues={{ email: '', password: '' }}
          onSubmit={handleSignIn}
        >
          {({ isSubmitting }) => (
            <Form>
              <div className="mt-4">
                <Field type="email" name="email" placeholder="Email" className="p-2 rounded border border-gray-400" />
                <ErrorMessage name="email" component="div" className="text-red-500" />
              </div>
              <div className="mt-4">
                <Field type="password" name="password" placeholder="Password" className="p-2 rounded border border-gray-400" />
                <ErrorMessage name="password" component="div" className="text-red-500" />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-blue-600 w-full mt-4 py-2 text-white font-bold rounded hover:bg-blue-700"
              >
                Sign In
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Login;
