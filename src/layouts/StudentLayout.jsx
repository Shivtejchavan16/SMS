import { Outlet } from "react-router-dom";

function StudentLayout() {
  return (
    <div>
      <h2>Student Layout</h2>
      <Outlet />
    </div>
  );
}

export default StudentLayout;