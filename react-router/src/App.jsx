import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./screens/Home/Home";
import BlogList from "./screens/BlogList/BlogList";
import NotFound from "./screens/NotFound/NotFound";
import BlogDetail from "./screens/BlogDetail/BlogDetail";
import Navbar from "./components/NavBar";
import { Navigate } from "react-router-dom";
import "./App.css";
import Dashboard from "./screens/Dashboard/Dashboard";
import Posts from "./screens/Dashboard/Posts";
import Stats from "./screens/Dashboard/Stats";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<BlogList />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
          <Route path="/old-blog" element={<Navigate to="/blog" />} />
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="posts" element={<Posts />} />
            <Route path="stats" element={<Stats />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
