import React from "react";

const Dashboard = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-5 rounded-lg shadow">
          <h3 className="text-gray-600">Total Students</h3>
          <p className="text-2xl font-bold">120</p>
        </div>

        <div className="bg-white p-5 rounded-lg shadow">
          <h3 className="text-gray-600">Active Students</h3>
          <p className="text-2xl font-bold">95</p>
        </div>

        <div className="bg-white p-5 rounded-lg shadow">
          <h3 className="text-gray-600">Total Teachers</h3>
          <p className="text-2xl font-bold">15</p>
        </div>

        <div className="bg-white p-5 rounded-lg shadow">
          <h3 className="text-gray-600">Total Courses</h3>
          <p className="text-2xl font-bold">8</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;