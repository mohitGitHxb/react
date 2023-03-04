import { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import UserProfile from './components/Profile/UserProfile';
import AuthContext from './components/store/auth-context';
import AuthPage from './pages/AuthPage';
import HomePage from './pages/HomePage';

function App() {
  const authCtx = useContext(AuthContext);
  return (
    <Layout>
      <Routes>
      <Route path='/' element={<HomePage />}>
        </Route>
        {!authCtx.isLoggedIn && <Route path='/auth' element={ <AuthPage />}/>}
   {authCtx.isLoggedIn && <Route path='/profile' element={<UserProfile />}/>}
   <Route path='*' errorElement={<AuthPage/>} element={<HomePage/>}/>
      </Routes>
    </Layout>
  );
}

export default App;