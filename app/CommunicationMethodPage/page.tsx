// "use client";

// import CommunicationMethodForm from "@/components/CommunicationMethodForm";
// import { useState } from "react";
// import { CommunicationMethod } from "@/types/adminTypes";

// const CommunicationMethodPage = () => {
//   const [methods, setMethods] = useState<CommunicationMethod[]>([]);

//   // Handle form submission
//   const handleAddMethod = (method: CommunicationMethod) => {
//     setMethods((prevMethods) => [...prevMethods, { ...method, id: String(Date.now()) }]);
//   };

//   // Handle delete method
//   const handleDeleteMethod = (id: string) => {
//     setMethods((prevMethods) => prevMethods.filter((method) => method.id !== id));
//   };

//   return (
//     <div className="p-10">
//       <CommunicationMethodForm
//         onSubmit={handleAddMethod}
//         methods={methods}
//         onDelete={handleDeleteMethod}
//       />
//     </div>
//   );
// };

// export default CommunicationMethodPage;
