// import React from "react";
// import { Link } from "react-router-dom";
// export default function Navbar() {
//   return (
//     <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
//       <h1 className="text-2xl font-bold text-indigo-600">FlatMate Finder</h1>
//       <div className="space-x-4">
//         <Link to="/dashboard" className="text-gray-700 hover:text-indigo-600">
       
//         <button   className="px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600">
//           Dashboard
//         </button>
//         </Link>
//         <Link to="/login" className="text-gray-700 hover:text-indigo-600">
//         <button   className="px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600">
//           Login
//         </button>
//          </Link>
//           <Link to="/register" className="text-gray-700 hover:text-indigo-600">
//         <button className="px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200">
//           Sign Up
//         </button>
//         </Link>
//       </div>
//     </nav>
//   );
// }


import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token"); // if you saved token
    setUser(null);
    navigate("/login"); // redirect to login
  };

  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-indigo-600">FlatMate Finder</h1>
      <div className="space-x-4">
        {/* Always show Dashboard */}
        <Link to="/dashboard">
          <button className="px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600">
            Dashboard
          </button>
        </Link>
        <Link to="/roomshare">Room Share</Link>
        <Link to="/browseroomshare">Browse Room Share</Link>
        {/* <Link to="/roomshares">Browse Room Shares</Link> */}
        {user ? (
          <>
            {/* Show Profile & Logout if logged in */}
            <Link to="/profile">
              <button className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600">
                Profile
              </button>
            </Link>
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            {/* Show Login & Signup if not logged in */}
            <Link to="/login">
              <button className="px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600">
                Login
              </button>
            </Link>
            <Link to="/register">
              <button className="px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200">
                Sign Up
              </button>
              {/* <Link to="/findflatmates">
  <button className="px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600">
    Find Flatmates
  </button>
</Link> */}

            </Link>
          </>
        )}
      </div>
    </nav>
  );
}
