'use client';

const ProfilePage = () => {
  const handleLogout = () => {
    console.log("Logged out");
    window.location.href = "/Login"; // Redirect to Login Page
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md text-center">
        {/* Avatar Section */}
        <div className="mb-6">
          <div className="w-24 h-24 rounded-full mx-auto border-4 border-blue-500 overflow-hidden">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPGBxaYdGHEpJ9001ON09kQBXAnqZaCYG3--fcJQUAIbkQAjWc-BpxmbgwJrzURi0j8gc&usqp=CAU" // Replace with the staff's avatar URL
              alt="Avatar"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Staff Information */}
        <h1 className="text-2xl font-bold text-gray-800 mb-2">Muhammed</h1> {/* Replace with dynamic name */}
        <p className="text-gray-600 mb-6">muhammed@example.com</p> {/* Replace with dynamic email */}

        {/* Job Details */}
        <div className="text-left mb-6">
          <p className="text-gray-700">
            <span className="font-bold">Role:</span> Software Developer {/* Replace with dynamic role */}
          </p>
          <p className="text-gray-700 mt-2">
            <span className="font-bold">Employee ID:</span> EMP12345 {/* Replace with dynamic employee ID */}
          </p>
          <p className="text-gray-700 mt-2">
            <span className="font-bold">Department:</span> IT Department {/* Replace with dynamic department */}
          </p>
          <p className="text-gray-700 mt-2">
            <span className="font-bold">Joining Date:</span> January 15, 2020 {/* Replace with dynamic date */}
          </p>
        </div>

        {/* Attendance Summary */}
        <div className="text-left mb-6">
          <h2 className="text-lg font-bold text-gray-800 mb-2">Attendance Summary</h2>
          <p className="text-gray-700">
            <span className="font-bold">Days Present:</span> 220
          </p>
          <p className="text-gray-700 mt-2">
            <span className="font-bold">Days Absent:</span> 15
          </p>
          <p className="text-gray-700 mt-2">
            <span className="font-bold">Leave Balance:</span> 5 Days
          </p>
        </div>

        {/* Performance Metrics */}
        <div className="text-left mb-6">
          <h2 className="text-lg font-bold text-gray-800 mb-2">Performance Metrics</h2>
          <p className="text-gray-700">
            <span className="font-bold">Tasks Completed:</span> 95
          </p>
          <p className="text-gray-700 mt-2">
            <span className="font-bold">Projects Contributed:</span> 10
          </p>
          <p className="text-gray-700 mt-2">
            <span className="font-bold">Overall Rating:</span> 4.7/5
          </p>
        </div>

        {/* Logout Button */}
        <button
          onClick={handleLogout}
          className="w-full py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-200"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default ProfilePage;
