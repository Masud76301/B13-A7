import React, { useState } from 'react';
import { FriendContext } from './FriendContext';
import { toast } from 'react-toastify';



const FriendProvider = ({ children }) => {
    const [timeLine, setTimeLine] = useState([]);

    const handleTimeline = ({ expectedFriend }, actionType) => {
        toast.success(`${actionType} with ${expectedFriend.name}`,{
position: "top-center"});
        const currentDate = new Date().toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric"
        });
        const updatedFriend = {
            ...expectedFriend,
            actionType: actionType,
            currentDate: currentDate
        }
        setTimeLine([...timeLine, updatedFriend]);
    }
    const data = {
        timeLine,
        setTimeLine,
        handleTimeline,
    }
    
    return <FriendContext.Provider value={data}>{children}</FriendContext.Provider>;
};

export default FriendProvider;