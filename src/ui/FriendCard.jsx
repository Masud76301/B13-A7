import React from 'react';
import { Link } from 'react-router';
const statusColor = {
    "overdue":"bg-red-600",
    "almost due":"bg-yellow-400",
    "on-track":"bg-green-800"
}

const FriendCard = ({friend}) => {
    return (
        <Link to={`/friendsDetails/${friend.id}`} className='w-60 h-60 shadow-sm flex flex-col justify-center items-center py-6 rounded-sm space-y-2'>
            <img src={friend.picture} className='w-20 rounded-full'  alt="" />
            <h1 className='mt-3 text-[20px] font-semibold'>{friend.name}</h1>
            <p className='text-[12px] text-[#64748B]'>{friend.days_since_contact}d ago</p>
            <div className='flex gap-4'>
                {
                    friend.tags.map((tag,ind)=><p key={ind} className='text-[12px] bg-green-100 text-green-700 px-3 rounded-2xl'>{tag}</p> )
                }
            </div>
            <div className={`${statusColor[friend.status]} text-white px-3 rounded-2xl text-[12px]`}>{friend.status}</div>
        </Link>
    );
};

export default FriendCard;