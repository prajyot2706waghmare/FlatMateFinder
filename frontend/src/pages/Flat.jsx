// // // import React, { useEffect, useState } from "react";
// // // import { getFlats } from "../api/userApi";

// // // const Flat = () => {
// // //   const [flats, setFlats] = useState([]);
// // //   const [loading, setLoading] = useState(true);
// // //   const [error, setError] = useState("");

// // //   useEffect(() => {
// // //     const fetchFlats = async () => {
// // //       try {
// // //         console.log("Fetching flats...");
// // //         const response = await getFlats();
// // //         console.log("Flats fetched:", response.data);
// // //         setFlats(response.data);
// // //         setLoading(false);
// // //       } catch (err) {
       
// // //         setError(err,"Failed to fetch flats. Please try again later.");
// // //         setLoading(false);
// // //       }
// // //     };

// // //     fetchFlats();
// // //   }, []);

// // // //   if (loading) return <p className="text-center text-gray-500 mt-10">Loading flats...</p>;
// // // if (loading) {
// // //   return <p className="text-center text-gray-500 mt-10">Loading flats...</p>;
// // // }

// // //  if (error) return (
// // //   <p className="text-center text-red-500 mt-10">
// // //     {typeof error === "string" ? error : error.message || "Something went wrong"}
// // //   </p>
// // // );

// // //   return (
// // //     <>
   
// // //     <div className="flex flex-wrap justify-center gap-6 p-6">
// // //       {flats.map((flat) => (
// // //         <div
// // //           key={flat._id || flat.id}
// // //           className="bg-white rounded-lg shadow-md overflow-hidden w-72 hover:shadow-xl transition-shadow duration-300"
// // //         >
// // //           <img
// // //             src={flat.image}
// // //             alt={flat.title}
// // //             className="w-full h-48 object-cover"
// // //           />
// // //           <div className="p-4">
// // //             <h2 className="text-xl font-semibold mb-2">Hello{flat.title}</h2>
// // //             <p className="text-gray-600"><strong>Location:</strong> {flat.location}</p>
// // //             <p className="text-gray-600"><strong>Price:</strong> {flat.price}</p>
// // //             <p className="text-gray-600"><strong>Property:</strong> {flat.property}</p>
// // //             <p className="text-gray-600">
// // //               <strong>Available From:</strong> {new Date(flat.availableFrom).toLocaleDateString()}
// // //             </p>
// // //             <p className="text-gray-600"><strong>Duration:</strong> {flat.duration}</p>
// // //             <p className="text-gray-600"><strong>Gender Preference:</strong> {flat.genderPreference}</p>
// // //             <p className="text-gray-600"><strong>Age Preference:</strong> {flat.agePreference}</p>
// // //             <p className="text-gray-600">
// // //               <strong>Facilities:</strong> {flat.facilities.join(", ")}
// // //             </p>
// // //             <p className="text-gray-600"><strong>Sharing Type:</strong> {flat.sharingType}</p>
// // //             <p className="text-gray-600"><strong>Furnishing:</strong> {flat.furnishing}</p>
// // //           </div>
// // //         </div>
// // //       ))}
    
// // //     </div>
// // //     </>
// // //   );
// // // };

// // // export default Flat;


// // import React, { useEffect, useState } from "react";
// // import { getFlats } from "../api/userApi";
// // import { Link } from "react-router-dom";

// // const Flat = () => {
// //   const [flats, setFlats] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState("");

// //   useEffect(() => {
// //     const fetchFlats = async () => {
// //       try {
// //         console.log("Fetching flats...");
// //         const response = await getFlats();
// //         console.log("Flats fetched:", response.data);
// //         setFlats(response.data);
// //         setLoading(false);
// //       } catch (err) {
// //         setError(err, "Failed to fetch flats. Please try again later.");
// //         setLoading(false);
// //       }
// //     };

// //     fetchFlats();
// //   }, []);

// //   // Dark loading component
// //   if (loading) {
// //     return (
// //       <div className="min-h-screen bg-gray-900 py-8">
// //         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //           <div className="text-center mb-8">
// //             <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-400 mx-auto mb-3"></div>
// //             <p className="text-lg text-gray-300 font-medium">Loading flats...</p>
// //           </div>
// //           {/* Loading skeleton cards */}
// //           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4">
// //             {[...Array(12)].map((_, index) => (
// //               <div key={index} className="bg-gray-800 rounded-lg overflow-hidden animate-pulse">
// //                 <div className="h-32 bg-gray-700"></div>
// //                 <div className="p-3 space-y-2">
// //                   <div className="h-3 bg-gray-700 rounded w-3/4"></div>
// //                   <div className="h-2 bg-gray-700 rounded w-1/2"></div>
// //                   <div className="h-2 bg-gray-700 rounded w-2/3"></div>
// //                 </div>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </div>
// //     );
// //   }

// //   // Dark error component
// //   if (error) {
// //     return (
// //       <div className="min-h-screen bg-gray-900 flex items-center justify-center py-8">
// //         <div className="max-w-md mx-auto text-center px-4">
// //           <div className="bg-red-900/20 border border-red-800 rounded-lg p-6">
// //             <div className="w-12 h-12 bg-red-900/40 rounded-full flex items-center justify-center mx-auto mb-3">
// //               <svg className="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.962-.833-2.732 0L3.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
// //               </svg>
// //             </div>
// //             <h3 className="text-lg font-semibold text-gray-100 mb-2">Something went wrong</h3>
// //             <p className="text-red-400 mb-4 text-sm">
// //               {typeof error === "string" ? error : error.message || "Failed to load flats. Please try again later."}
// //             </p>
// //             <button 
// //               onClick={() => window.location.reload()} 
// //               className="inline-flex items-center px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-sm rounded-md transition-colors duration-200"
// //             >
// //               Try Again
// //             </button>
// //           </div>
// //         </div>
// //       </div>
// //     );
// //   }

// //   return (
// //     <div className="min-h-screen bg-gray-900 py-6">

      
// //       {/* Header Section */}
// //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
// //         <div className="text-center">
// //           <h1 className="text-3xl font-bold text-white mb-3">Find Your Perfect Flat</h1>
// //           <p className="text-gray-400 max-w-xl mx-auto">
// //             Discover amazing rental properties 
// //           </p>
// //           <div className="mt-3 flex items-center justify-center">
// //             <span className="bg-blue-900/30 border  border-blue-800 text-blue-300 text-sm font-medium px-3 py-1 rounded-full">
// //               {flats.length} Properties Available
// //             </span>
        
