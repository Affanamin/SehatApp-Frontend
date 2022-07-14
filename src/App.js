import './App.css';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import {useState} from 'react';
import { UserContext } from './components/UserContext.js';
import Navbar from './pages/Navbar';
import { HomePage } from './pages/HomePage';
import { Login } from './pages/Login';
import { RegistrationForm } from './pages/RegistrationForm';
import { PatientHome } from './pages/PatientHome';
import { DoctorHome } from './pages/DoctorHome';
import { ConsultationForm } from './pages/ConsultationForm';
//import { ConsultationForm } from './pages/ConsultationForm';

import AboutPage  from './pages/AboutPage';

function App() {
  
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));

  return (
    <div className="App">
      <BrowserRouter>
      <UserContext.Provider value = {{user, setUser}}>
      <Navbar></Navbar>
        <Routes>
          
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/about" element={< AboutPage />}/>
          <Route path="/register" element={< RegistrationForm />}></Route>
          <Route path="/patient" element={< PatientHome />}></Route>
          <Route path="/doctor" element={< DoctorHome />}></Route>

          {/* <Route path="/consult" element={< ConsultationForm />}></Route> */}
          <Route path="/consult" element={< ConsultationForm />}></Route>



          
          
          
        </Routes>
        </UserContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
