function ExpenseForm({ setExpenses, setTotalExpense }) {
    const handleFormSubmit = (e) => {
        e.preventDefault();
        const expense = getFormData(e.target);
        setTotalExpense((prevState) => Number(prevState) + Number(expense.amount));
        const newExpense = { ...expense, id: crypto.randomUUID() };
        setExpenses((prevState) => [...prevState, newExpense]);
    }
    const getFormData = (form) => {
        const formData = new FormData(form);
        const data = {}
        for (const [key, value] of formData.entries()) {
            data[key] = value;
        }
        return data;
    }
    return (
        <form className="mt-[5%]" onSubmit={handleFormSubmit}>
            <div className="flex flex-col">
                <label htmlFor="title">Title</label>
                <input type="text" name="title" placeholder="Enter Title" className="border-1 w-[60%] p-1" />
            </div>
            <div className="flex flex-col mt-[2%]">
                <label htmlFor="category">Category</label>
                <select name="category" id="category" className="border-1 w-[60%] p-1">
                    <option value="" hidden>Select Category</option>
                    <option value="Grocery">Grocery</option>
                    <option value="Clothes">Clothes</option>
                    <option value="Bills">Bills</option>
                    <option value="Education">Education</option>
                    <option value="Medicine">Medicine</option>
                </select>
            </div>
            <div className="flex flex-col mt-[2%]">
                <label htmlFor="amount">Amount</label>
                <input type="text" name="amount" id="" placeholder="Enter Amount" className="border-1 w-[60%] p-1" />
            </div>
            <div className="w-[60%] mt-[2%]">
                <button className="w-full p-2 bg-gray-400 cursor-pointer">Add Expense</button>
            </div>
        </form>

    )
}
export default ExpenseForm;