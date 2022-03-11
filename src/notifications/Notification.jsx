import React, { useState } from "react";

import { BiErrorCircle } from 'react-icons/bi';
import { AiOutlineCheckCircle } from 'react-icons/ai';

const Notification = props => {
    const [exit, setExit] = useState(false);
    const [width, setWidth] = useState(0);
    const [intervalID, setIntervalID] = useState(null);

    const handleStartTimer = () => {
        const id = setInterval(() => {
            setWidth(prev => {
                if (prev < 100) {
                    return prev + 0.5;
                }

                clearInterval(id);
                return prev;
            });
        }, 40);

        setIntervalID(id);
    };

    const handlePauseTimer = () => {
        clearInterval(intervalID);
    };

    const handleCloseNotification = () => {
        handlePauseTimer();
        setExit(true);
        setTimeout(() => {
            props.dispatch({
                type: "REMOVE_NOTIFICATION",
                id: props.id
            })
        }, 400)
    };

    React.useEffect(() => {
        if (width === 100) {
            // Close notification
            handleCloseNotification()
        }
    }, [width])

    React.useEffect(() => {
        handleStartTimer();
    }, []);

    return (
        <div
            onMouseEnter={handlePauseTimer}
            onMouseLeave={handleStartTimer}
            className={`notification`}
        >
            <p className="flex flex-wrap items-center">
                {props.type === "success" &&
                    <AiOutlineCheckCircle className="mr-2 text" />
                }
                {props.type === "error" &&
                    <BiErrorCircle className="mr-2" />
                }
                <span>{props.message}</span>
            </p>
            <div className="bar-container">
                <div className={"bar"} style={{ width: `${width}%` }} />
            </div>
        </div>
    );
};

export default Notification;