// //           </div>
// //                  <input
// //           type="text"
// //           placeholder="Enter location..."
// //           className="px-4 py-2 my-3 w-1/2 rounded-lg text-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
// //         />
// //         </div>
// //       </div>

// //       {/* Flats Grid */}
// //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //         {flats.length === 0 ? (
// //           <div className="text-center py-12">
// //             <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-3">
// //               <svg className="w-8 h-8 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
// //               </svg>
// //             </div>
// //             <h3 className="text-lg font-semibold text-gray-300 mb-2">No flats available</h3>
// //             <p className="text-gray-500">Check back later for new listings.</p>
// //           </div>
// //         ) : (
// //           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4">
// //             {flats.map((flat) => (
// //               <div
// //                 key={flat._id || flat.id}
// //                 className="bg-gray-800 border border-gray-700 rounded-lg hover:bg-gray-750 hover:border-gray-600 transition-all duration-200 overflow-hidden group cursor-pointer"
// //               >
// //                 {/* Image Container */}
// //                 <div className="relative overflow-hidden">
// //                   <img
// //                     src={flat.image}
// //                     alt={flat.title}
// //                     className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
// //                   />
// //                   <div className="absolute top-2 right-2">
// //                     <span className="bg-black/60 text-white text-xs px-2 py-1 rounded backdrop-blur-sm">
// //                       {flat.sharingType}
// //                     </span>
// //                   </div>
// //                   <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-200"></div>
// //                 </div>

// //                 {/* Content */}
// //                 <div className="p-3">
// //                   {/* Title and Price */}
// //                   <div className="mb-2">
// //                     <h3 className="text-sm font-semibold text-white mb-1 line-clamp-1">
// //                       {flat.title}
// //                     </h3>
// //                     <div className="flex items-center justify-between">
// //                       <span className="text-blue-400 font-bold text-lg">{flat.price}</span>
// //                       <span className="text-xs text-gray-400">{flat.duration}</span>
// //                     </div>
// //                   </div>

// //                   {/* Location */}
// //                   <div className="flex items-center text-xs text-gray-400 mb-2">
// //                     <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
// //                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
// //                     </svg>
// //                     <span className="truncate">{flat.location}</span>
// //                   </div>

// //                   {/* Property Type & Furnishing */}
// //                   <div className="flex items-center justify-between text-xs text-gray-400 mb-2">
// //                     <span className="truncate">{flat.property}</span>
// //                     <span className="truncate">{flat.furnishing}</span>
// //                   </div>

// //                   {/* Preferences */}
// //                   <div className="flex gap-1 mb-2">
// //                     <span className="bg-purple-900/30 text-purple-300 text-xs px-2 py-1 rounded border border-purple-800/50">
// //                       {flat.genderPreference}
// //                     </span>
// //                     <span className="bg-green-900/30 text-green-300 text-xs px-1 py-1 rounded border border-green-800/50 truncate">
// //                       {flat.agePreference}
// //                     </span>
// //                   </div>

// //                   {/* Available Date */}
// //                   <div className="text-xs text-gray-500 mb-2">
// //                     <span>Available: </span>
// //                     {new Date(flat.availableFrom).toLocaleDateString('en-US', { 
// //                       month: 'short', 
// //                       day: 'numeric'
// //                     })}
// //                   </div>

// //                   {/* Facilities (limited) */}
// //                   {flat.facilities && flat.facilities.length > 0 && (
// //                     <div className="mb-3">
// //                       <div className="flex flex-wrap gap-1">
// //                         {flat.facilities.slice(0, 2).map((facility, index) => (
// //                           <span
// //                             key={index}
// //                             className="bg-gray-700 text-gray-300 text-xs px-2 py-1 rounded"
// //                           >
// //                             {facility}
// //                           </span>
// //                         ))}
// //                         {flat.facilities.length > 2 && (
// //                           <span className="bg-gray-700 text-gray-300 text-xs px-2 py-1 rounded">
// //                             +{flat.facilities.length - 2}
// //                           </span>
// //                         )}
// //                       </div>
// //                     </div>
// //                   )}

// //                   {/* Action Button */}
// //                   {/* <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-3 rounded-md transition-colors duration-200 text-sm flex items-center justify-center space-x-1">
// //                     <span>View</span>
// //                     <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
// //                     </svg>
// //                   </button> */}
// //                   <Link
// //   to={`/flats/${flat._id}`}
// //   className="inline-block mt-4 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition"
// // >
// //   More Details
// // </Link>
// //                 </div>
// //               </div>
// //             ))}
// //           </div>
// //         )}
// //       </div>
// //     </div>
// //   );
// // };

// // export default Flat;

// // import React, { useEffect, useState } from "react";
// // import { getFlats } from "../api/userApi";
// // import { Link } from "react-router-dom";

// // const Flat = () => {
// //   const [flats, setFlats] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState("");
// //   const [searchTerm, setSearchTerm] = useState("");

// //   useEffect(() => {
// //     const fetchFlats = async () => {
// //       try {
// //         console.log("Fetching flats...");
// //         const response = await getFlats();
// //         console.log("Flats fetched:", response.data);
// //         setFlats(response.data);
// //         setLoading(false);
// //       } catch (err) {
// //         setError(err, "Failed to fetch flats. Please try again later.");
// //         setLoading(false);
// //       }
// //     };

// //     fetchFlats();
// //   }, []);

// //   // Filter flats based on search term
// //   const filteredFlats = flats.filter(flat =>
// //     flat.location?.toLowerCase().includes(searchTerm.toLowerCase()) ||
// //     flat.title?.toLowerCase().includes(searchTerm.toLowerCase())
// //   );

// //   // Clean loading component
// //   if (loading) {
// //     return (
// //       <div className="min-h-screen bg-gray-50 py-8">
// //         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //           <div className="text-center mb-8">
// //             <div className="inline-block animate-spin rounded-full h-8 w-8 border-2 border-gray-900 border-t-transparent mb-4"></div>
// //             <p className="text-gray-600 font-medium">Loading properties...</p>
// //           </div>
          
// //           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
// //             {[...Array(10)].map((_, index) => (
// //               <div key={index} className="bg-white rounded-lg shadow-sm border animate-pulse">
// //                 <div className="h-48 bg-gray-200 rounded-t-lg"></div>
// //                 <div className="p-4 space-y-3">
// //                   <div className="h-4 bg-gray-200 rounded w-3/4"></div>
// //                   <div className="h-3 bg-gray-200 rounded w-1/2"></div>
// //                   <div className="h-3 bg-gray-200 rounded w-2/3"></div>
// //                 </div>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </div>
// //     );
// //   }

