import { useWindowSize } from "./hook/useWindowSize";

function Home() {
    const windowSize = useWindowSize();
    return (
        <div style={{ textAlign: 'center' }}>
            <h1>{windowSize.width} X {windowSize.height}</h1>
        </div>
    )
}
export default Home;