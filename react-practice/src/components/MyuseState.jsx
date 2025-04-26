//** useState使わない場合 */ 

// const Counter = () => {
//     let count = 0;
//     const increment = () =>{
//         count++
//         console.log(count)

//         const countDisplay = document.
//         getElementById('count-display');
//         countDisplay.textContent = count;
//     }

//     return (
//         <div>
//             <h1>
//                 カウンター:<span id="count-display">{count}</span>
//             </h1>
//             <button className="text-black" onClick={increment}>カウントアップ</button>
//         </div>
//     );
// }

//** useState使う場合 */ 
import React, {useState} from "react";

const Counter = () => {
    const [count, setCount] = useState(0);
    const increment = () => {
        setCount(count + 1);
    }

    return (
        <div>
            <h1>
                カウンター:<span id="count-display">{count}</span>
            </h1>
            <button className="text-black" onClick={increment}>カウントアップ</button>
        </div>
    );
}

export default Counter;