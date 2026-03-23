import Home from "./src/Components/Home";
function App(){
    return(
        <div>
            <Home>
                {
                    function(){
                        console.log("Hello From App Function");
                        return 4+4;
                    }
                }
            </Home>
        </div>
    )
}
export default App;