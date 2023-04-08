import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import { AuthContextProvider } from "./context/AuthContext";


function App() {
  return (
    <div className="App">
   <AuthContextProvider>
    <Nav/> 
    <Routes>
      <Route path='/' element={<Home/>} />
    </Routes>
   </AuthContextProvider>
    </div>
  );
}

export default App;
