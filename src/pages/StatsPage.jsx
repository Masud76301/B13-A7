import React, { useContext } from 'react';
import { Legend, Pie, PieChart, Tooltip } from 'recharts';
import { FriendContext } from '../context/FriendContext';




const StatsPage = () => {

    const { timeLine } = useContext(FriendContext);

    const totalCall = timeLine.filter(line=> line.actionType === "Call");
    const totalText = timeLine.filter(line=> line.actionType === "Text");
    const totalVideo = timeLine.filter(line=> line.actionType === "Video");

    console.log(totalCall.length,totalText.length,totalVideo.length);

    const data = [
        { name: 'Call', value: totalCall.length, fill: '#0088FE' },
        { name: 'Text', value: totalText.length, fill: '#00C49F' },
        { name: 'Video', value: totalVideo.length, fill: '#FFBB28' },
    ];
    return (
        <div className=' max-w-5xl mx-auto mt-20 space-y-6'>
            <h1 className='text-5xl font-bold '>Friendship Analytics</h1>
            <div className='flex justify-center shadow p-8 items-center'>
                <PieChart  style={{ width: '100%', maxWidth: '400px', maxHeight: '60vh', aspectRatio: 1 }} responsive>
                    <Pie
                        data={data}
                        innerRadius="80%"
                        outerRadius="100%"
                        // Corner radius is the rounded edge of each pie slice
                        cornerRadius="50%"
                        fill="#8884d8"
                        // padding angle is the gap between each pie slice
                        paddingAngle={5}
                        dataKey="value"
                        isAnimationActive={true}
                    />
                    <Legend></Legend>
                    <Tooltip></Tooltip>
                </PieChart>
            </div>

        </div>

    );
};

export default StatsPage;