import { UserContext } from "./Context/UserContext.jsx";
import Parent from './Parent.jsx'

function Home() {
    const user = {
        userName: "Siddharth",
        userAddress: "Vrindavan"
    }

    return (
        <UserContext.Provider value={user}>
            <Parent />
        </UserContext.Provider>
    )
}

export default Home;