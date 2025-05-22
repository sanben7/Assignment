import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import Navbar from './view/components/Navbar/Navbar';
import MobileNav from './view/components/MobileNav/MobileNav';
import AdminNav from './view/components/AdminNav/AdminNav';
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

import { AuthProvider, useAuth } from './context/AuthContext';

function AppContent() {
  const { currentUser, isAdmin } = useAuth();
  const location = useLocation();

  // Define public routes that don't require authentication
  const publicRoutes = ['/', '/signin', '/signup'];
  const isPublicRoute = publicRoutes.includes(location.pathname);

  // If not authenticated and trying to access a protected route, redirect to landing page
  if (!currentUser && !isPublicRoute) {
    return <Navigate to="/" replace />;
  }

  // If authenticated and trying to access a public route, redirect appropriately
  if (currentUser && isPublicRoute) {
    if (isAdmin) {
      return <Navigate to="/dashboard" replace />;
    }
    return <Navigate to="/home" replace />;
  }

  // If authenticated but not admin and trying to access admin route, redirect to home
  if (currentUser && !isAdmin && location.pathname.startsWith('/admin')) {
    return <Navigate to="/home" replace />;
  }

  // If authenticated but not admin and trying to access dashboard, redirect to home
  if (currentUser && !isAdmin && location.pathname === '/dashboard') {
    return <Navigate to="/home" replace />;
  }

  const adminPaths = ["/dashboard", "/admin/course", "/admin/lesson"];
  const isAdminRoute = adminPaths.some((path) =>
    location.pathname.startsWith(path)
  );

  // Define routes where navigation should be hidden
  const hideNavRoutes = [
    '/signin',
    '/signup',
    '/',
  ];

  // Check if current route should hide navigation
  const shouldHideNav = hideNavRoutes.some(route =>
    location.pathname === route ||
    location.pathname.startsWith('/quiz') ||
    location.pathname.startsWith('/lesson')
  );

  // Show navigation if:
  // 1. Not on a hideNavRoute
  // 2. Not on an admin route (admin routes have their own nav)
  const showNav = !shouldHideNav && !isAdminRoute;

  return (
    <>
      {isAdminRoute && <AdminNav />}
      {showNav && <Navbar />}
      {isAdminRoute && <AdminMobileNav />}
      {showNav && <MobileNav />}

      <div style={{ paddingBottom: shouldHideNav ? '0' : '80px' }}>
        <Routes>
          {/* Public routes */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />

          {/* Protected routes for authenticated users */}
          <Route path="/home" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/:id" element={<CourseDetails />} />
          <Route path="/ranking" element={<Ranking />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/lesson/:id" element={<LessonPage />} />
          <Route path="/quiz/:id" element={<Quiz />} />
          <Route path="/settings" element={<Settings />} />

          {/* Admin only routes */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/admin/courses" element={<AdminCoursesPage />} />
          <Route path="/admin/course/:id" element={<AdminCourseEdit />} />
          <Route path="/admin/lesson/:id" element={<AdminLessonPage />} />

          {/* Redirect any unknown routes to landing page */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </>
  );
}

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;