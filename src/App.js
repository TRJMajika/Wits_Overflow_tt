import Auth from "./components/auth";
import Dashboard from "./components/dashboard";
import { useUserContext } from "./context/userContext";
import "./index.css";
//import ResetPassword from './components/resetPassword';
//import { BrowserRouter, Route, Routes } from 'react-router-dom';        //imports for routing

function App() {
  const { user, loading, error } = useUserContext();

  return (
    
      <div className="App">
        {error && <p className="error">{error}</p>}
        {loading ? <h2>Loading...</h2> : <> {user ? <Dashboard /> : <Auth />} </>}
        
        
        
      </div>
   
  );
}

export default App;
