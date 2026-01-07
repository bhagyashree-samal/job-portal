import React, { useEffect, useState } from "react";
import Navbar from "./shared/Navbar";
import { Button } from "./ui/button";
import { ArrowLeft, Loader2 } from "lucide-react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import axios from "axios";
import { COMPANY_API_END_POINT } from "@/utils/constant";
import { toast } from "sonner";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const CompanySetup = () => {
  const [input, setInput] = useState({
    name: "",
    description: "",
    website: "",
    location: "",
    file: null,
  });

  const [loading, setLoading] = useState(false);
  const params=useParams();
  const navigate=useNavigate();
const {singleCompany}=useSelector(store=>store.company);

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  const changefileHandler = (e) => {
    setInput({ ...input, file: e.target.files[0] });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", input.name);
    formData.append("description", input.description);
    formData.append("website", input.website);
    formData.append("location", input.location);
    if (input.file) {
      formData.append("file", input.file);
    }
    try {
      setLoading(true);
      const res = await axios.put(
        `${COMPANY_API_END_POINT}/update/${params.id}`,
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
          withCredentials: true,
        }
      );
      if(res.data.success){
        toast.success(res.data.message);
        navigate("/admin/companies");
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }finally{
      setLoading(false);
    }
  };

  useEffect(()=>{
setInput({
  name:singleCompany.name||"",
    description: singleCompany.description||"",
    website:singleCompany.website|| "",
    location: singleCompany.location||"",
    file: singleCompany.file||null,
})
  },[singleCompany])

  return (
    <div>
      <Navbar />
      <div className="max-w-xl mx-auto my-10">
        <form onSubmit={submitHandler}>
          <div className="flex items-center gap-5 p-8">
            <Button
              variant="outline"
              onClick={()=>navigate("/admin/companies")}
              className="flex items-center gap-2 text-gray-500 font-semibold"
            >
              <ArrowLeft />
              <span>Back</span>
            </Button>
            <h1 className="font-bold text-xl">Company Setup</h1>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label>Company Name</Label>
              <Input
                value={input.name}
                onChange={changeEventHandler}
                type="text"
                name="name"
              />
            </div>
            <div>
              <Label>Description</Label>
              <Input
                value={input.description}
                onChange={changeEventHandler}
                type="text"
                name="description"
              />
            </div>
            <div>
              <Label>Website</Label>
              <Input
                value={input.website}
                onChange={changeEventHandler}
                type="text"
                name="website"
              />
            </div>
            <div>
              <Label>Location</Label>
              <Input
                value={input.location}
                type="text"
                name="location"
                onChange={changeEventHandler}
              />
            </div>
            <div>
              <Label>Logo</Label>
              <Input
                type="file"
                accept="image/*"
                name="file"
                onChange={changefileHandler}
              />
            </div>
          </div>
         {
            loading ? <Button className="w-full my-4"><Loader2 className="mr-2 h-4 w-4 animate-spin"/>Please wait</Button>: <Button type="submit" className="w-full my-4">
            Update
          </Button>
          }
        </form>
      </div>
    </div>
  );
};

export default CompanySetup;
