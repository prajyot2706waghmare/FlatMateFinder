// import React from "react";
// import SearchBar from "../components/SearchBar";
// import FAQ from "../components/FAQ";
// const Home = () => {
//   return (
//     <div className="flex flex-col items-center justify-center h-screen bg-indigo-50">
//       <h1 className="text-3xl font-bold mb-4">Find Your Perfect FlatMate</h1>
//       <p className="text-gray-600 mb-6">Search rooms, roommates, and flats with ease.</p>
//       <SearchBar />
//     </div>
    
//   );
// };

// export default Home;
import React from "react";
import SearchBar from "../components/SearchBar";
import FAQ from "../components/FAQ";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-indigo-50">
      <h1 className="text-3xl font-bold mb-4">Find Your Perfect FlatMate</h1>
      <p className="text-gray-600 mb-6">Search rooms, roommates, and flats with ease.</p>
      <SearchBar />
      {/* FAQ section at bottom */}
      <FAQ />
    </div>
  );
};

export default Home;
