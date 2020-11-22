import React, { useContext } from 'react';
import { Context } from "./../context/context";

function Item() {
    const { state, loadMoreData } = useContext(Context);

    console.log(state);

    return (
        <div className="item">
            <button onClick={loadMoreData}>
                Test Button
            </button>
        </div>
    );
}

export default Item;