// //   // Clean error component
// //   if (error) {
// //     return (
// //       <div className="min-h-screen bg-gray-50 flex items-center justify-center py-8">
// //         <div className="max-w-md mx-auto text-center px-4">
// //           <div className="bg-white rounded-lg shadow-lg p-8">
// //             <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
// //               <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.962-.833-2.732 0L3.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
// //               </svg>
// //             </div>
// //             <h3 className="text-lg font-semibold text-gray-900 mb-2">Unable to load properties</h3>
// //             <p className="text-gray-600 mb-6">
// //               {typeof error === "string" ? error : error.message || "Please try again later."}
// //             </p>
// //             <button 
// //               onClick={() => window.location.reload()} 
// //               className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-colors duration-200"
// //             >
// //               Try Again
// //             </button>
// //           </div>
// //         </div>
// //       </div>
// //     );
// //   }

// //   return (
// //     <div className="min-h-screen bg-gray-50">
// //       {/* Professional Header */}
// //       <div className="bg-white shadow-sm border-b">
// //         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
// //           <div className="text-center">
// //             <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
// //               Premium Property Listings
// //             </h1>
// //             <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
// //               Find your ideal rental property from our curated selection of premium accommodations
// //             </p>
            
// //             <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
// //               <div className="relative max-w-md w-full">
// //                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
// //                   <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
// //                   </svg>
// //                 </div>
// //                 <input
// //                   type="text"
// //                   placeholder="Search by location or property name..."
// //                   value={searchTerm}
// //                   onChange={(e) => setSearchTerm(e.target.value)}
// //                   className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
// //                 />
// //               </div>
              
// //               <div className="bg-blue-50 border border-blue-200 rounded-md px-4 py-3">
// //                 <span className="text-blue-800 font-semibold">
// //                   {filteredFlats.length} Properties
// //                 </span>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Main Content */}
// //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
// //         {filteredFlats.length === 0 ? (
// //           <div className="text-center py-16">
// //             <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
// //               <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
// //               </svg>
// //             </div>
// //             <h3 className="text-xl font-semibold text-gray-900 mb-2">
// //               {searchTerm ? 'No properties found' : 'No properties available'}
// //             </h3>
// //             <p className="text-gray-500">
// //               {searchTerm ? 'Try adjusting your search criteria.' : 'Check back soon for new listings.'}
// //             </p>
// //           </div>
// //         ) : (
// //           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
// //             {filteredFlats.map((flat) => (
// //               <div
// //                 key={flat._id || flat.id}
// //                 className="bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md hover:border-gray-300 transition-all duration-200 overflow-hidden group"
// //               >
// //                 {/* Image Container */}
// //                 <div className="relative overflow-hidden">
// //                   <img
// //                     src={flat.image}
// //                     alt={flat.title}
// //                     className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
// //                   />
// //                   <div className="absolute top-3 right-3">
// //                     <span className="bg-white/90 text-gray-700 text-xs font-medium px-2 py-1 rounded-md shadow-sm">
// //                       {flat.sharingType}
// //                     </span>
// //                   </div>
// //                 </div>

// //                 {/* Content */}
// //                 <div className="p-4">
// //                   {/* Title and Price */}
// //                   <div className="mb-3">
// //                     <h3 className="text-sm font-semibold text-gray-900 mb-1 line-clamp-2 group-hover:text-blue-600 transition-colors">
// //                       {flat.title}
// //                     </h3>
// //                     <div className="flex items-center justify-between">
// //                       <span className="text-lg font-bold text-blue-600">{flat.price}</span>
// //                       <span className="text-xs text-gray-500 bg-gray-50 px-2 py-1 rounded">
// //                         {flat.duration}
// //                       </span>
// //                     </div>
// //                   </div>

// //                   {/* Location */}
// //                   <div className="flex items-center text-xs text-gray-600 mb-3">
// //                     <svg className="w-3 h-3 mr-1 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
// //                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
// //                     </svg>
// //                     <span className="font-medium truncate">{flat.location}</span>
// //                   </div>

// //                   {/* Property Details Grid */}
// //                   <div className="grid grid-cols-2 gap-2 text-xs text-gray-600 mb-3">
// //                     <div className="bg-gray-50 rounded p-2 text-center">
// //                       <div className="font-medium text-gray-900">{flat.property}</div>
// //                       <div className="text-gray-500">Type</div>
// //                     </div>
// //                     <div className="bg-gray-50 rounded p-2 text-center">
// //                       <div className="font-medium text-gray-900">{flat.furnishing}</div>
// //                       <div className="text-gray-500">Furnishing</div>
// //                     </div>
// //                   </div>

// //                   {/* Preferences */}
// //                   <div className="flex gap-1 mb-3 flex-wrap">
// //                     <span className="bg-purple-50 border border-purple-200 text-purple-700 text-xs px-2 py-1 rounded-md">
// //                       {flat.genderPreference}
// //                     </span>
// //                     <span className="bg-green-50 border border-green-200 text-green-700 text-xs px-2 py-1 rounded-md">
// //                       {flat.agePreference}
// //                     </span>
// //                   </div>

// //                   {/* Available Date */}
// //                   <div className="text-xs text-gray-600 mb-3 bg-gray-50 rounded p-2">
// //                     <span className="font-medium">Available from: </span>
// //                     <span className="text-gray-900">
// //                       {new Date(flat.availableFrom).toLocaleDateString('en-US', { 
// //                         month: 'short', 
// //                         day: 'numeric',
// //                         year: 'numeric'
// //                       })}
// //                     </span>
// //                   </div>

// //                   {/* Facilities */}
// //                   {flat.facilities && flat.facilities.length > 0 && (
// //                     <div className="mb-4">
// //                       <div className="flex flex-wrap gap-1">
// //                         {flat.facilities.slice(0, 2).map((facility, index) => (
// //                           <span
// //                             key={index}
// //                             className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded"
// //                           >
// //                             {facility}
// //                           </span>
// //                         ))}
// //                         {flat.facilities.length > 2 && (
// //                           <span className="bg-blue-50 text-blue-700 text-xs px-2 py-1 rounded border border-blue-200">
// //                             +{flat.facilities.length - 2} more
// //                           </span>
// //                         )}
// //                       </div>
// //                     </div>
// //                   )}

// //                   {/* Action Button */}
// //                   <Link
// //                     to={`/flats/${flat._id}`}
// //                     className="block w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 px-4 rounded-md transition-colors duration-200 text-sm text-center"
// //                   >
// //                     View Details
// //                   </Link>
// //                 </div>
// //               </div>
// //             ))}
// //           </div>
// //         )}
// //       </div>
// //     </div>
// //   );
// // };

