/* ===================================================================
File: src/pages/Profile.jsx
Admin profile view + edit
=================================================================== */
import React, { useState, useEffect } from 'react';
import { getAdminProfile, updateAdminProfile } from '../api/adminApi';
import { useAuth } from '../context/AuthContext';


export default function Profile(){
const { user, setUser } = useAuth();
const [form, setForm] = useState({ name:'', email:'' });
useEffect(()=>{ if(user) setForm({ name:user.name, email:user.email }); },[user]);


async function submit(e){ e.preventDefault(); const updated = await updateAdminProfile(form); setUser(updated); alert('Saved'); }


return (
<div className="p-6 max-w-lg">
<h2 className="text-xl mb-4">Profile</h2>
<form onSubmit={submit} className="space-y-3">
<input placeholder="Name" value={form.name} onChange={(e)=>setForm({...form,name:e.target.value})} className="w-full p-2 border" />
<input placeholder="Email" value={form.email} onChange={(e)=>setForm({...form,email:e.target.value})} className="w-full p-2 border" />
<button className="bg-indigo-600 text-white px-3 py-1 rounded">Save</button>
</form>
</div>
);
}