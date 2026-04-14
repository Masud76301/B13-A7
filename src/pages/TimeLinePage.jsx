import React, { useContext, useEffect, useState } from 'react';
import { FriendContext } from '../context/FriendContext';
import Call from '../assets/call.png';
import Text from '../assets/text.png';
import Video from '../assets/video.png';

const actionIcons = {
    Call: Call,
    Video: Video,
    Text: Text
};


const TimeLinePage = () => {
    const { timeLine } = useContext(FriendContext);
    console.log(timeLine);
    const [filterTimeLine, setFilterTimeLine] = useState([]);
    useEffect(() => {
        setFilterTimeLine(timeLine);
    }, [timeLine]);

    const handleFilter = (filterType) => {
        if (filterType === "All") {
            setFilterTimeLine(timeLine);
        } else {
            setFilterTimeLine(timeLine.filter(line => line.actionType === filterType));
        }

    }
    console.log(filterTimeLine);

    return (
        <div className='max-w-5xl mx-auto space-y-6 mt-20'>
            <h1 className='text-5xl font-bold'>Timeline</h1>

            <select defaultValue="All" className="select select-neutral" onChange={e => handleFilter(e.target.value)}>
                <option>All</option>
                <option>Call</option>
                <option>Text</option>
                <option>Video</option>
            </select>



            <div className='space-y-4'>
                {
                    filterTimeLine.map((line, ind) => <div key={ind} className='border border-[#E9E9E9] rounded-md h-19 flex items-center p-4 space-x-2'>
                        <img src={actionIcons[line.actionType]} className='w-8' alt="" />
                        <div>
                            <h1 className='text-[#64748B] text-[18px]'><span className='text-[#244D3F] text-[20px] font-medium'>{line.actionType}</span> with {line.name}</h1>
                            <p className='text-[16px] text-[#64748B] font-medium'>{line.currentDate}</p>
                        </div>
                    </div>)
                }
            </div>

        </div>
    );
};

export default TimeLinePage;