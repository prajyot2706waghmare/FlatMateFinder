// src/api/flatmateApi.js
const BASE = "http://localhost:5000/flatmates";

export async function getFlatmates() {
  const r = await fetch(BASE);
  if (!r.ok) throw new Error("Failed to fetch flatmates");
  return r.json();
}

export async function getFlatmateById(id) {
  const r = await fetch(`${BASE}/${id}`);
  if (!r.ok) throw new Error("Failed to fetch flatmate");
  return r.json();
}

export async function addFlatmate(data) {
  const r = await fetch(BASE, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!r.ok) {
    const errText = await r.text();
    throw new Error(errText || "Failed to add flatmate");
  }
  return r.json();
}
