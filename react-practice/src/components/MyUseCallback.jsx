//useCallbackを使わない場合
{/*import React, {useState} from "react";

const ChildComponent = ({onClick}) => {
    console.log("子コンポーネントが呼ばれました")
    return (
        <>
        <button className="btn btn-primary" onClick={onClick}>
            Click me
        </button>
        </>
    )
}

const ParentComponent = () => {
    const [count, setCount] = useState(0)

    const increment = () => {
        setCount(count + 1)
    }

    return (
        <>
            <ChildComponent onClick={increment} />
            <p>カウンター: {count}</p>
        </>
    );
}

export default ParentComponent;
*/}

//useCallback使用した場合
import React, {useCallback, memo, useState} from "react";

// メモを使って"コンポーネント"をメモ化
const ChildComponent = memo(({onClick}) => {
    console.log("子コンポーネントが呼ばれました")
    return (
        <>
        <button className="btn btn-primary" onClick={onClick}>
            Click me
        </button>
        </>
    );
});

// useCallbackを使って"関数"をメモ化
const ParentComponent = () => {
    const [count , setCount] = useState(0)

    const increment = useCallback(() => {
        setCount((prevCount) =>prevCount + 1)
    }, []);

    return (
        <>
            <ChildComponent onClick={increment} />
            <p>カウンター: {count}</p>
        </>
    )
}

export default ParentComponent;