

/* ===================================================================
File: src/pages/Dashboard.jsx
=================================================================== */
import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';


export default function Dashboard() {
const { user, logout } = useAuth();
return (
<div className="p-6">
<header className="flex justify-between items-center mb-6">
<h1 className="text-2xl">FlatFinder Admin</h1>
<div>
<span className="mr-4">{user?.name}</span>
<Link to="/profile" className="mr-4">Profile</Link>
<button onClick={logout} className="bg-red-500 text-white px-3 py-1 rounded">Logout</button>
</div>
</header>


<main className="grid grid-cols-1 sm:grid-cols-3 gap-4">
<Link to="/flats" className="p-4 border rounded">Manage Flats</Link>
<Link to="/flatmates" className="p-4 border rounded">Manage Flatmates</Link>
<Link to="/roomshares" className="p-4 border rounded">Manage Roomshares</Link>
</main>
</div>
);
}