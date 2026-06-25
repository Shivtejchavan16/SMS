import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ManageTeacher from './pages/admin/ManageTeacher';
import AddTeacher from './pages/admin/AddTeacher';
import EditTeacher from './pages/admin/EditTeacher';
// Ithe baki tumche components import kara

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Tumche baki routes */}
        <Route path="/" element={<h1>Dashboard</h1>} />
        
        {/* Teacher Management Routes */}
        <Route path="/admin/teachers" element={<ManageTeacher />} />
        <Route path="/admin/teachers/add" element={<AddTeacher />} />
        <Route path="/admin/teachers/edit/:id" element={<EditTeacher />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;