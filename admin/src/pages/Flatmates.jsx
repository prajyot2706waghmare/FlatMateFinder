/* ===================================================================
File: src/pages/Flatmates.jsx
=================================================================== */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { listFlatmates, deleteFlatmate } from '../api/adminApi';


export default function Flatmates() {
const [items, setItems] = useState([]);
useEffect(()=>{ (async ()=>{ setItems(await listFlatmates()); })(); },[]);


async function handleDelete(id){ if(!confirm('Delete?')) return; await deleteFlatmate(id); setItems(await listFlatmates()); }


return (
<div className="p-6">
<header className="flex justify-between items-center mb-4">
<h2 className="text-xl">Flatmates</h2>
<Link to="/flatmates/new" className="bg-green-600 text-white px-3 py-1 rounded">Add Flatmate</Link>
</header>
<div className="space-y-3">
{items.map(it=> (
<div key={it._id} className="p-3 border rounded flex justify-between items-center">
<div>
<div className="font-semibold">{it.name}</div>
<div className="text-sm">{it.location} • {it.budget}</div>
</div>
<div className="space-x-2">
<Link to={`/flatmates/${it._id}/edit`} className="px-2 py-1 border rounded">Edit</Link>
<button onClick={()=>handleDelete(it._id)} className="px-2 py-1 bg-red-500 text-white rounded">Delete</button>
</div>
</div>
))}
</div>
</div>
);
}