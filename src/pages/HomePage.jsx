import React, { useEffect, useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import FriendCard from '../ui/FriendCard';
import { RingLoader } from "react-spinners";



const HomePage = () => {
    const [loading, setLoading] = useState(true);
    const [friends, setFriends] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch('/friendsData.json')
            const data = await res.json();
            setTimeout(() => {
                setFriends(data);
                setLoading(false);
            }, 1500);

        }
        fetchData();

    }, [])


    return (
        <div className='w-[80%] md:max-w-3xl lg:max-w-5xl mx-auto'>
            <div className='mt-20 text-center'>
                <h1 className='text-3xl md:text-5xl font-bold'>Friends to keep close in your life</h1>
                <p className='mt-4 text-[#64748B]'>Your personal shelf of meaningful connections. Browse, tend, and nurture the <br /> relationships that matter most.</p>
            </div>

            <button className=' mx-auto flex gap-2 btn bg-[#244D3F] text-white font-semibold mt-8 py-3 px-4'><FaPlus></FaPlus> Add a Friend</button>

            <div className='mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
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

            <hr className='my-20 w-full text-[#E9E9E9]' />

            <div>
                <h1 className='text-2xl font-semibold my-4'>Your Friends</h1>

                {loading ? (<div className='flex justify-center items-center'><RingLoader color="#244D3F"></RingLoader></div>) : (
                    <div className='grid  md:grid-cols-2 lg:grid-cols-4 gap-6'>
                        {
                            friends.map(friend => <FriendCard key={friend.id} friend={friend}></FriendCard>)
                        }
                    </div>

                )}



            </div>

        </div>
    );
};

export default HomePage;