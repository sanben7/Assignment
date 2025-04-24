import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './view/components/Navbar/Navbar';
import MobileNav from './view/components/MobileNav/MobileNav';
import AdminNav from './view/components/AdminNav/AdminNav'; // חדש
import AdminMobileNav from './view/components/AdminMobileNav/AdminMobileNav';


import LandingPage from './view/pages/LandingPage/LandingPage';
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
import AdminCoursesPage from './view/pages/AdminCoursesPage/AdminCoursesPage';
import AdminCourseEdit from './view/pages/AdminCourseEdit/AdminCourseEdit';
import AdminLessonPage from './view/pages/AdminLessonPage/AdminLessonPage';



function App() {
  const location = useLocation();

  const adminPaths = ["/dashboard", "/admin/course", "/admin/lesson"];
  const isAdminRoute = adminPaths.some((path) => location.pathname.startsWith(path));

  const hideNavRoutes = [
    '/signin',
    '/signup',
    '/quiz/id',
    '/lesson/id',
    '/quiz/:id',
    '/lesson/:id',
    '/landingpage',
  ];

  const hideNav = hideNavRoutes.includes(location.pathname) || isAdminRoute;

  return (
    <>

      {isAdminRoute && <AdminNav />}
      {!hideNav && !isAdminRoute && <Navbar />}
      {isAdminRoute && <AdminMobileNav />}
      {!hideNav && !isAdminRoute && <MobileNav />}

      <div style={{ paddingBottom: hideNav ? '0' : '80px' }}>
        <Routes>
          <Route path="/landingpage" element={<LandingPage />} />
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
          <Route path="/admin/courses" element={<AdminCoursesPage />} />
          <Route path="/admin/course/id" element={<AdminCourseEdit />} />
          <Route path="/admin/lesson/id" element={<AdminLessonPage />} />


        </Routes>
      </div>

      {!hideNav && <MobileNav />}
    </>
  );
}

export default App;
