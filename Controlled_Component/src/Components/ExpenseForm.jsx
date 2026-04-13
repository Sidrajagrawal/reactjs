import { useState } from "react";

function ExpenseForm({ setExpenses, setTotalExpense }) {
    const [expense, setExpense] = useState({
        title: '',
        category: '',
        amount: '',
    })
    const handleFormSubmit = (e) => {
        e.preventDefault();

        if (!expense.title || !expense.category || !expense.amount) return;

        setExpenses((prevState) => [
            ...prevState,
            { ...expense, id: crypto.randomUUID() },
        ]);

        setTotalExpense((prevState) => prevState + Number(expense.amount));

        setExpense({
            title: '',
            category: '',
            amount: '',
        });
    };
    return (
        <form className="mt-[5%]" onSubmit={handleFormSubmit}>
            <div className="flex flex-col">
                <label htmlFor="title">Title</label>
                <input type="text" name="title" value={expense.title} onChange={(e) => setExpense((prevState) => ({ ...prevState, title: e.target.value }))} placeholder="Enter Title" className="border-1 w-[60%] p-1" />
            </div>
            <div className="flex flex-col mt-[2%]">
                <label htmlFor="category">Category</label>
                <select name="category" value={expense.category} onChange={(e) => setExpense((prevState) => ({ ...prevState, category: e.target.value }))} id="category" className="border-1 w-[60%] p-1">
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
                <input type="text" name="amount" id="" value={expense.amount} onChange={(e) => setExpense((prevState) => ({ ...prevState, amount: e.target.value }))} placeholder="Enter Amount" className="border-1 w-[60%] p-1" />
            </div>
            <div className="w-[60%] mt-[2%]">
                <button className="w-full p-2 bg-gray-400 cursor-pointer">Add Expense</button>
            </div>
        </form>

    )
}
export default ExpenseForm;