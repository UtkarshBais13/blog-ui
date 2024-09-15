import Topbar from "./topbar/Topbar"
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Seetings from "./pages/seetings/Seetings";
import Single from "./pages/home/single/Single"
import Write from "./pages/write/Write";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useContext } from "react";
import { Context, ContextProvider } from "./contest/Context";
function App() {
  const {user} = useContext(Context) ;
  
  return (
  <ContextProvider>
    <Router>
    <Topbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/posts" element={<Home />} />
      <Route path="/register" element={user ? <Home /> : <Register />} />
      <Route path="/login" element={user ? <Home /> : <Login />} />
      <Route path="/post/:id" element={<Single />} />
      <Route path="/write" element={ user? <Write />:<Login/> }/>
      <Route path="/settings" element={user ? <Seetings /> : <Login />} />
    </Routes>
  </Router>
  </ContextProvider>
  );
}

export default App
