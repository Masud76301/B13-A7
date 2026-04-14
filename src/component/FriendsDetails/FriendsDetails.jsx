import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { RiNotificationSnoozeLine, RiDeleteBin6Line } from "react-icons/ri";
import { LuArchive } from "react-icons/lu";

const statusColor = {
    "overdue": "bg-red-600",
    "almost due": "bg-yellow-400",
    "on-track": "bg-green-800"
}

const FriendsDetails = () => {
    const friends = useLoaderData();
    const { id } = useParams();
    const expectedFriend = friends.find(friend => friend.id === Number(id));
    return (
        <div className='container mx-auto flex gap-6 my-20'>
            <div className=''>
                <div className='w-87 h-auto shadow-md flex flex-col justify-center items-center py-6 rounded-sm space-y-2'>
                    <img src={expectedFriend.picture} className='w-20 rounded-full' alt="" />
                    <h1 className='mt-3 text-[20px] font-semibold'>{expectedFriend.name}</h1>
                    <div className={`${statusColor[expectedFriend.status]} text-white px-3 rounded-2xl text-[12px]`}>{expectedFriend.status}</div>
                    <div className='flex gap-4'>
                        {
                            expectedFriend.tags.map((tag, ind) => <p key={ind} className='text-[12px] bg-green-100 text-green-700 px-3 rounded-2xl'>{tag}</p>)
                        }
                    </div>
                    <p className='text-center px-6 text-[16px] italic text-[#64748B]'>{expectedFriend.bio}</p>
                    <p className='text-center px-6 text-[14px] text-[#64748B]'>{expectedFriend.email}</p>

                </div>
                <div className='mt-4 space-y-2 flex flex-col'>
                    <button className="btn bg-white w-87 flex gap-2"><RiNotificationSnoozeLine />Snooze 2 weeks</button>
                    <button className="btn bg-white w-87  flex gap-2"><LuArchive />Archive</button>
                    <button className="btn bg-white w-87 flex gap-2 text-red-600"><RiDeleteBin6Line /> Delete</button>
                </div>
            </div>
            <div className=''>
                <div className='grid grid-cols-3 gap-4'>
                    <div className='w-58 h-auto p-8 shadow-sm rounded-sm text-center space-y-3'>
                        <h1 className='text-[28px] font-semibold'>{expectedFriend.days_since_contact}</h1>
                        <p className='text-[#64748B]'>Days since contact</p>
                    </div>
                     <div className='w-58 h-auto p-8 shadow-sm rounded-sm text-center space-y-3'>
                        <h1 className='text-[28px] font-semibold'>{expectedFriend.goal}</h1>
                        <p className='text-[#64748B]'>Goals (Days)</p>
                    </div>
                     <div className='w-58 h-auto p-8 shadow-sm rounded-sm text-center space-y-3'>
                        <h1 className='text-[28px] font-semibold'>{expectedFriend.next_due_date}</h1>
                        <p className='text-[#64748B]'>Next Due</p>
                    </div>
                </div>
            </div>
        </div>
        
    );
};

export default FriendsDetails;