import Auth from "./components/auth";
import Dashboard from "./components/dashboard";
import { useUserContext } from "./context/userContext";
import "./index.css";

///////Thabelo:
import PostsT from "./components/PostsT";
import AllPostsT  from "./components/AllPostsT";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom" ;
///////Thabelo:

function App() {
  const { user, loading, error } = useUserContext();

  return (
    <div className="App">
      {error && <p className="error">{error}</p>}
      {loading ? <h2>Loading...</h2> : <> {user ? <Dashboard /> : <Auth />} </>}
       
       {/* Thabelo: */}
      <Router>
      <Routes>
        <Route path="/createposts" element={<PostsT/>}/>
        <Route path="/allposts" element={<AllPostsT/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
      </Routes>
      </Router>
    {/* Thabelo */}
       
      
    </div>
    
  );
}

export default App;
