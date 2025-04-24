import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './view/components/Navbar/Navbar';
import MobileNav from './view/components/MobileNav/MobileNav';

import Home from './view/pages/Home/Home';
import Courses from './view/pages/Courses/Courses';
import Dashboard from './view/pages/Dashboard/Dashboard';
import Ranking from './view/pages/Ranking/Ranking';
import Profile from './view/pages/Profile/Profile';
import CourseDetails from './view/pages/CourseDetails/CourseDetails';
import LessonPage from './view/pages/LessonPage/LessonPage';
import Quiz from './view/pages/Quiz/Quiz';
import Settings from './view/pages/Settings/Settings';
import Signin from './view/pages/Signin/Signin';
import Signup from './view/pages/Signup/Signup';


function App() {
  const location = useLocation();

  const hideNavRoutes = ['/signin', '/signup'];

  const hideNav = hideNavRoutes.includes(location.pathname);

  return (
    <>
      {!hideNav && <Navbar />}

      <div style={{ paddingBottom: hideNav ? '0' : '80px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/id" element={<CourseDetails />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/ranking" element={<Ranking />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/lesson/id" element={<LessonPage />} />
          <Route path="/quiz/id" element={<Quiz />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>

      {!hideNav && <MobileNav />}
    </>
  );
}

export default App;