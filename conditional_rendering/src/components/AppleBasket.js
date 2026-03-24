import { useState } from "react";

function AppleBasket({ AppleCnt, BasketName }) {
    const empty = 'empty';
    const full = 'full';
    return (
        <div>
            <h1>{AppleCnt}</h1>
            <p>
                {BasketName}
                {AppleCnt == 0 && <span>({empty})</span>}
                {AppleCnt == 10 && <span>({full})</span>}
            </p>
        </div>
    )
}
export default AppleBasket;