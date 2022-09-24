import Auth from "./components/auth";
import Dashboard from "./components/dashboard";
import Profile from "./components/profile";
import { useUserContext } from "./context/userContext";
import "./index.css";

///////Thabelo: These are the imports necessary for changing pages using urls/routing. Also going to be used to link to the Navigation Bar.
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
       
       {/* Thabelo: This is the routing process */}
      <Router>
      <Routes>
        <Route path="/createposts" element={<PostsT/>}/>
        <Route path="/posts" element={<AllPostsT/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/profile" element={<Profile/>}></Route>
      </Routes>
      </Router>
    {/* Thabelo */}
       
      
    </div>
    
  );
}

export default App;
