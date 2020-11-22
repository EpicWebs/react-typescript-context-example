import React, { useContext } from 'react';
import { Context } from "./../context/context";

function Item() {
    const { state, dispatch } = useContext(Context);

    const updateData = () => dispatch({ type: "UPDATE_DATA" });

    console.log(state);

    return (
        <div className="item">
            <button onClick={updateData}>
                Test Button
            </button>
        </div>
    );
}

export default Item;