// // export default Flat;
// import React, { useEffect, useState } from "react";
// import { getFlats } from "../api/userApi";
// import { Link } from "react-router-dom";

// const Flat = () => {
//   const [flats, setFlats] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");
//   const [searchTerm, setSearchTerm] = useState("");

//   useEffect(() => {
//     const fetchFlats = async () => {
//       try {
//         console.log("Fetching flats...");
//         const response = await getFlats();
//         console.log("Flats fetched:", response.data);
//         setFlats(response.data);
//         setLoading(false);
//       } catch (err) {
//         setError(err, "Failed to fetch flats. Please try again later.");
//         setLoading(false);
//       }
//     };

//     fetchFlats();
//   }, []);

//   // Filter flats based on search term
//   const filteredFlats = flats.filter(flat =>
//     flat.location?.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     flat.title?.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   // Clean loading component
//   if (loading) {
//     return (
//       <div className="min-h-screen bg-gray-50 py-8">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-8">
//             <div className="inline-block animate-spin rounded-full h-8 w-8 border-2 border-gray-900 border-t-transparent mb-4"></div>
//             <p className="text-gray-600 font-medium">Loading properties...</p>
//           </div>
          
//           <div className="grid grid-cols-2 gap-6">
//             {[...Array(4)].map((_, index) => (
//               <div key={index} className="bg-white rounded-lg shadow-sm border animate-pulse">
//                 <div className="h-64 bg-gray-200 rounded-t-lg"></div>
//                 <div className="p-4 space-y-3">
//                   <div className="h-4 bg-gray-200 rounded w-3/4"></div>
//                   <div className="h-3 bg-gray-200 rounded w-1/2"></div>
//                   <div className="h-3 bg-gray-200 rounded w-2/3"></div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     );
//   }

//   // Clean error component
//   if (error) {
//     return (
//       <div className="min-h-screen bg-gray-50 flex items-center justify-center py-8">
//         <div className="max-w-md mx-auto text-center px-4">
//           <div className="bg-white rounded-lg shadow-lg p-8">
//             <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
//               <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.962-.833-2.732 0L3.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
//               </svg>
//             </div>
//             <h3 className="text-lg font-semibold text-gray-900 mb-2">Unable to load properties</h3>
//             <p className="text-gray-600 mb-6">
//               {typeof error === "string" ? error : error.message || "Please try again later."}
//             </p>
//             <button 
//               onClick={() => window.location.reload()} 
//               className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-colors duration-200"
//             >
//               Try Again
//             </button>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Professional Header */}
//       <div className="bg-white shadow-sm border-b">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//           <div className="text-center">
//             <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
//               Premium Property Listings
//             </h1>
//             <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
//               Find your ideal rental property from our curated selection of premium accommodations
//             </p>
            
//             <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
//               <div className="relative max-w-md w-full">
//                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                   <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
//                   </svg>
//                 </div>
//                 <input
//                   type="text"
//                   placeholder="Search by location or property name..."
//                   value={searchTerm}
//                   onChange={(e) => setSearchTerm(e.target.value)}
//                   className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
//                 />
//               </div>
              
//               <div className="bg-blue-50 border border-blue-200 rounded-md px-4 py-3">
//                 <span className="text-blue-800 font-semibold">
//                   {filteredFlats.length} Properties
//                 </span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//         {filteredFlats.length === 0 ? (
//           <div className="text-center py-16">
//             <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
//               <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
//               </svg>
//             </div>
//             <h3 className="text-xl font-semibold text-gray-900 mb-2">
//               {searchTerm ? 'No properties found' : 'No properties available'}
//             </h3>
//             <p className="text-gray-500">
//               {searchTerm ? 'Try adjusting your search criteria.' : 'Check back soon for new listings.'}
//             </p>
//           </div>
//         ) : (
//           <div className="grid grid-cols-2 gap-8">
//             {filteredFlats.map((flat) => (
//               <div
//                 key={flat._id || flat.id}
//                 className="bg-white rounded-xl shadow-lg border border-gray-200 hover:shadow-xl hover:border-gray-300 transition-all duration-300 overflow-hidden group"
//               >
//                 {/* Image Container */}
//                 <div className="relative overflow-hidden">
//                   <img
//                     src={flat.image}
//                     alt={flat.title}
//                     className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
//                   />
//                   <div className="absolute top-4 right-4">
//                     <span className="bg-white/90 text-gray-700 text-sm font-medium px-3 py-2 rounded-lg shadow-sm">
//                       {flat.sharingType}
//                     </span>
//                   </div>
//                 </div>

//                 {/* Content */}
//                 <div className="p-6">
//                   {/* Title and Price */}
//                   <div className="mb-4">
//                     <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
//                       {flat.title}
//                     </h3>
//                     <div className="flex items-center justify-between">
//                       <span className="text-2xl font-bold text-blue-600">{flat.price}</span>
//                       <span className="text-sm text-gray-500 bg-gray-50 px-3 py-1 rounded-full">
//                         {flat.duration}
//                       </span>
//                     </div>
//                   </div>

//                   {/* Location */}
//                   <div className="flex items-center text-sm text-gray-600 mb-4">
//                     <svg className="w-4 h-4 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
//                     </svg>
//                     <span className="font-semibold truncate">{flat.location}</span>
//                   </div>

//                   {/* Property Details Grid */}
//                   <div className="grid grid-cols-2 gap-3 text-sm text-gray-600 mb-4">
//                     <div className="bg-gray-50 rounded-lg p-3 text-center">
//                       <div className="font-semibold text-gray-900">{flat.property}</div>
//                       <div className="text-gray-500 text-xs">Type</div>
//                     </div>
//                     <div className="bg-gray-50 rounded-lg p-3 text-center">
//                       <div className="font-semibold text-gray-900">{flat.furnishing}</div>
//                       <div className="text-gray-500 text-xs">Furnishing</div>
//                     </div>
//                   </div>

//                   {/* Preferences */}
//                   <div className="flex gap-2 mb-4 flex-wrap">
//                     <span className="bg-purple-50 border border-purple-200 text-purple-700 text-sm px-3 py-1 rounded-full">
//                       {flat.genderPreference}
//                     </span>
//                     <span className="bg-green-50 border border-green-200 text-green-700 text-sm px-3 py-1 rounded-full">
//                       {flat.agePreference}
//                     </span>
//                   </div>

//                   {/* Available Date */}
//                   <div className="text-sm text-gray-600 mb-4 bg-gray-50 rounded-lg p-3">
//                     <span className="font-semibold">Available from: </span>
//                     <span className="text-gray-900">
//                       {new Date(flat.availableFrom).toLocaleDateString('en-US', { 
//                         month: 'short', 
//                         day: 'numeric',
//                         year: 'numeric'
//                       })}
//                     </span>
//                   </div>

