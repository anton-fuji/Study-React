import React, {Component} from "react";

// const items = ['japnan', 'USA', 'China']
const items = []
class ItemComponent extends Component {
    render () {
        return (
            <>
                <h1>国名リスト</h1>
                <ul className="list-group">
                    {items.length > 0 ? (
                        items.map((item) => (
                            <li className="list-group-item" key={item}>{item}</li> 
                        ))
                    ): (<li className="list-group-item">None Data</li>
                    )}
                </ul>
            </>
        );
    }
}

export default ItemComponent;