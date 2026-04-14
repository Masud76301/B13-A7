import React, { use } from 'react';
import { FaPlus } from 'react-icons/fa';
import FriendCard from '../ui/FriendCard';

const friendPromise = fetch('/friendsData.json').then(res => res.json());

const HomePage = () => {
    const friends = use(friendPromise);
 
    return (
        <div className='max-w-5xl mx-auto'>
            <div className='mt-20 text-center'>
                <h1 className='text-5xl font-bold'>Friends to keep close in your life</h1>
                <p className='mt-4 text-[#64748B]'>Your personal shelf of meaningful connections. Browse, tend, and nurture the <br /> relationships that matter most.</p>
            </div>
            
            <button className=' mx-auto flex gap-2 btn bg-[#244D3F] text-white font-semibold mt-8 py-3 px-4'><FaPlus></FaPlus> Add a Friend</button>

            <div className='mt-10 grid grid-cols-4 gap-6'>
                <div className='w-60 h-34 p-8 shadow-sm rounded-sm text-center space-y-3'>
                    <h1 className='text-4xl font-semibold'>10</h1>
                    <p className='text-[#64748B]'>Total Friends</p>
                </div>

                <div className='w-60 h-34 p-8 shadow-sm rounded-sm text-center space-y-3'>
                    <h1 className='text-4xl font-semibold'>3</h1>
                    <p className='text-[#64748B]'>On Track</p>
                </div>

                <div className='w-60 h-34 p-8 shadow-sm rounded-sm text-center space-y-3'>
                    <h1 className='text-4xl font-semibold'>6</h1>
                    <p className='text-[#64748B]'>Need Attention</p>
                </div>

                <div className='w-60 h-34 p-8 shadow-sm rounded-sm text-center space-y-3'>
                    <h1 className='text-4xl font-semibold'>12</h1>
                    <p className='text-[#64748B]'>Interactions This Month</p>
                </div>       
            </div>

            <hr  className='my-20 w-full text-[#E9E9E9]'/>

            <div>
                <h1 className='text-2xl font-semibold my-4'>Your Friends</h1>
                <div className='grid grid-cols-4 gap-6'>
                    {
                        friends.map(friend=><FriendCard key={friend.id} friend={friend}></FriendCard>)
                    }
                </div>

            </div>

        </div>
    );
};

export default HomePage;