import "./style.css";

const totalAppleCount = 10;

let rightAppleCount = 0;
let leftAppleCount = totalAppleCount - rightAppleCount;

function App({ root }) {

    function handleLeft() {
        if (rightAppleCount > 0) {
            rightAppleCount--;
            leftAppleCount++;
            root.render(<App root={root} />);
        }
    }

    function handleRight() {
        if (leftAppleCount > 0) {
            leftAppleCount--;
            rightAppleCount++;
            root.render(<App root={root} />);
        }
    }

    return (
        <div className="main">
            <div className="left-display">
                <h1 className="count">{leftAppleCount} Apples</h1>
                <div className="basket-1">Basket 1</div>
            </div>

            <div className="left-button">
                <button onClick={handleLeft}>&larr;</button>
            </div>

            <div className="right-button">
                <button onClick={handleRight}>&rarr;</button>
            </div>

            <div className="right-display">
                <h1 className="count">{rightAppleCount} Apples</h1>
                <div className="basket-1">Basket 2</div>
            </div>
        </div>
    );
}

export default App;