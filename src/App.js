import './App.css';
import Header from './components/header';
import Main from './components/main';
import Footer from './components/footer';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css"
import { AuthProvider } from './Context/AuthContext';
import { useState } from 'react';

function App() {

  const [isNav, setIsNav] = useState(false);

  return (
    <div className='App'>
      <AuthProvider>
        <Header setIsNav={setIsNav}/>
        <Main isNav = {isNav} setIsNav={setIsNav}/>
        <Footer/>
        <ToastContainer/>
      </AuthProvider>
    </div>
  );
}

export default App;
