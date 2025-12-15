// /* ===================================================================
// File: src/pages/Dashboard.jsx
// =================================================================== */
// import React from "react";
// import { Link } from "react-router-dom";
// import { useAuth } from "../context/AuthContext";

// export default function Dashboard() {
//   const { user, logout } = useAuth();
//   return (
//     <div className="p-6">
//       <header className="flex justify-between items-center mb-6">
//         <h1 className="text-2xl">FlatFinder Admin</h1>
//         <div>
//           <span className="mr-4">{user?.name}</span>
//           <Link to="/profile" className="mr-4">
//             Profile
//           </Link>
//           <button
//             onClick={logout}
//             className="bg-red-500 text-white px-3 py-1 rounded"
//           >
//             Logout
//           </button>
//         </div>
//       </header>

//       <main className="grid grid-cols-1 sm:grid-cols-3 gap-4">
//         <Link to="/flats" className="p-4 border rounded">
//           Manage Flats
//         </Link>
//         <Link to="/flatmates" className="p-4 border rounded">
//           Manage Flatmates
//         </Link>
//         <Link to="/roomshares" className="p-4 border rounded">
//           Manage Roomshares
//         </Link>
//         <Link to="/register" className="p-4 border rounded">
//           Add Admin
//         </Link>
//       </main>
//     </div>
//   );
// }


/* ===================================================================
File: src/pages/Dashboard.jsx (Enhanced)
=================================================================== */
import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
// Icon placeholders (assuming you have a library like react-icons installed)
// import { FiHome, FiUsers, FiClipboard, FiUserPlus, FiUser, FiLogOut } from "react-icons/fi";

// Helper component for the Dashboard Card
const DashboardCard = ({ to, title, description, icon: Icon, colorClass }) => (
  <Link
    to={to}
    className={`
      ${colorClass} // Use a color class for background/border
      p-6 rounded-xl shadow-lg 
      transform transition duration-300 ease-in-out 
      hover:scale-[1.03] hover:shadow-xl hover:shadow-opacity-20
      focus:outline-none focus:ring-4 focus:ring-offset-2 focus:ring-current
      flex flex-col justify-between
      h-full
    `}
  >
    <div className="flex items-start mb-3">
      {/* Replace with actual icon component if using an icon library */}
      <span className="text-4xl mr-4 opacity-80">
        {Icon ? <Icon /> : '📦'} 
      </span>
      <div>
        <h2 className="text-xl font-semibold mb-1">{title}</h2>
        <p className="text-sm opacity-75">{description}</p>
      </div>
    </div>
    <div className="text-right text-sm font-medium pt-2">
        View Details &rarr;
    </div>
  </Link>
);

export default function Dashboard() {
  const { user, logout } = useAuth();
  
  // Define card data for cleaner rendering
  const dashboardCards = [
    { 
      to: "/flats", 
      title: "Manage Flats", 
      description: "Approve, edit, and view all active property listings.", 
      // icon: FiHome,
      icon: null, // Placeholder
      colorClass: "bg-blue-50 text-blue-800 border-l-4 border-blue-500",
    },
    { 
      to: "/flatmates", 
      title: "Manage Flatmates", 
      description: "Oversee user profiles looking for shared accommodation.", 
      // icon: FiUsers,
      icon: null, // Placeholder
      colorClass: "bg-green-50 text-green-800 border-l-4 border-green-500",
    },
    { 
      to: "/roomshares", 
      title: "Manage Roomshares", 
      description: "Review and manage all room sharing advertisements.", 
      // icon: FiClipboard,
      icon: null, // Placeholder
      colorClass: "bg-yellow-50 text-yellow-800 border-l-4 border-yellow-500",
    },
    { 
      to: "/register", 
      title: "Add New Admin", 
      description: "Create a new privileged account for administrative access.", 
      // icon: FiUserPlus,
      icon: null, // Placeholder
      colorClass: "bg-indigo-50 text-indigo-800 border-l-4 border-indigo-500",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-10">
      {/* Top Bar/Header */}
      <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center pb-8 border-b border-gray-200 mb-8">
        <h1 className="text-4xl font-light text-gray-800 tracking-wide mb-4 sm:mb-0">
          🔑 FlatMateFinder <span className="font-bold">Admin Panel</span>
        </h1>
        
        {/* User Actions */}
        <div className="flex items-center space-x-4 text-gray-600">
          <div className="flex flex-col items-end text-sm">
            <span className="font-medium text-gray-900">{user?.name}</span>
            <span className="text-xs text-gray-500">Administrator</span>
          </div>

          <Link 
            to="/profile" 
            className="p-2 rounded-full hover:bg-gray-200 transition duration-150"
            title="User Profile"
          >
            {/* <FiUser className="w-5 h-5" /> */}
            <span className="text-xl">👤</span> 
          </Link>
          
          <button
            onClick={logout}
            className="flex items-center bg-red-600 text-white px-4 py-2 rounded-lg 
                       font-medium text-sm shadow-md transition duration-200
                       hover:bg-red-700 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
          >
            {/* <FiLogOut className="w-4 h-4 mr-1" /> */}
            Logout
          </button>
        </div>
      </header>

      {/* Main Content: Animated Grid */}
      <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {dashboardCards.map((card) => (
          <DashboardCard
            key={card.title}
            to={card.to}
            title={card.title}
            description={card.description}
            // icon={card.icon} // Pass actual icon component
            colorClass={card.colorClass}
          />
        ))}
      </main>

      {/* Optional: Add a quick statistics section below the cards */}
      <section className="mt-12">
        <h2 className="text-2xl font-semibold mb-4 text-gray-700">Quick Stats</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-white p-5 rounded-xl shadow-md border-t-4 border-purple-500">
                <p className="text-3xl font-bold text-gray-800">450</p>
                <p className="text-sm text-gray-500">Active Listings</p>
            </div>
            <div className="bg-white p-5 rounded-xl shadow-md border-t-4 border-cyan-500">
                <p className="text-3xl font-bold text-gray-800">12k</p>
                <p className="text-sm text-gray-500">Registered Users</p>
            </div>
            <div className="bg-white p-5 rounded-xl shadow-md border-t-4 border-orange-500">
                <p className="text-3xl font-bold text-gray-800">14</p>
                <p className="text-sm text-gray-500">Pending Approvals</p>
            </div>
        </div>
      </section>

    </div>
  );
}