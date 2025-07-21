import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./screens/Home/Home";
import NotFound from "./screens/NotFound/NotFound";
import Header from "./components/Header/Header";
import JobList from "./screens/JobList/JobList";
import JobManager from "./screens/Admin/JobManager/JobManager";
import AddJob from "./screens/Admin/AddJob/AddJob";
import JobDetail from "./screens/JobDetail/JobDetail";
import Admin from "./screens/Admin/Admin";
import { JobProvider } from "./context/JobContext";
import Navigate from "./components/Navigate/Navigate";
import "./App.css";
function App() {
  return (
    <>
      <JobProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/jobs" element={<JobList />} />
            <Route path="/jobs/:id" element={<JobDetail />} />
            <Route path="/admin" element={<Admin />}>
              <Route path="jobs" element={<JobManager />} />
              <Route path="add" element={<AddJob />} />
            </Route>
            <Route path="/careers" element={<Navigate />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </JobProvider>
    </>
  );
}

export default App;
