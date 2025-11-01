# 🏠 Flatmate Finder

Flatmate Finder helps users easily connect with verified people looking to share flats or rooms.  
Find compatible flatmates based on **location, budget, and preferences** — all in one place!

---

## 🚀 Features
- Browse and list available flats or rooms  
- Find flatmates based on budget, location, and lifestyle  
- Add and manage personal listings  
- Secure authentication and profile management  
- Cloud-based image uploads with Cloudinary  
- Simple, clean, and mobile-friendly UI

---

## 🛠️ Tech Stack
- **Frontend:** React.js, Tailwind CSS  
- **Backend:** Node.js, Express.js, MongoDB  
- **Cloud Services:** Cloudinary (for image uploads)  
- **Hosting (Optional):** Vercel / Render / Netlify

---

## 📁 Project Structure
-FlatmateFinder/
-│
-├── backend/ # Node.js + Express API
-│ ├── models/ # MongoDB schemas
-│ ├── routes/ # API routes
-│ ├── controllers/ # Logic for routes
-│ └── server.js # Entry point
-│
-├── frontend/ # React application
-│ ├── src/
-│ │ ├── pages/ # React pages
-│ │ ├── components/ # Reusable components
-│ │ └── App.jsx # Main app component
-│
-└── README.md # Project documentation

---

## 📦 Installation & Setup

1. **Clone the repository**
```bash
git clone https://github.com/prajyot2706waghmare/FlatMateFinder.git

Go to the project directory

cd FlatMateFinder


Install dependencies

Frontend:
cd frontend
npm install
Backend:

bash
Copy code
cd ../backend
npm install
Set up environment variables
Create a .env file inside the backend folder:

ini
Copy code
MONGO_URI=your_mongodb_connection_string
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
Start the servers

Frontend:

bash
Copy code
cd frontend
npm run dev
Backend (in a new terminal):

bash
Copy code
cd backend
npm start
🤝 Contributing
Contributions are welcome!
Fork the repo, make your changes, and submit a pull request.

📄 License
This project is licensed under the MIT License — free to use, modify, and distribute.

Made with ❤️ by Prajyot Waghmare




