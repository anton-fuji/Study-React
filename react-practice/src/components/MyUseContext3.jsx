import React, { useContext } from "react";
import { FoodFromMyUseContext, UserFromAppContext } from "../App";


const MyUseContext3 = () => {
    const user = useContext(UserFromAppContext);
    const food = useContext(FoodFromMyUseContext);

    return (
        <div>
            {user.name}さん
            {user.age}歳
            好きな食べ物は{food}です
        </div>
    )
}

export default MyUseContext3;