import React from "react";


const EventListener =() => {
    const onClickButton = (message) => {
        alert(message);
    };

    return (
        <div>
            <button onClick={() => onClickButton("Hello")}></button>
        </div>             
    )
}

export default EventListener;