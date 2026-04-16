function ContextMenu({ menuPosition, setShowEditBtn, setMenuPosition, setExpenses, rowId, setExpense, expenses, setEditId }) {
    const { left, top } = menuPosition;
    if (left == null) return null; 

    const handleEdit = () => {
        setMenuPosition({});
        setShowEditBtn(true);
        setEditId(rowId); 

        const data = expenses.find((item) => item.id === rowId);

        setExpense({
            title: data.title,
            category: data.category,
            amount: data.amount
        });
    }
    
    const handleDelete = () => {
        setExpenses((prevState) => prevState.filter((item) => item.id !== rowId));
        setMenuPosition({});
    }

    return (
        <div
            className="absolute w-20 h-15 bg-gray-300 rounded-lg"
            style={{ left: `${left + 4}px`, top: `${top + 4}px` }}
        >
            <div className="w-full text-center border-b">
                <button className="mt-1 cursor-pointer" onClick={handleEdit}>Edit</button>
            </div>
            <div className="w-full text-center">
                <button className="cursor-pointer" onClick={handleDelete}>Delete</button>
            </div>
        </div>
    );
}
export default ContextMenu;