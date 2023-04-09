import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import LogIn from './pages/LogIn';
import Signup from './pages/Signup';
import Account from './pages/Account';
import { AuthContextProvider } from "./context/AuthContext";


function App() {
  return (
    <div className="App">
   <AuthContextProvider>
    <Nav/> 
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/login' element={<LogIn/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/account' element={<Account/>}/>
    </Routes>
   </AuthContextProvider>
    </div>
  );
}

export default App;