//                   {/* Facilities */}
//                   {flat.facilities && flat.facilities.length > 0 && (
//                     <div className="mb-6">
//                       <div className="flex flex-wrap gap-2">
//                         {flat.facilities.slice(0, 3).map((facility, index) => (
//                           <span
//                             key={index}
//                             className="bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-full"
//                           >
//                             {facility}
//                           </span>
//                         ))}
//                         {flat.facilities.length > 3 && (
//                           <span className="bg-blue-50 text-blue-700 text-sm px-3 py-1 rounded-full border border-blue-200">
//                             +{flat.facilities.length - 3} more
//                           </span>
//                         )}
//                       </div>
//                     </div>
//                   )}

//                   {/* Action Button */}
//                   <Link
//                     to={`/flats/${flat._id}`}
//                     className="block w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200 text-center"
//                   >
//                     View Details
//                   </Link>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Flat;
// import React, { useEffect, useState } from "react";
// import { getFlats } from "../api/userApi";
// import { Link } from "react-router-dom";
// import FAQ from "../components/FAQ";   // if Flat.jsx is in the same folder "components"


// const Flat = () => {
//   const [flats, setFlats] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");
//   const [searchTerm, setSearchTerm] = useState("");
//   const [activeTab, setActiveTab] = useState("RENT");

//   useEffect(() => {
//     const fetchFlats = async () => {
//       try {
//         console.log("Fetching flats...");
//         const response = await getFlats();
//         console.log("Flats fetched:", response.data);
//         setFlats(response.data);
//         setLoading(false);
//       } catch (err) {
//         setError(err.message || "Failed to fetch flats. Please try again later.");
//         setLoading(false);
//       }
//     };

//     fetchFlats();
//   }, []);

//   // Filter flats based on search term
//   const filteredFlats = flats.filter(flat =>
//     flat.location?.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     flat.title?.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   const tabs = ["BUY", "RENT", "COMMERCIAL", "PG/CO-LIVING", "PLOTS"];

//   // Loading component with Housing.com style
//   if (loading) {
//     return (
//       <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
//         {/* Hero Section */}
//         <div className="relative min-h-[60vh] flex items-center justify-center">
//           <div className="text-center text-white">
//             <div className="animate-spin rounded-full h-12 w-12 border-2 border-white border-t-transparent mx-auto mb-4"></div>
//             <h2 className="text-2xl font-bold mb-2">Finding Premium Properties</h2>
//             <p className="text-blue-200">Loading your dream homes...</p>
//           </div>
//         </div>
        
//         {/* Loading Cards */}
//         <div className="max-w-7xl mx-auto px-4 py-8">
//           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4">
//             {[...Array(12)].map((_, index) => (
//               <div key={index} className="bg-white rounded-lg shadow-sm animate-pulse">
//                 <div className="h-32 bg-gray-200 rounded-t-lg"></div>
//                 <div className="p-3 space-y-2">
//                   <div className="h-3 bg-gray-200 rounded w-3/4"></div>
//                   <div className="h-2 bg-gray-200 rounded w-1/2"></div>
//                   <div className="h-2 bg-gray-200 rounded w-2/3"></div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     );
//   }

//   // Error component
//   if (error) {
//     return (
//       <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex items-center justify-center">
//         <div className="text-center text-white max-w-md mx-auto px-4">
//           <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
//             <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
//               <svg className="w-8 h-8 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.962-.833-2.732 0L3.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
//               </svg>
//             </div>
//             <h3 className="text-xl font-bold mb-3">Unable to load properties</h3>
//             <p className="text-blue-200 mb-6">
//               {typeof error === "string" ? error : error.message || "Please try again later."}
//             </p>
//             <button 
//               onClick={() => window.location.reload()} 
//               className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition-colors duration-200"
//             >
//               Try Again
//             </button>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-white">
//       {/* Hero Section - Housing.com Style */}
//       <div className="relative min-h-[70vh] bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 overflow-hidden">
//         {/* Background Pattern/Animation */}
//         <div className="absolute inset-0">
//           <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
//           <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
//           <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
//         </div>

//         {/* Floating Elements */}
//         <div className="absolute inset-0">
//           {[...Array(15)].map((_, i) => (
//             <div
//               key={i}
//               className="absolute w-2 h-2 bg-white/20 rounded-full animate-float"
//               style={{
//                 left: `${Math.random() * 100}%`,
//                 top: `${Math.random() * 100}%`,
//                 animationDelay: `${Math.random() * 5}s`,
//                 animationDuration: `${4 + Math.random() * 6}s`
//               }}
//             ></div>
//           ))}
//         </div>

//         <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//           {/* Header Content */}
//           <div className="text-center mb-12">
//             <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
//               Properties to rent in <span className="text-yellow-400">Your City</span>
//             </h1>
//             <p className="text-xl text-blue-200 mb-2">
//               {filteredFlats.length}K+ listings added daily and 66K+ total verified
//             </p>
//           </div>

//           {/* Tab Navigation */}
//           <div className="mb-8">
//             <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-1 max-w-4xl mx-auto">
//               <div className="flex flex-wrap justify-center gap-1">
//                 {tabs.map((tab) => (
//                   <button
//                     key={tab}
//                     onClick={() => setActiveTab(tab)}
//                     className={`px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-200 ${
//                       activeTab === tab
//                         ? 'bg-white text-gray-900 shadow-lg'
//                         : 'text-white hover:bg-white/10'
//                     }`}
//                   >
//                     {tab}
//                   </button>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* Search Section */}
//           <div className="max-w-4xl mx-auto">
//             <div className="bg-white rounded-2xl shadow-2xl p-2 flex items-center">
//               <div className="flex-shrink-0 px-4 py-3">
//                 <select className="bg-transparent text-gray-700 font-semibold focus:outline-none">
//                   <option>Pune</option>
//                   <option>Mumbai</option>
//                   <option>Delhi</option>
//                 </select>
//               </div>
//               <div className="flex-1 px-4">
//                 <input
//                   type="text"
//                   placeholder="Search for locality, landmark, project, or builder"
//                   value={searchTerm}
//                   onChange={(e) => setSearchTerm(e.target.value)}
//                   className="w-full text-gray-700 placeholder-gray-400 focus:outline-none text-lg"
//                 />
//               </div>
//               <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-xl font-semibold text-lg transition-colors duration-200 shadow-lg">
//                 Search
//               </button>
//             </div>
//           </div>

