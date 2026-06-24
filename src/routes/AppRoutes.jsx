import { createBrowserRouter } from "react-router-dom";

import PublicLayout from "../layouts/PublicLayout";
import AuthLayout from "../layouts/AuthLayout";
import AdminLayout from "../layouts/AdminLayout";
import TeacherLayout from "../layouts/TeacheLayout";
import StudentLayout from "../layouts/StudentLayout";

import ProtectedRoute from "../components/ProtectedRoute";
import RoleRoute from "../components/RoleRoute";

// Public
import Home from "../pages/public/Home";
import About from "../pages/public/About";
import Courses from "../pages/public/Courses";
import CourseDetails from "../pages/public/CourseDtails";
import Contact from "../pages/public/Contact";
import NotFound from "../pages/public/NotFound";

// Auth
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import ForgotPassword from "../pages/auth/ForgotPasswordd";
import ResetPassword from "../pages/auth/ResetPassword";

// Admin
import Dashboard from "../pages/admin/Dashboard";
import AddStudent from "../pages/admin/AddStudent";
import EditStudent from "../pages/admin/EditStudent";
import AddTeacher from "../pages/admin/AddTeacher";
import EditTeacher from "../pages/admin/EditTeacher";
import ManageStudents from "../pages/admin/ManageStudents";
import ManageTeacher from "../pages/admin/ManageTeacher";
import ManageCourses from "../pages/admin/ManageCourses";
import Reports from "../pages/admin/Reports";
import Setting from "../pages/admin/Setting";

// Teacher
import TeacherDashboard from "../pages/teacher/Dashboard";
import Students from "../pages/teacher/Students";
import StudentDetail from "../pages/teacher/StudentDetail";
import CreateExam from "../pages/teacher/CreateExam";
import TeacherReports from "../pages/teacher/Reports";
import TeacherSetting from "../pages/teacher/Setting";

// Student
import StudentDashboard from "../pages/student/Dashboard";
import Profile from "../pages/student/Profile";
import Exam from "../pages/student/Exam";
import StartExam from "../pages/student/StartExam";
import Results from "../pages/student/Results";
import ResultDetails from "../pages/student/ResultDetails";
import StudentSetting from "../pages/student/Setting";

export const router = createBrowserRouter([
  {
    element: <PublicLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/courses", element: <Courses /> },
      { path: "/courses/:id", element: <CourseDetails /> },
      { path: "/contact", element: <Contact /> }
    ]
  },

  {
    element: <AuthLayout />,
    children: [
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
      { path: "/forgot-password", element: <ForgotPassword /> },
      { path: "/reset-password", element: <ResetPassword /> }
    ]
  },

  {
    path: "/admin",
    element: (
      <ProtectedRoute>
        <RoleRoute allowedRoles={["admin"]}>
          <AdminLayout />
        </RoleRoute>
      </ProtectedRoute>
    ),
    children: [
      { path: "dashboard", element: <Dashboard /> },
      { path: "students", element: <ManageStudents /> },
      { path: "students/add", element: <AddStudent /> },
      { path: "students/edit/:id", element: <EditStudent /> },

      { path: "teachers", element: <ManageTeacher /> },
      { path: "teachers/add", element: <AddTeacher /> },
      { path: "teachers/edit/:id", element: <EditTeacher /> },

      { path: "courses", element: <ManageCourses /> },
      { path: "reports", element: <Reports /> },
      { path: "settings", element: <Setting /> }
    ]
  },

  {
    path: "/teacher",
    element: (
      <ProtectedRoute>
        <RoleRoute allowedRoles={["teacher"]}>
          <TeacherLayout />
        </RoleRoute>
      </ProtectedRoute>
    ),
    children: [
      { path: "dashboard", element: <TeacherDashboard /> },
      { path: "students", element: <Students /> },
      { path: "students/:id", element: <StudentDetail /> },
      { path: "create-exam", element: <CreateExam /> },
      { path: "reports", element: <TeacherReports /> },
      { path: "settings", element: <TeacherSetting /> }
    ]
  },

  {
    path: "/student",
    element: (
      <ProtectedRoute>
        <RoleRoute allowedRoles={["student"]}>
          <StudentLayout />
        </RoleRoute>
      </ProtectedRoute>
    ),
    children: [
      { path: "dashboard", element: <StudentDashboard /> },
      { path: "profile", element: <Profile /> },
      { path: "exam", element: <Exam /> },
      { path: "exam/:id/start", element: <StartExam /> },
      { path: "results", element: <Results /> },
      { path: "results/:id", element: <ResultDetails /> },
      { path: "settings", element: <StudentSetting /> }
    ]
  },

  {
    path: "*",
    element: <NotFound />
  }
]);