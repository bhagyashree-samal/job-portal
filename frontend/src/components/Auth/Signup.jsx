import React, { useState } from "react";
import Navbar from "../shared/Navbar";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { RadioGroup } from "../ui/radio-group";
import { Button } from "../ui/button";
import { Link, useNavigate } from "react-router-dom";
import { USER_API_END_POINT } from "@/utils/constant";
import axios from "axios";
import { toast } from "sonner";


const Signup = () => {
  const navigate=useNavigate();
   const [input,setInput]=useState({
    fullname:"",
    email:"",
    phoneNumber:"",
    password:"",
    role:"",
    file:""

  });

  const changeEventHandler=(e)=>{
  setInput({...input,[e.target.name]:e.target.value});
  }

  const changefileHandler=(e)=>{
  setInput({...input,file:e.target.files?.[0]});
  }

  const submitHandler=async(e)=>{
e.preventDefault();
const formData=new FormData();
formData.append("fullname",input.fullname);
formData.append("email",input.email);
formData.append("phoneNumber",input.phoneNumber);
formData.append("password",input.password);
formData.append("role",input.role);
if(input.file){
  formData.append("file",input.file);
}
try{
const res=await axios.post(`${USER_API_END_POINT}/register`,formData,{
  headers:{
    "Content-Type":"multipart/form-data"
  },
  withCredentials:true,
});
if(res.data.success){
  navigate("/login");
  toast.success(res.data.message);
}
}catch(error){
console.log(error);
toast.error(error.response.data.message);
}



  }
  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center max-w-7xl mx-auto">
        <form onSubmit={submitHandler} action="" className="w-1/2 border border-gray-200 rounded-md p-4 my-10">
          <h1 className="font-bold text-xl mb-5">Sign Up</h1>
          <div className="my-2">
            <Label>Full Name</Label>
            <Input value={input.fullname} name='fullname' onChange={changeEventHandler} type="text" placeholder="Bhagyashree Samal" />
          </div>
          <div className="my-2">
            <Label>Email</Label>
            <Input value={input.email} name='email' onChange={changeEventHandler} type="email" placeholder="xyz@gmail.com" />
          </div>
           <div className="my-2">
            <Label>Phone Number</Label>
            <Input value={input.phoneNumber} name='phoneNumber' onChange={changeEventHandler} type="text" placeholder="+91 xxxxxxxxxx" />
          </div>
           <div className="my-2">
            <Label>Password</Label>
            <Input value={input.password} name='password' onChange={changeEventHandler} type="password" placeholder="minimum 4 digit password enter" />
            </div>
            <div className="flex items-center justify-between" >
              <RadioGroup className="flex items-center gap-4 my-5">
      <div className="flex items-center space-x-2">
        <Input checked={input.role==='student'} onChange={changeEventHandler} type="radio" name="role" value="student" className="cursor-pointer"/>
        <Label htmlFor="r1">Student</Label>
      </div>
      <div className="flex items-center space-x-2">
        <Input checked={input.role==='recruiter'} onChange={changeEventHandler} type="radio" name="role" value="recruiter" className="cursor-pointer"/>
        <Label htmlFor="r2">Recruiter</Label>
      </div>
    </RadioGroup>
    <div className="flex items-center gap-2">
      <Label>Profile</Label>
<Input onChange={changefileHandler} accept="image/*" type="file" className="cursor-pointer"/>
    </div>
            </div>
          <Button type="submit" className='w-full my-4'>Sign Up</Button>
          <span className="text-sm">Already have an account? <Link to="/login" className="text-blue-600">Login</Link></span>
        </form>
      </div>
    </div>
  );
};

export default Signup;
