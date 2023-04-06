import React from 'react'
import { toast, Toaster } from 'react-hot-toast'

// Firebase imports 
import { auth, provider} from '../../firebase'
import { createUserWithEmailAndPassword,  signInWithPopup, GoogleAuthProvider} from 'firebase/auth'
import { NavLink, useNavigate } from 'react-router-dom'

// IonIcon imports
import { IonIcon } from '@ionic/react'
import { logoGoogle } from 'ionicons/icons'

// formik imports
import { Formik, Form, Field, ErrorMessage} from 'formik'
import { validationSchema } from './utils/validationSchema'




const Signin = () => {
  const navigate = useNavigate()


  // This function handles signIn with email and password
  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const { email, password } = values;
      await createUserWithEmailAndPassword(auth, email, password);
      toast.success('Logged in successfully!');
      navigate('/login')
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      toast.error(errorCode, errorMessage)
    } finally {
      setSubmitting(false);
    }
  }

  
  // This function handles signin with google
  const handleClick = () => {
    return signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        console.log(user);
        toast.success('Logged in')
        navigate('/');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        toast.error(errorCode, errorMessage)
      });
  };
  

  return (
    <div className='w-screen h-screen '>
      <div className='w-screen h-screen z-[99999] fixed top-0 border border-amber-900 text-amber-900 bg-primary grid justify-items-center'>
        <Toaster/>
        <h1 className='mt-10 section-header'>Sign Up</h1>

        {/* Install zodd or formink for form validation */}
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

        <span onClick={handleClick}>
          <div className='h-10 w-auto flex bg-green-700 text-primary px-2 pt-2 focus-state'>
            <span className='text-2xl mr-2'>
              <IonIcon icon={logoGoogle}/>
            </span>
            Sign-in with Google</div>
        </span>

        <span className='flex justify-center text-amber-900 text-4xl my-2'>
          <h1>Already signed in? <NavLink to='/login'><h1 className='text-green-700'>Login</h1></NavLink></h1>
        </span>
      </div>

    </div>
  )
}

export default Signin







// createUserWithEmailAndPassword(auth, email, password)
    //   .then((userCredential) => {
    //     // Signed up
    //     const user = userCredential.user;
    //     console.log(user);
    //     navigate('/login')
    //   })
    //   .catch((error) => {
    //     const errorCode = error.code;
    //     const errorMessage = error.message;
    //     console.log(errorCode, errorMessage);
    //     toast.error(errorCode, errorMessage)
    //   });