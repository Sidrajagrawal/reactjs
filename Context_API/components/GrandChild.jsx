import { UserContext } from "./Context/UserContext";
import { useContext } from "react";

function GrandChild() {
    const user = useContext(UserContext);
    return (
        <div>
            Hello from Grand Child {user.userName}
        </div>
    )
}
export default GrandChild;