//           {/* Quick Suggestions */}
//           <div className="mt-6 text-center">
//             <p className="text-blue-200 mb-2">Continue last search:</p>
//             <div className="flex flex-wrap justify-center gap-2">
//               <span className="bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm">
//                 Pune, Maharashtra, An...
//               </span>
//             </div>
//           </div>
//         </div>

//         {/* Bottom CTA */}
//         <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
//           <p className="text-white mb-2">
//             ⭐ Are you a Property Owner? 
//             <span className="font-semibold underline cursor-pointer hover:text-yellow-400 ml-2">
//               Sell / Rent for FREE
//             </span>
//           </p>
//         </div>
//       </div>
//   <div className="min-h-screen bg-white">
//     {/* Hero Section */}
//     ...
//     {/* Main Content Section */}
//     ...
//       {/* Main Content Section */}
//       <div className="py-12 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           {/* Section Header */}
//           <div className="mb-8">
//             <h2 className="text-3xl font-bold text-gray-900 mb-2">
//               Recommendations for you
//             </h2>
//             <div className="flex items-center justify-between">
//               <p className="text-gray-600">
//                 {filteredFlats.length === 0 
//                   ? 'No properties found' 
//                   : `Showing ${filteredFlats.length} properties`
//                 }
//               </p>
//               <div className="flex gap-2">
//                 <button className="px-4 py-2 text-gray-600 hover:text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
//                   Sort
//                 </button>
//                 <button className="px-4 py-2 text-gray-600 hover:text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
//                   Filter
//                 </button>
//               </div>
//             </div>
//           </div>

//           {/* Properties Grid */}
//           {filteredFlats.length === 0 ? (
//             <div className="text-center py-16">
//               <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
//                 <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
//                 </svg>
//               </div>
//               <h3 className="text-xl font-semibold text-gray-900 mb-2">
//                 {searchTerm ? 'No properties found' : 'No properties available'}
//               </h3>
//               <p className="text-gray-500">
//                 {searchTerm ? 'Try adjusting your search criteria.' : 'Check back soon for new listings.'}
//               </p>
//             </div>
//           ) : (
//             <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4">
//               {filteredFlats.map((flat, index) => (
//                 <div
//                   key={flat._id || flat.id}
//                   className="bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-lg hover:border-gray-300 transition-all duration-300 overflow-hidden group transform hover:-translate-y-1"
//                 >
//                   {/* Image Container */}
//                   <div className="relative overflow-hidden">
//                     <img
//                       src={flat.image}
//                       alt={flat.title}
//                       className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-500"
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
//                     <div className="absolute top-3 right-3">
//                       <span className="bg-white/95 backdrop-blur-sm text-gray-700 text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
//                         {flat.sharingType}
//                       </span>
//                     </div>
//                     {/* Featured badge */}
//                     <div className="absolute top-3 left-3">
//                       <span className="bg-yellow-400 text-gray-900 text-xs font-bold px-2 py-1 rounded-full">
//                         VERIFIED
//                       </span>
//                     </div>
//                   </div>

//                   {/* Content */}
//                   <div className="p-4">
//                     {/* Title and Price */}
//                     <div className="mb-3">
//                       <h3 className="text-sm font-bold text-gray-900 mb-1 line-clamp-1 group-hover:text-blue-600 transition-colors">
//                         {flat.title}
//                       </h3>
//                       <div className="flex items-center justify-between">
//                         <span className="text-lg font-bold text-gray-900">₹{flat.price}</span>
//                         <span className="text-xs text-gray-500 bg-gray-50 px-2 py-1 rounded-full">
//                           {flat.duration}
//                         </span>
//                       </div>
//                     </div>

//                     {/* Location */}
//                     <div className="flex items-center text-xs text-gray-600 mb-2">
//                       <svg className="w-3 h-3 mr-1 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
//                       </svg>
//                       <span className="font-medium truncate">{flat.location}</span>
//                     </div>

//                     {/* Property Details */}
//                     <div className="flex items-center justify-between text-xs text-gray-600 mb-2">
//                       <span className="truncate bg-blue-50 text-blue-700 px-2 py-1 rounded">{flat.property}</span>
//                       <span className="truncate bg-green-50 text-green-700 px-2 py-1 rounded">{flat.furnishing}</span>
//                     </div>

//                     {/* Preferences */}
//                     <div className="flex gap-1 mb-2 flex-wrap">
//                       <span className="bg-purple-50 border border-purple-200 text-purple-700 text-xs px-2 py-1 rounded-full">
//                         {flat.genderPreference}
//                       </span>
//                       <span className="bg-orange-50 border border-orange-200 text-orange-700 text-xs px-1 py-1 rounded-full truncate">
//                         {flat.agePreference}
//                       </span>
//                     </div>

//                     {/* Available Date */}
//                     <div className="text-xs text-gray-600 mb-2 bg-gray-50 rounded-lg p-2">
//                       <span className="font-medium text-gray-900">Available: </span>
//                       <span className="text-green-600 font-semibold">
//                         {new Date(flat.availableFrom).toLocaleDateString('en-US', { 
//                           month: 'short', 
//                           day: 'numeric'
//                         })}
//                       </span>
//                     </div>

//                     {/* Facilities */}
//                     {flat.facilities && flat.facilities.length > 0 && (
//                       <div className="mb-3">
//                         <div className="flex flex-wrap gap-1">
//                           {flat.facilities.slice(0, 2).map((facility, index) => (
//                             <span
//                               key={index}
//                               className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded border"
//                             >
//                               {facility}
//                             </span>
//                           ))}
//                           {flat.facilities.length > 2 && (
//                             <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full font-semibold">
//                               +{flat.facilities.length - 2}
//                             </span>
//                           )}
//                         </div>
//                       </div>
//                     )}

//                     {/* Action Button */}
//                     <Link
//                       to={`/flats/${flat._id}`}
//                       className="block w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 px-4 rounded-lg transition-all duration-200 text-sm text-center transform hover:scale-105 shadow-md hover:shadow-lg"
//                     >
//                       View Details
//                     </Link>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>
//       </div>
//         {/* FAQ Section */}
//     <div className="py-12 bg-gray-100">
//       <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
//         <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
//           Frequently Asked Questions
//         </h2>
//         <FAQ />
//       </div>
//     </div>
//   </div> 

//       <style jsx>{`
//         @keyframes float {
//           0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.7; }
//           25% { transform: translateY(-20px) rotate(90deg); opacity: 1; }
//           50% { transform: translateY(-40px) rotate(180deg); opacity: 0.8; }
//           75% { transform: translateY(-20px) rotate(270deg); opacity: 1; }
//         }
        
