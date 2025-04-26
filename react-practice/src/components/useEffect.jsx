import React, {useState, useEffect} from "react";


const DateFetcher = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then((data) => setData(data))
    }, []);

    return(
        <div>
            {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : 'Loading...'}
        </div>
    )
}

export default DateFetcher;