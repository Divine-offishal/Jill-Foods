import React, { useState } from 'react'
import {auth} from '../../firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { toast, Toaster } from 'react-hot-toast'

import { Formik, Form, Field, ErrorMessage} from 'formik'
import { validationSchema } from './utils/validationSchema'

const Login = () => {

  const navigate = useNavigate()

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const { email, password } = values;
      await signInWithEmailAndPassword(auth, email, password);
      toast.success('Logged in successfully!');
      navigate('/cart')
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      toast.error(errorCode, errorMessage)
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className='w-screen h-screen '>
      <div className='w-screen h-screen border border-amber-900 z-[99999] fixed top-0 right-0 text-amber-900 bg-primary grid justify-items-center'>
        <Toaster/>
        <h1 className='mt-10 section-header'>Login</h1>

        {/* Install zodd or formink for form validation */}
        {/* <form onSubmit={handleSubmit} className='grid justify-items-center w-10/12'>
          <input className='h-10 max-input' placeholder='Your email' type='email' onChange={(e) => setEmail(e.target.value)}></input>
          <input className='h-10 max-input' placeholder='Your password' type='password' onChange={(e) => setPassword(e.target.value)}></input>
          <button type='submit' className='h-8 w-auto text-primary bg-green-700 px-2 focus-state'>Submit</button>
        </form> */}

        <Formik 
            initialValues={{ email: '', password: '' }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}>
            {({isSubmitting}) => (
              <Form className='grid justify-items-center w-9/12'>
                <div className='w-full grid justify-items-center my-4'>
                  <Field type="email" name="email" placeholder="Email" className='h-10 w-9/12 max-input '/>
                  <ErrorMessage name="email" component="div" className='text-red-500 text-xl font-bold'/>
                </div>
                <div className='w-full grid justify-items-center my-4'>
                  <Field type="password" name="password" placeholder="password" className='h-10 w-9/12 max-input'/>
                  <ErrorMessage name="password" component="div" className='text-red-500 text-xl font-bold'/>
                </div>
                
                <div>
                  <button type='submit' className='bg-green-700 h-8 px-2 text-primary focus-state disabled:bg-green-700/50' disabled={isSubmitting}>Submit</button>
                </div>
              </Form>
            )}

        </Formik>
      </div>
    </div>
  )
}

export default Login