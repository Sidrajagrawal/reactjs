function Parent4({ setSum }) {
    return (
        <div>
            <button onClick={() => setSum(prev => prev + 1)}>Click me</button>
        </div>
    );
}
export default Parent4;
