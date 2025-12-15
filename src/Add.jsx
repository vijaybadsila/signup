import axios from "axios"
import { useState } from "react";
import { useNavigate } from "react-router-dom";


export default function CreateEmployee() {

    const [name,setName]=useState()
const [email,setEmail]=useState()
const [title,setTitle]=useState()
const [Department,setDEpartment]=useState("")
const [Role,setRole]=useState("")
const AllData = async (e) => {
  e.preventDefault();

  const payload = {
    name,
    title,
    Role,
    Department,
    email,
  };

  try {
    const response = await fetch("http://localhost:5000/api/v1/Add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    alert("User Created");
    navigate("/WelcomePage");
  } catch (err) {
    console.error(err);
    alert("Something went wrong");
  }
};



    const HandleName=(event)=>{
setName(event.target.value)

console.log(name);

    }
    const HandleEmail=(event)=>{
      
setEmail(event.target.value)
console.log(email);

    }
     const Handletitle=(event)=>{
         
     setTitle(event.target.value)   
     }
       const HandleDepartment=(event)=>{
    
     setDEpartment(event.target.value)   
     }
          const HandleRole=(event)=>{
           
     setRole(event.target.value)   
     }

  const navigate = useNavigate();

  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2 bg-black text-white">

      {/* LEFT SIDE IMAGE SECTION */}
      <div className="relative">
        <img 
          src="/images/Emp.png" 
          alt="Office"
          className="w-full h-full object-cover opacity-90"
        />
        <div className="absolute bottom-10 left-10 text-white">
          <h1 className="text-3xl font-semibold max-w-md leading-snug">
            Empower your business with our employee creation!
          </h1>
        </div>
      </div>

      {/* RIGHT SIDE FORM SECTION */}
      <div className="p-10 flex flex-col justify-center">
        
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
 className="text-indigo-400 text-sm mb-6 hover:underline flex items-center gap-1"
        >
          ← Back to all Employee List
        </button>

        <h2 className="text-3xl font-semibold mb-6">Create an Employee</h2>

        <form className="space-y-5" onSubmit={AllData}>

          <div>
            <label className="block mb-1 text-sm text-gray-300">Employee Name</label>
            <input type="text" placeholder="Enter Full Name"
            name="name"
            value={name}
            onChange={HandleName}
            
            
              className="w-full p-3 bg-transparent border border-gray-700 rounded-md focus:border-indigo-500 outline-none" />
          </div>

          <div>
            <label className="block mb-1 text-sm text-gray-300">Employee Email</label>
            <input type="email" placeholder="Enter Email"
             onChange={HandleEmail}
             value={email}
             name="email"
              className="w-full p-3 bg-transparent border border-gray-700 rounded-md focus:border-indigo-500 outline-none" />
          </div>

          <div>
            <label className="block mb-1 text-sm text-gray-300">Employee Title</label>
            <input type="text" placeholder="Enter Title"
              onChange={Handletitle}
             name="title"
             value={title}
              className="w-full p-3 bg-transparent border border-gray-700 rounded-md focus:border-indigo-500 outline-none"
             
              />
          </div>

          <div>
            <label className="block mb-1 text-sm text-gray-300">Employee Department</label>
            <input type="text" placeholder="Enter Department"
             onChange={HandleDepartment}
             name="Department"
             value={Department}
              className="w-full p-3 bg-transparent border border-gray-700 rounded-md focus:border-indigo-500 outline-none" />
          </div>

          <div>
            <label className="block mb-1 text-sm text-gray-300">Employee Role</label>
            <input type="text" placeholder="Enter Role"
             onChange={HandleRole}
             name="Role"
             value={Role}
              className="w-full p-3 bg-transparent border border-gray-700 rounded-md focus:border-indigo-500 outline-none" />
          </div>

     <button
  className="w-full bg-indigo-600 hover:bg-indigo-700 py-3 rounded-md text-white font-semibold transition"
>
  Create Employee
</button>

        </form>
      </div>
    </div>
  );
}

