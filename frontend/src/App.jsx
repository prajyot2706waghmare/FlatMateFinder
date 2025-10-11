// // // // // import React from "react";
// // // // // import Navbar from "./components/Navbar";
// // // // // import Hero from "./components/Hero";
// // // // // import Rooms from "./components/Rooms";
// // // // // import Footer from "./components/Footer";

// // // // // // Modals
// // // // // import LoginModal from "./components/modals/LoginModal";
// // // // // import RegisterModal from "./components/modals/RegisterModal";
// // // // // import PostRoomModal from "./components/modals/PostRoomModal";

// // // // // import "./App.css";
// // // // // import "./index.css";

// // // // // function App() {
// // // // //   return (
// // // // //     <div className="font-sans">
// // // // //       <Navbar />
// // // // //         <Hero />
// // // // //        <Rooms />
// // // // //         <Footer />

// // // // //       {/* Modals */}
// // // // //       {/* <LoginModal />
// // // // //       <RegisterModal />
// // // // //       <PostRoomModal /> */}
// // // // //     </div>
    
// // // // //   );
// // // // // }

// // // // // export default App;


// // import React from "react";
// // import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// // //import FindFlatmate from "./pages/FlatmateDetail";
// // //import AddFlatmate from "./pages/AddFlatmate";
// // //import FlatmateDetails from "./pages/FlatmateDetails"; // optional

// // import Navbar from "./components/Navbar";
// // import Hero from "./components/Hero";
// // import Rooms from "./components/Rooms";
// // import Footer from "./components/Footer";
// // import Login from "./pages/Login";  
// // import Register from "./pages/Register"; 
// // import Flat from "./pages/Flat";
// // import FlatDetails from "./pages/FlatDetails";
// // import Profile from "./pages/Profile";
// // import Findflatmate from "./pages/Findflatmate";  // ✅ correct
// // // Modals
// // import LoginModal from "./components/modals/LoginModal";
// // // import RegisterModal from "./components/modals/RegisterModal";
// // import PostRoomModal from "./components/modals/PostRoomModal";

// // import "./App.css";
// // import "./index.css";

// // function App() {
// //   return (
// //     <Router>
// //       <div className="font-sans">
// //         <Navbar />

// //         <Routes>
// //           <Route path="/" element={<Hero />} />
// //           <Route path="/rooms" element={<Rooms />} />
// //           <Route path="/dashboard" element={<><Hero/></>}/>
// //           <Route path="/flats" element={<><Flat /></>}/>
// //            <Route path="/flats/:id" element={<FlatDetails />} />
// //            <Route path="/find-flatmate" element={<Findflatmate />} />
// //           <Route path="/login" element={<Login />} />
// //           <Route path="/register" element={<Register />} />
// //           <Route path="/post-room" element={<PostRoomModal />} />
// //           <Route path="/profile" element={<Profile/>} />
          
// //         </Routes>

// //         <Footer />
// //       </div>
// //     </Router>
// //   );
// // }

// // export default App;

// // // // import React from "react";
// // // // import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// // // // import Navbar from "./components/Navbar";
// // // // import Hero from "./components/Hero";
// // // // import Rooms from "./components/Rooms";
// // // // import Footer from "./components/Footer";

// // // // import Login from "./pages/Login";  
// // // // import Register from "./pages/Register"; 
// // // // import Flat from "./pages/Flat";
// // // // import FlatDetails from "./pages/FlatDetails";
// // // // import Profile from "./pages/Profile";
// // // // //import Dashboard from "./pages/Dashboard";
// // // // //import FindFlatmate from "./pages/FindFlatmate";  // ✅ correct

// // // // // Modals
// // // // import PostRoomModal from "./components/modals/PostRoomModal";

// // // // import "./App.css";
// // // // import "./index.css";

// // // // function App() {
// // // //   return (
// // // //     <Router>
// // // //       <div className="font-sans">
// // // //         <Navbar />

// // // //         <Routes>
// // // //           <Route path="/" element={<Hero />} />
// // // //           <Route path="/rooms" element={<Rooms />} />
// // // //           <Route path="/dashboard" element={<Dashboard />} />
// // // //           <Route path="/flats" element={<Flat />} />
// // // //           <Route path="/flats/:id" element={<FlatDetails />} />
// // // //           <Route path="/find-flatmates" element={<FindFlatmate />} />  // ✅ fixed
// // // //           <Route path="/login" element={<Login />} />
// // // //           <Route path="/register" element={<Register />} />
// // // //           <Route path="/post-room" element={<PostRoomModal />} />
// // // //           <Route path="/profile" element={<Profile />} />
// // // //         </Routes>

// // // //         <Footer />
// // // //       </div>
// // // //     </Router>
// // // //   );
// // // // }

// // // // export default App;
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Rooms from "./components/Rooms";
import Footer from "./components/Footer";

import Login from "./pages/Login";  
import Register from "./pages/Register"; 
import Flat from "./pages/Flat";
import FlatDetails from "./pages/FlatDetails";
import Profile from "./pages/Profile";
import AddFlat from "./pages/AddFlat"; 
import FlatHome from "./components/FlatHome";
import AddFlatmate from "./pages/AddFlatmate";
import FAQ from "./components/FAQ";
import AddFlatmateForm from "./pages/AddFlatmateForm";
import BrowseFlatmates from "./pages/BrowseFlatmate";
import FlatmateDetails from "./pages/FlatmateDetails";
import AddFlatmateHome from "./pages/AddFlatmate"; // your earlier AddFlatmate options page
import BrowseRoomShare from "./pages/BrowseRoomShare";
import AddRoomShare from "./pages/RoomShare";
import RoomShareDetails from "./pages/RoomShareDetails";

//import FindFlatmate from "./pages/Findflatmate";  // ✅ match file name

// Modals
import PostRoomModal from "./components/modals/PostRoomModal";

import "./App.css";
import "./index.css";
import FlatHero from "./components/FlatHome";

function App() {
  return (
    <Router>
      <div className="font-sans">
        <Navbar />

        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/dashboard" element={<Hero />} />
          <Route path="/flat-home" element={<FlatHome/>}/>
          <Route path="/flats" element={<Flat />} />
          <Route path="/flats/:id" element={<FlatDetails />} />
          <Route path="/add-flat" element={<AddFlat />} />
          <Route path="/addflatmate" element={<AddFlatmate />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/post-room" element={<PostRoomModal />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/flatmate/add" element={<AddFlatmateForm />} />
          <Route path="/flatmates" element={<BrowseFlatmates />} />
          <Route path="/flatmates/:id" element={<FlatmateDetails />} />
          <Route path="/flatmate" element={<AddFlatmateHome />} />
          <Route path="/browseroomshare" element={<BrowseRoomShare />} />
          <Route path="/roomshare" element={<AddRoomShare />} />
          <Route path="/roomshare/:id" element={<RoomShareDetails />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";
// import Rooms from "./components/Rooms";
// import Footer from "./components/Footer";
// import FindFlatmate from "./pages/Findflatmate"; // ✅ correct import

// function App() {
//   return (
//     <Router>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Hero />} />
//         <Route path="/rooms" element={<Rooms />} />
//         <Route path="'/src/pages/Findflatmate" element={<FindFlatmate />} /> {/* ✅ fixed */}
//       </Routes>
//       <Footer />
//     </Router>
//   );
// }

// export default App;
