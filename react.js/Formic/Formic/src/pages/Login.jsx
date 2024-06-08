import React from 'react'
import { useFormik } from 'formik'

const initialValues ={
    firstname:'',
    lastname:'',
    email:'',
    password:''
}

const onSubmit = values => {
    console.log('for Data' , values);
}

const validate = values => {
    let error = {}
        if(!values.firstname){
            error.firstname = 'First Name is Required'
        }

        if(!values.lastname){
            error.lastname = 'Last Name is Required'
        }

        if(!values.email){
            error.email = 'Email is Required'
        }else if(
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
            error.email = 'Invalid email address';
          }

        if(!values.password){
            error.password = 'Password  is Required'
        }
        return error
}

const Login = () => {

    const formik = useFormik({
        initialValues,
        onSubmit,
        validate
    })

    console.log('formik data' , formik.values);
    console.log('form error' , formik.errors);

  return (
    <div>
        <h1 className='text-2xl font-bold'>Login Page</h1>
        <div className='h-screen flex justify-center items-center bg-gray-500'>
            <form onSubmit={formik.handleSubmit} className='bg-blue-300 p-4'>
                <div>
                    <label htmlFor='firstname'>FirstName</label><br /><br />
                    <input type="text" name='firstname' id='firstname' value={formik.values.firstname} onChange={formik.handleChange}/>
                    {
                        formik.errors.firstname ? <div>{formik.errors.firstname}</div> : null
                    }
                </div>
                <div>
                    <label htmlFor='lastname'>LastName</label><br /><br />
                    <input type="text" name='lastname' id='lastname' value={formik.values.lastname} onChange={formik.handleChange}/>
                    {
                        formik.errors.lastname ? <div>{formik.errors.lastname}</div> : null
                    }
                </div>
                <div>
                    <label htmlFor='email'>Email</label><br /><br />
                    <input type="email" name='email' id='email' value={formik.values.email} onChange={formik.handleChange}/>
                    {
                        formik.errors.email ? <div>{formik.errors.email}</div> : null
                    }
                </div>
                <div>
                    <label htmlFor='password'>Password</label><br /><br />
                    <input type="password" name='password' id='password' value={formik.values.password} onChange={formik.handleChange}/><br /><br />
                    {
                        formik.errors.password ? <div>{formik.errors.password}</div> : null
                    }
                </div>

                <button type='submit' className='bg-blue-500 p-3 border-2 border-black text-white font-bold'>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default Login