import Parent3 from "./Parent3";
function Parent2({ setSum }) {
    return (
        <div>
            <Parent3 setSum={setSum} />
        </div>
    );
}
export default Parent2;