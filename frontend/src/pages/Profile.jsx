// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

// export default function Profile() {
//   const [user, setUser] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     // Assuming user info is stored in localStorage after login
//     const savedUser = localStorage.getItem("user");
//     if (savedUser) {
//       setUser(JSON.parse(savedUser));
//     } else {
//       // Redirect if not logged in
//       navigate("/login");
//     }
//   }, [navigate]);

//   const handleLogout = () => {
//     localStorage.removeItem("user");
//     navigate("/login");
//   };

//   if (!user) {
//     return <p className="text-center text-gray-500 mt-10">Loading profile...</p>;
//   }

//   return (
//     <div className="max-w-3xl mx-auto mt-12 bg-white shadow-md rounded-lg p-8">
//       <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
//         My Profile
//       </h2>

//       <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
//         {/* Avatar */}
//         <div className="flex-shrink-0">
//           <img
//             src={user.profileImage}
//             alt="User Avatar"
//             className="w-28 h-28 rounded-full shadow-md"
//           />
//         </div>

//         {/* User Info */}
//         <div className="flex-1">
//           <p className="text-lg">
//             <span className="font-semibold">Name:</span> {user.name}
//           </p>
//           <p className="text-lg">
//             <span className="font-semibold">Email:</span> {user.email}
//           </p>
//           <p className="text-lg">
//             <span className="font-semibold">Gender:</span> {user.gender}
//           </p>
//           {user.createdAt && (
//             <p className="text-lg">
//               <span className="font-semibold">Joined:</span>{" "}
//               {new Date(user.createdAt).toLocaleDateString()}
//             </p>
//           )}
//         </div>
//       </div>

//       {/* Logout Button */}
//       <div className="text-center mt-8">
//         <button
//           onClick={handleLogout}
//           className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition"
//         >
//           Logout
//         </button>
//       </div>
//     </div>
//   );
// }


import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // ✅ Assuming user info is stored in localStorage after login
    const savedUser = localStorage.getItem("user");
    console.log(savedUser)
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    } else {
      // Redirect if not logged in
      navigate("/login");
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  if (!user) {
    return <p className="text-center text-gray-500 mt-10">Loading profile...</p>;
  }

  return (
    <div className="max-w-3xl mx-auto mt-12 bg-white shadow-md rounded-lg p-8">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        My Profile
      </h2>

      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
        {/* ✅ Avatar Section */}
        <div className="flex-shrink-0">
          <img
            src={
              user.profileImage ||
              "https://cdn-icons-png.flaticon.com/512/149/149071.png" // Default avatar if missing
            }
            alt="User Avatar"
            className="w-48 h-48 rounded-full shadow-md object-cover"
          />
        </div>

        {/* ✅ User Info Section */}
        <div className="flex-1">
          <p className="text-lg">
            <span className="font-semibold">Name:</span> {user.name}
          </p>
          <p className="text-lg">
            <span className="font-semibold">Email:</span> {user.email}
          </p>
          <p className="text-lg">
            <span className="font-semibold">Gender:</span> {user.gender}
          </p>
          {user.createdAt && (
            <p className="text-lg">
              <span className="font-semibold">Joined:</span>{" "}
              {new Date(user.createdAt).toLocaleDateString()}
            </p>
          )}
        </div>
      </div>

      {/* ✅ Logout Button */}
      <div className="text-center mt-8">
        <button
          onClick={handleLogout}
          className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
