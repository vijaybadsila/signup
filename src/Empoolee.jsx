import { Link } from "react-router-dom";
import Add from "./Add";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
export default function Employees() {
      const navigate = useNavigate();
        const [data, setData] = useState([]);
 const getdata = async () => {
  try {
    const response = await fetch("http://localhost:5000/api/v1/");
    
    // Convert response to JSON
    const result = await response.json();
    setData(result.data)
    console.log("Fetched Data:", result);
  } catch (err) {
    console.error("Error fetching data:", err);
  }
};

const deleteUser=async (id)=>{
try{
const response=await fetch(`http://localhost:5000/api/v1/delete/${id}`,{ method: "DELETE" });
const result = await response.json();
    console.log(result);
}
catch(err){
  console.error(err);
  console.log(err);

  
}
}
  return (
    <div className="min-h-screen bg-black text-white p-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-semibold">Employees</h1>
          <p className="text-sm text-gray-400">
            This is a list of all employees. You can add new employees, edit or delete existing ones.
          </p>
        </div>
     <button onClick={getdata}
                 className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm "
         >
          Show All Data
          </button>
        <button 
                onClick={() => navigate("/add")}
        className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm mr-10 ">
          Add Employee
        
        </button>

    
      </div>

      {/* Table */}
      <div className=" overflow-hidden rounded-lg border  border-gray-800 bg-[#111827]">
        <table className="w-full text-left">
          <thead className="bg-[#1F2937] w-full  text-gray-300 text-sm">
            <tr>
              <th className="px-4 py-3">Employee</th>
              <th className="px-4 py-3">Title</th>
              <th className="px-4 py-3">Role</th>
            </tr>
         
          </thead>
          
      <tbody className="text-gray-200">
  {data.length === 0 ? (
    <tr>
      <td colSpan="3" className="text-center py-4 text-gray-500">
        No Employees Found — Click "Show All Data" to load records.
      </td>
    </tr>
  ) : (
    data.map((user, index) => (
      <tr key={index} className="hover:bg-gray-800 transition">
        <td className="px-4 py-3">{user.name}</td>
        <td className="px-4 py-3">{user.title}</td>
        <td className="px-4 py-3">{user.Role}</td>
     <td className="px-4 py-3 text-center">
  <button
    className="
      text-red-500 
      font-bold 
      transition-all 
      duration-300 
      hover:text-red-700 
      hover:scale-125
    "
    onClick={() => deleteUser(user._id)}

  >
    ✖
  </button>
</td>
      </tr>
    ))
  )}
</tbody>
        </table>
      </div>
    </div>
  );
}
