

/* ===================================================================
File: src/pages/RoomshareForm.jsx
=================================================================== */
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { createRoomshare, getRoomshare, updateRoomshare } from '../api/adminApi';


export default function RoomshareForm({ edit }){
const { id } = useParams();
const navigate = useNavigate();
const [form, setForm] = useState({ title:'', address:'', city:'', price:'', description:'' });
useEffect(()=>{ if(edit && id) (async ()=>{ setForm(await getRoomshare(id)); })(); },[edit,id]);
async function submit(e){ e.preventDefault(); if(edit) await updateRoomshare(id, form); else await createRoomshare(form); navigate('/roomshares'); }


return (
<div className="p-6">
<h2 className="text-xl mb-4">{edit ? 'Edit Roomshare' : 'Add Roomshare'}</h2>
<form onSubmit={submit} className="max-w-lg space-y-3">
<input placeholder="Title" value={form.title} onChange={(e)=>setForm({...form,title:e.target.value})} className="w-full p-2 border" />
<input placeholder="Address" value={form.address} onChange={(e)=>setForm({...form,address:e.target.value})} className="w-full p-2 border" />
<input placeholder="City" value={form.city} onChange={(e)=>setForm({...form,city:e.target.value})} className="w-full p-2 border" />
<input placeholder="Price" value={form.price} onChange={(e)=>setForm({...form,price:e.target.value})} className="w-full p-2 border" />
<textarea placeholder="Description" value={form.description} onChange={(e)=>setForm({...form,description:e.target.value})} className="w-full p-2 border" />
<button className="bg-indigo-600 text-white px-3 py-1 rounded">Save</button>
</form>
</div>
);
}