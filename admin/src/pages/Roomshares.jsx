

/* ===================================================================
File: src/pages/Roomshares.jsx
=================================================================== */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { listRoomshares, deleteRoomshare } from '../api/adminApi';


export default function Roomshares(){
const [items, setItems] = useState([]);
useEffect(()=>{ (async ()=>{ setItems(await listRoomshares()); })(); },[]);
async function handleDelete(id){ if(!confirm('Delete?')) return; await deleteRoomshare(id); setItems(await listRoomshares()); }


return (
<div className="p-6">
<header className="flex justify-between items-center mb-4">
<h2 className="text-xl">Roomshares</h2>
<Link to="/roomshares/new" className="bg-green-600 text-white px-3 py-1 rounded">Add Roomshare</Link>
</header>
<div className="space-y-3">
{items.map(it=> (
<div key={it._id} className="p-3 border rounded flex justify-between items-center">
<div>
<div className="font-semibold">{it.title || it.address}</div>
<div className="text-sm">{it.city} • {it.price}</div>
</div>
<div className="space-x-2">
<Link to={`/roomshares/${it._id}/edit`} className="px-2 py-1 border rounded">Edit</Link>
<button onClick={()=>handleDelete(it._id)} className="px-2 py-1 bg-red-500 text-white rounded">Delete</button>
</div>
</div>
))}
</div>
</div>
);
}