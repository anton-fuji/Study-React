import React, {Component} from "react";

const TestComponents = () => {
    return (
        <>
            <h1>Hello World!</h1>
            <h2>ヤッホ〜ー</h2>
        </>
    )
}

//クラスコンポーネント
// class ClassTestComponents extends Component {
//     render() {
//         return(
//             <>
//                 <h1>Hello React!</h1>
//                 <h2>かかってこいー</h2>
//             </>
//         )
//     }
// }
const fruits = ['りんご', 'バナナ', 'みかん']
fruits.map((fruit) => {
    console.log(fruit);
})

class MyListComponents extends Component {
    render()  {
        return (
            <>
                <h1>果物</h1>
                <ul className="list-group m-3">
                    {fruits.map((fruit) => (
                        <li className="list-group-item" key={fruit}>
                            {fruit}
                        </li>
                    ))}
                </ul>
            </>
        )
    }
}


// export default TestComponents;

// 複数exportしたいとき
export { TestComponents,  MyListComponents};