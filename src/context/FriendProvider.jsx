import React, { useState } from 'react';
import { FriendContext } from './FriendContext';



const FriendProvider = ({ children }) => {
    const [timeLine, setTimeLine] = useState([]);

    const handleTimeline = ({ expectedFriend }, actionType) => {
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