//         .animate-float {
//           animation: float infinite ease-in-out;
//         }
        
//         .line-clamp-1 {
//           overflow: hidden;
//           display: -webkit-box;
//           -webkit-line-clamp: 1;
//           -webkit-box-orient: vertical;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default Flat;
import React, { useEffect, useState } from "react";
import { getFlats } from "../api/userApi";
import { Link } from "react-router-dom";
import FAQ from "../components/FAQ";

const Flat = () => {
  const [flats, setFlats] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("RENT");

  useEffect(() => {
    const fetchFlats = async () => {
      try {
        console.log("Fetching flats...");
        const response = await getFlats();
        console.log("Flats fetched:", response.data);
        setFlats(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.message || "Failed to fetch flats. Please try again later.");
        setLoading(false);
      }
    };

    fetchFlats();
  }, []);

  // Filter flats based on search term
  const filteredFlats = flats.filter(flat =>
    flat.location?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    flat.title?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const tabs = ["BUY", "RENT", "COMMERCIAL", "PG/CO-LIVING", "PLOTS"];

  // Modern loading component with glassmorphism
  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/30 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/30 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-500"></div>
        </div>

        {/* Loading content */}
        <div className="relative z-10 min-h-screen flex items-center justify-center">
          <div className="text-center">
            <div className="relative">
              <div className="w-16 h-16 border-4 border-white/20 border-t-white rounded-full animate-spin mx-auto mb-6"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 border-2 border-purple-400/50 border-t-purple-400 rounded-full animate-spin"></div>
            </div>
            <h2 className="text-3xl font-bold text-white mb-3 animate-pulse">Finding Premium Properties</h2>
            <p className="text-blue-200/80 text-lg">Loading your dream homes...</p>
          </div>
        </div>
        
        {/* Modern loading cards */}
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {[...Array(6)].map((_, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden animate-pulse border border-white/20">
                  <div className="h-24 bg-gradient-to-r from-white/10 to-white/5"></div>
                  <div className="p-3 space-y-2">
                    <div className="h-3 bg-white/20 rounded-full w-3/4"></div>
                    <div className="h-2 bg-white/15 rounded-full w-1/2"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Modern error component
  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-900 via-slate-900 to-red-900 flex items-center justify-center relative overflow-hidden">
        {/* Animated error background */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-red-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-10 text-center max-w-md mx-auto px-4">
          <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl">
            <div className="w-20 h-20 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
              <svg className="w-10 h-10 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.962-.833-2.732 0L3.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Something went wrong</h3>
            <p className="text-red-200/80 mb-8 text-lg">
              {typeof error === "string" ? error : error.message || "Unable to load properties. Please try again."}
            </p>
            <button 
              onClick={() => window.location.reload()} 
              className="px-8 py-4 bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white font-bold rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
            >
              Try Again
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Ultra-modern hero section */}
      <div className="relative min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 overflow-hidden">
        {/* Dynamic animated background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full mix-blend-screen filter blur-xl opacity-70 animate-float"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  width: `${Math.random() * 400 + 100}px`,
                  height: `${Math.random() * 400 + 100}px`,
                  background: `linear-gradient(45deg, ${['#8B5CF6', '#06B6D4', '#10B981', '#F59E0B', '#EF4444'][Math.floor(Math.random() * 5)]}, transparent)`,
                  animationDelay: `${Math.random() * 10}s`,
                  animationDuration: `${10 + Math.random() * 20}s`
                }}
              ></div>
            ))}
          </div>
          
          {/* Mesh gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/50 via-transparent to-indigo-900/50"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(0,0,0,0.3)_100%)]"></div>
        </div>

        <div className="relative z-20 min-h-screen flex flex-col justify-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            {/* Modern hero content */}
            <div className="mb-16">
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Properties to rent in <span className="text-yellow-400">Your City</span>
              </h1>
              <p className="text-lg text-blue-200 mb-2">
                {filteredFlats.length}K+ listings added daily and 66K+ total verified
              </p>
            </div>

            {/* Futuristic tab navigation */}
            <div className="mb-12">
              <div className="bg-black/20 backdrop-blur-2xl rounded-3xl p-2 max-w-4xl mx-auto border border-white/10 shadow-2xl">
                <div className="flex flex-wrap justify-center gap-2">
                  {tabs.map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`px-8 py-4 rounded-2xl font-bold text-sm transition-all duration-300 transform hover:scale-105 ${
                        activeTab === tab
                          ? 'bg-gradient-to-r from-white to-gray-100 text-gray-900 shadow-2xl shadow-white/25'
                          : 'text-white hover:bg-white/10 hover:backdrop-blur-xl border border-white/20'
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Ultra-modern search */}
            <div className="max-w-5xl mx-auto mb-12">
              <div className="bg-white/10 backdrop-blur-2xl rounded-3xl p-3 border border-white/20 shadow-2xl">
                <div className="flex flex-col md:flex-row gap-3">
                  <div className="flex-shrink-0">
                    <select className="bg-white/10 backdrop-blur-xl border border-white/20 text-white rounded-2xl px-6 py-4 font-semibold focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent">
                      <option className="bg-gray-900" value="pune">Pune</option>
                      <option className="bg-gray-900" value="mumbai">Mumbai</option>
                      <option className="bg-gray-900" value="delhi">Delhi</option>
                    </select>
                  </div>
                  <div className="flex-1">
                    <input
                      type="text"
                      placeholder="Search for locality, landmark, project, or builder"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full bg-transparent text-white placeholder-white/60 focus:outline-none text-xl px-6 py-4 border border-white/20 rounded-2xl focus:ring-2 focus:ring-cyan-400 focus:border-transparent backdrop-blur-xl"
                    />
                  </div>
                  <button className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 hover:from-cyan-500 hover:via-blue-600 hover:to-purple-700 text-white px-10 py-4 rounded-2xl font-bold text-xl transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-cyan-500/25">
                    Search
                  </button>
                </div>
              </div>
            </div>

            {/* Floating call-to-action */}
            <div className="text-center">
              <div className="inline-flex items-center bg-gradient-to-r from-yellow-400/20 to-orange-500/20 backdrop-blur-xl border border-yellow-400/30 rounded-full px-8 py-4 text-white">
                <span className="text-2xl mr-3">⭐</span>
                <span className="text-lg">Property Owner? </span>
                <button className="ml-2 font-bold underline decoration-yellow-400 underline-offset-4 hover:decoration-2 transition-all duration-200">
                  List for FREE
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Modern properties section */}
      <div className="py-20 bg-gradient-to-br from-slate-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section header with modern styling */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Premium Property Listings
            </h2>
            <div className="flex flex-col md:flex-row items-center justify-between bg-white rounded-3xl p-6 shadow-xl border border-gray-200">
              <p className="text-xl text-gray-600 font-medium">
                {filteredFlats.length === 0 
                  ? 'No properties found' 
                  : `${filteredFlats.length} premium properties available`
                }
              </p>
              <div className="flex gap-3 mt-4 md:mt-0">
              </div>
            </div>
          </div>

          {/* Ultra-modern properties grid */}
          {filteredFlats.length === 0 ? (
            <div className="text-center py-20">
              <div className="w-32 h-32 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl">
                <svg className="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                {searchTerm ? 'No properties found' : 'No properties available'}
              </h3>
              <p className="text-xl text-gray-500">
                {searchTerm ? 'Try adjusting your search criteria.' : 'Check back soon for new listings.'}
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-8">
              {filteredFlats.map((flat, index) => (
                <div
                  key={flat._id || flat.id}
                  className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl border border-gray-200 hover:border-gray-300 transition-all duration-500 overflow-hidden transform hover:-translate-y-2 hover:rotate-1"
                  style={{
                    animationDelay: `${index * 100}ms`
                  }}
                >
                  {/* Image with modern overlay */}
                  <div className="relative overflow-hidden rounded-t-3xl">
                    <img
                      src={flat.image}
                      alt={flat.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                    
                    {/* Modern badges */}
                    <div className="absolute top-4 right-4 flex flex-col gap-2">
                      <span className="bg-white/95 backdrop-blur-sm text-gray-800 text-xs font-bold px-3 py-2 rounded-full shadow-lg">
                        {flat.sharingType}
                      </span>
                    </div>
                    <div className="absolute top-4 left-4">
                      <span className="bg-gradient-to-r from-green-400 to-emerald-500 text-white text-xs font-bold px-3 py-2 rounded-full shadow-lg">
                        VERIFIED
                      </span>
                    </div>

                    {/* Price overlay */}
                    <div className="absolute bottom-4 left-4">
                      <div className="bg-black/50 backdrop-blur-sm rounded-2xl px-4 py-2">
                        <span className="text-white font-bold text-lg">₹{flat.price}</span>
                        <span className="text-white/80 text-sm ml-2">{flat.duration}</span>
                      </div>
                    </div>
                  </div>

                  {/* Content with modern styling */}
                  <div className="p-6">
                    {/* Title */}
                    <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-purple-600 transition-colors duration-300">
                      {flat.title}
                    </h3>

                    {/* Location with icon */}
                    <div className="flex items-center text-gray-600 mb-4">
                      <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center mr-3">
                        <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <span className="font-semibold truncate">{flat.location}</span>
                    </div>

                    {/* Modern info grid */}
                    <div className="grid grid-cols-2 gap-3 mb-4">
                      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-3 border border-blue-100">
                        <div className="font-bold text-gray-900 text-sm">{flat.property}</div>
                        <div className="text-blue-600 text-xs font-medium">Type</div>
                      </div>
                      <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-3 border border-green-100">
                        <div className="font-bold text-gray-900 text-sm">{flat.furnishing}</div>
                        <div className="text-green-600 text-xs font-medium">Furnishing</div>
                      </div>
                    </div>

                    {/* Preference tags */}
                    <div className="flex gap-2 mb-4 flex-wrap">
                      <span className="bg-gradient-to-r from-purple-100 to-pink-100 border border-purple-200 text-purple-700 text-xs font-semibold px-3 py-2 rounded-full">
                        {flat.genderPreference}
                      </span>
                      <span className="bg-gradient-to-r from-orange-100 to-yellow-100 border border-orange-200 text-orange-700 text-xs font-semibold px-3 py-2 rounded-full">
                        {flat.agePreference}
                      </span>
                    </div>

                    {/* Available date */}
                    <div className="bg-gradient-to-r from-gray-50 to-slate-50 rounded-2xl p-3 mb-4 border border-gray-200">
                      <div className="text-xs text-gray-600 font-medium">Available from</div>
                      <div className="text-sm font-bold text-gray-900">
                        {new Date(flat.availableFrom).toLocaleDateString('en-US', { 
                          month: 'long', 
                          day: 'numeric',
                          year: 'numeric'
                        })}
                      </div>
                    </div>

                    {/* Facilities */}
                    {flat.facilities && flat.facilities.length > 0 && (
                      <div className="mb-6">
                        <div className="flex flex-wrap gap-2">
                          {flat.facilities.slice(0, 2).map((facility, index) => (
                            <span
                              key={index}
                              className="bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-medium px-3 py-2 rounded-xl transition-colors duration-200"
                            >
                              {facility}
                            </span>
                          ))}
                          {flat.facilities.length > 2 && (
                            <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs font-bold px-3 py-2 rounded-xl">
                              +{flat.facilities.length - 2} more
                            </span>
                          )}
                        </div>
                      </div>
                    )}

                    {/* CTA Button */}
                    <Link
                      to={`/flats/${flat._id}`}
                      className="block w-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 text-white font-bold py-4 px-6 rounded-2xl transition-all duration-300 transform hover:scale-105 text-center shadow-xl hover:shadow-2xl group-hover:shadow-purple-500/25"
                    >
                      Explore Details
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
{/* Modern FAQ Section */}
<div className="py-20 bg-white relative overflow-hidden">
  {/* Optional Background effects */}
  <div className="absolute inset-0">
    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
    <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
  </div>
  
  <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
        Got 
        <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"> Questions?</span>
      </h2>
      <p className="text-xl text-gray-700">Find answers to commonly asked questions</p>
    </div>
    
    <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-2xl">
      <FAQ />
    </div>
  </div>
</div>


      {/* Custom animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg); 
            opacity: 0.4; 
          }
          25% { 
            transform: translateY(-30px) rotate(90deg); 
            opacity: 0.8; 
          }
          50% { 
            transform: translateY(-60px) rotate(180deg); 
            opacity: 0.6; 
          }
          75% { 
            transform: translateY(-30px) rotate(270deg); 
            opacity: 0.9; 
          }
        }
        
        .animate-float {
          animation: float infinite ease-in-out;
        }
        
        .line-clamp-2 {
          overflow: hidden;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        }

        /* Smooth scroll behavior */
        html {
          scroll-behavior: smooth;
        }

        /* Gradient text animation */
        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        .gradient-animate {
          background-size: 200% 200%;
          animation: gradient-shift 3s ease infinite;
        }
      `}</style>
    </div>
  );
};

export default Flat;