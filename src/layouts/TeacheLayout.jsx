import { Outlet } from "react-router-dom";

function TeacherLayout() {
  return (
    <div>
      <h2>Teacher Layout</h2>
      <Outlet />
    </div>
  );
}

export default TeacherLayout;