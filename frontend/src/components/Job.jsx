import React from 'react'
import { Button } from './ui/button'
import { Bookmark } from 'lucide-react'
import { Avatar, AvatarImage } from './ui/avatar'
import { Badge } from './ui/badge'

const Job = () => {
  return (
    <div className='p-5 rounded-md shadow-xl bg-white border border-gray-100'>
      <div className="flex items-center justify-between">
      <p className='text-sm text-gray-500'>2 days ago</p>
      <Button variant='outline'className="rounded-full" size='icon'><Bookmark/></Button>
      </div>
      <div className="flex items-center gap-2 my-2">
      <Button className='p-6' variant='outline' size='icon'>
        <Avatar>
          <AvatarImage src="https://banner2.cleanpng.com/20190129/icq/kisspng-logo-vector-graphics-graphic-design-i-can-design-a-professional-logo-for-5-seoclerk-5c5094ce54d461.0727217315487848463475.jpg" alt="no img"/>
        </Avatar>
      </Button>
      <div>
        <h1 className='font-medium text-lg'>Company Name</h1>
        <p className='text-sm text-gray-500'>India</p>
      </div>
    </div>
    <div>
      <h1 className='font-bold text-lg my-2'>Title</h1>
      <p className='text-sm text-gray-600 '>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae provident explicabo tempora quia sapiente vel ratione voluptatem tempore ullam? Aspernatur.</p>
    </div>
     <div className='flex items-center gap-2 mt-4'>
                <Badge className={'text-blue-700 font-bold'} variant="ghost">12 Positions</Badge>
                <Badge className={'text-[#F83002] font-bold'} variant="ghost">Part Time</Badge>
                <Badge className={'text-[#7209b7] font-bold'} variant="ghost">24LPA</Badge>
            </div>
            <div className='flex items-center gap-4 mt-4'>
              <Button variant='outline'>Details</Button>
              <Button className="text-[#7209b7]">Save For Later</Button>
            </div>
    </div>
  )
}

export default Job