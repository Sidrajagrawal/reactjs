import { useState } from "react";

// function App() {
//     // console.log(useState);
//     // console.log(useState());

//     const myArray = useState(0);

//     // console.log(myArray[0]);
//     // console.log(myArray[1]);

//     function handleClicked(){
//         myArray[1](myArray[0]+1)
//     }

//     return (
//         <div>
//             <span>{myArray[0]}</span>
//             <button onClick={handleClicked}>Clicked </button>
//         </div>
//     )
// }
// export default App;


// Method 2
// function App() {
//     const [cnt, setCnt] = useState(0);
//     function handleClicked() {
//         setCnt(cnt + 1);
//     }
//     return (
//         <div>
//             <span>{cnt}</span>
//             <button onClick={handleClicked}>Clicked</button>
//         </div>
//     )
// }

// Method 3
function App() {
    const [cnt, setCnt] = useState(0);
    function handleClicked() {
        // This will not work because rendering happens after this function end;
        // setCnt(cnt + 1);
        // setCnt(cnt + 1);
        // setCnt(cnt + 1);
        // Solution fix
        setCnt(prev => prev + 1);
        setCnt(prev => prev + 1);
        setCnt(prev => prev + 1);
    }
    return (
        <div>
            <span>{cnt}</span>
            <button onClick={handleClicked}>Clicked</button>
        </div>
    )
}

export default App;