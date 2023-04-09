import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';

const Home = lazy(() => import('../Pages/Home'));
const About = lazy(() => import('../Pages/About'));
const Cart = lazy(() => import('../Pages/Cart/Cart'));
const MealsPage = lazy(() => import('../Pages/MealsPage'));
const TeamPage = lazy(() => import('../Pages/TeamPage'));
const Login = lazy(() => import('../Pages/Auth/Login'));
const Signup = lazy(() => import('../Pages/Auth/Signup'));

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Suspense fallback={<div>Loading...</div>}>
        <Home />
      </Suspense>} />
      <Route path="/about" element={<Suspense fallback={<div>Loading...</div>}>
        <About />
      </Suspense>} />
      <Route element={<ProtectedRoute />}>
        <Route path="/cart" element={<Suspense fallback={<div className='text-center text-3xl text-green-700 animate-pulse h-screen w-screen'>Loading...</div>}>
          <Cart />
        </Suspense>} />
      </Route>
      <Route path="/signup" element={<Suspense fallback={<div className='text-center text-3xl text-green-700 animate-pulse h-screen w-screen'>Loading...</div>}>
        <Signup />
      </Suspense>} />
      <Route path="/login" element={<Suspense fallback={<div className='text-center text-3xl text-green-700 animate-pulse h-screen w-screen'>Loading...</div>}>
        <Login />
      </Suspense>} />
      <Route path="/meals/:name" element={<Suspense fallback={<div className='text-center text-3xl text-green-700 animate-pulse h-screen w-screen'>Loading...</div>}>
        <MealsPage />
      </Suspense>} />
      <Route path="/profile/:name" element={<Suspense fallback={<div className='text-center text-3xl text-green-700 animate-pulse h-screen w-screen'>Loading...</div>}>
        <TeamPage />
      </Suspense>} />
    </Routes>
  );
};

export default AppRoutes;