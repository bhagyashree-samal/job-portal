import React, { useState } from 'react'
import Navbar from './shared/Navbar'
import { Avatar, AvatarImage } from './ui/avatar'
import { Button } from './ui/button'
import { Contact, Mail, Pen } from 'lucide-react'
import { Badge } from './ui/badge'
import { Label } from './ui/label'
import AppliedJobTable from './AppliedJobTable'
import UpdateProfileDialog from './UpdateProfileDialog'

const Skills=["Html" , "Css" ,"JavaScript","ReactJs"]
  const isResume=true;

const Profile = () => {
  const [open,setOpen]=useState(false);
  return (
    <div>
      <Navbar/>
      <div className="max-w-4xl mx-auto bg-white border border-gray-200 rounded-2xl my-5 p-8">
        <div className='flex justify-between'>
        <div className='flex items-center gap-4'>
 <Avatar className="h-24 w-24">
          <AvatarImage src="https://banner2.cleanpng.com/20190129/icq/kisspng-logo-vector-graphics-graphic-design-i-can-design-a-professional-logo-for-5-seoclerk-5c5094ce54d461.0727217315487848463475.jpg" alt="no img"/>
        </Avatar>
        <div>
          <h1 className='font-medium text-xl'>Full Name</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad tempore explicabo beatae tempora sequi repellendus inventore eos, odit omnis vel dolores. Tempore, molestiae.</p>
        </div>
</div>
<Button onClick={()=>setOpen(true)} className="text-right" variant='outline'><Pen/></Button>
        </div>
        <div className='my-5'>
          <div className='flex items-center gap-3 my-2'>
            <Mail/>
            <span>samal@gmail.com</span>
          </div>
          <div className='flex items-center gap-3 my-2'>
          <Contact/>
           <span>9777763709</span>
        </div>
        </div>
        <div className='my-5'>
          <h1>Skills</h1>
          <div className="flex items-center gap-1">
          {
           Skills.length!==0 ? Skills.map((item,index)=><Badge key={index}>{item}</Badge>):<span>NA</span>
          }
        </div>
      </div>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label className="text-md font-bold">Resume</Label>
        {
          isResume ?<a target='_blank' href='https://youtube.com/@patelmernstack' className='text-blue-500 w-full hover:underline cursor-pointer'>Patel Mern Stack</a>:<span>NA</span>
        }
      </div>
      </div>
      <div className="max-w-4xl mx-auto bg-white rounded-2xl">
        <h1 className='font-bold text-lg my-5'>Applied Jobs</h1>
        <AppliedJobTable/>
      
      </div>
      <UpdateProfileDialog open={open} setOpen={setOpen}/>
      </div>
  )
}

export default Profile