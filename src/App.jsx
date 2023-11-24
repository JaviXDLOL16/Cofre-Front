import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./Components/Page/Login"
import Register from "./Components/Page/Register"



function App() {

  return (
    <BrowserRouter>
      <Routes>
        
        <Route path="/Inicio-sesion" element={<Login />}></Route>
        <Route path="/Registro" element={<Register/>}></Route>
        
      </Routes>
    </BrowserRouter>
  )
}

export default App;