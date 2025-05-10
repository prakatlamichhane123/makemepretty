import './App.css';
import ExplorePage from './pages/ExplorePage.jsx';
import HomePage from './pages/HomePage.jsx';
import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import LoginPage from './pages/LoginPage.jsx';
import SignupPage from './pages/SignupPage.jsx';
import RootLayout from './layout/RootLayout.jsx';
import PageNotFound from './pages/PageNotFound.jsx';



export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout />} >
        <Route path='/login' element={<LoginPage/>} />
        <Route path='/signup' element={<SignupPage />} />
        <Route index element={<HomePage />} />
        <Route path='/explore' element={<ExplorePage />} />
        <Route path='/admin' element={<AdminPage />} />
        <Route path='*' element={<PageNotFound/>} />
      </Route>
    )
  )

  return (
    <RouterProvider router={router} />
  );
}