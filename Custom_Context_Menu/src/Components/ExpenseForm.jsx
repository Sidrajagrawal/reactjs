import { useState } from "react";

function ExpenseForm({ setExpenses, setExpense, expense, showEditBtn, editId, setEditId, setShowEditBtn }) {

    const handleFormSubmit = (e) => {
        e.preventDefault();

        if (!expense.title || !expense.category || !expense.amount) return;

        if (showEditBtn) {
            setExpenses((prevState) =>
                prevState.map((item) =>
                    item.id === editId
                        ? { ...item, ...expense }
                        : item
                )
            );
            setEditId(null);
            setShowEditBtn(false);
        } else {
            setExpenses((prevState) => [
                ...prevState,
                { ...expense, id: crypto.randomUUID() }
            ]);
        }

        setExpense({
            title: '',
            category: '',
            amount: ''
        });
    };
    return (
        <form className="mt-[5%]" onSubmit={handleFormSubmit}>
            <div className="flex flex-col">
                <label htmlFor="title">Title</label>
                <input onChange={(e) => setExpense((prev) => ({ ...prev, title: e.target.value }))} value={expense.title} type="text" name="title" placeholder="Enter Title" className="border-1 w-[60%] p-1" />
            </div>
            <div className="flex flex-col mt-[2%]">
                <label htmlFor="category">Category</label>
                <select name="category" value={expense.category} onChange={(e) =>
                    setExpense((prev) => ({ ...prev, category: e.target.value }))
                }
                    id="category" className="border-1 w-[60%] p-1">
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
                <input type="text" value={expense.amount} name="amount" id="" onChange={(e) =>
                    setExpense((prev) => ({ ...prev, amount: e.target.value }))
                } placeholder="Enter Amount" className="border-1 w-[60%] p-1" />
            </div>
            <div className="w-[60%] mt-[2%]">
                {
                    showEditBtn === false ? (
                        <button className="w-full p-2 bg-gray-400 cursor-pointer">Add Expense</button>

                    ) : (
                        <button className="w-full p-2 bg-gray-400 cursor-pointer">Edit Expense</button>

                    )
                }
            </div>
        </form>

    )
}
export default ExpenseForm;