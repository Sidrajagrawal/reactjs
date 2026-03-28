import { useState } from "react";
import Parent2 from "./Parent2";

function Parent1() {
    const [sum, setSum] = useState(0);
    return (
        <div>
            <Parent2 setSum={setSum}  />
            <div>
                {sum}
            </div>
        </div>
    );
}
export default Parent1;