import Auth from "./components/auth";
import Dashboard from "./components/dashboard";
import { useUserContext } from "./context/userContext";
import ResetPassword from './components/resetPassword';
import { BrowserRouter, Route, Routes } from 'react-router-dom';        //imports for routing

function App() {
  const { user, loading, error } = useUserContext();

  return (
    <BrowserRouter>
      <div className="App">
        {error && <p className="error">{error}</p>}
        {loading ? <h2>Loading...</h2> : <> {user ? <Dashboard /> : <Auth />} </>}
        
        //new code - routing
        <Routes>
          <Route path='/reset'> element={<ResetPassword/>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
