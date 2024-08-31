// src/App.js
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom'; // Import Navigate for redirecting
import Feedback from './components/Feedback';
import FinishSignUp from './components/FinishSignUp';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import JobAssignment from './components/JobAssignment';
import JobList from './components/JobList';
import Login from './components/Login';
import PeopleList from './components/PeopleList';
import Reassignment from './components/Reassignment';
import Register from './components/Register';
import SalaryProcessing from './components/SalaryProcessing';
import Settings from './components/Settings';
import { useAuth } from './context/AuthContext';

const App = () => {
    const { isAuthenticated } = useAuth();

    return (
        <Router>
            <Header />
            <main>
                <Routes>
                    <Route path="/" element={isAuthenticated ? <Navigate to="/home" /> : <Login />} />
                    <Route path="/home" element={isAuthenticated ? <Home /> : <Navigate to="/" />} />
                    <Route path="/register" element={isAuthenticated ? <Navigate to="/home" /> : <Register />} />
                    <Route path="/jobs" element={isAuthenticated ? <JobList /> : <Navigate to="/" />} />
                    <Route path="/people" element={isAuthenticated ? <PeopleList /> : <Navigate to="/" />} />
                    <Route path="/assign" element={isAuthenticated ? <JobAssignment /> : <Navigate to="/" />} />
                    <Route path="/reassign" element={isAuthenticated ? <Reassignment /> : <Navigate to="/" />} />
                    <Route path="/salary" element={isAuthenticated ? <SalaryProcessing /> : <Navigate to="/" />} />
                    <Route path="/settings" element={isAuthenticated ? <Settings /> : <Navigate to="/" />} />
                    <Route path="/feedback" element={isAuthenticated ? <Feedback /> : <Navigate to="/" />} />
                    <Route path="/finishSignUp" element={isAuthenticated ? <FinishSignUp /> : <Navigate to="/" />} />
                </Routes>
            </main>
            <Footer />
        </Router>
    );
};

export default App;
