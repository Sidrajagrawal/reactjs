import GrandChild from "./GrandChild";

function Child() {
    return (
        <div>
            Hello from Child
            <GrandChild />
        </div>
    )
}
export default Child;