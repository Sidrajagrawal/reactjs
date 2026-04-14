import { useRef } from "react";
import { useState } from "react";

function ExpenseForm({ setExpenses, setTotalExpense }) {
    const titleRef = useRef(null);
    const categoryRef = useRef(null);
    const amountRef = useRef(null);

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (!titleRef.current.value || !amountRef.current.value || !categoryRef.current.value) return;
        setExpenses((prevState) => [
            ...prevState,
            {
                title: titleRef.current.value,
                category: categoryRef.current.value,
                amount: amountRef.current.value,
                id: crypto.randomUUID()
            }
        ])

    };
    return (
        <form className="mt-[5%]" onSubmit={handleFormSubmit}>
            <div className="flex flex-col">
                <label htmlFor="title">Title</label>
                <input ref={titleRef} type="text" name="title" placeholder="Enter Title" className="border-1 w-[60%] p-1" />
            </div>
            <div className="flex flex-col mt-[2%]">
                <label htmlFor="category">Category</label>
                <select name="category" ref={categoryRef} id="category" className="border-1 w-[60%] p-1">
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
                <input type="text" name="amount" id="" ref={amountRef} placeholder="Enter Amount" className="border-1 w-[60%] p-1" />
            </div>
            <div className="w-[60%] mt-[2%]">
                <button className="w-full p-2 bg-gray-400 cursor-pointer">Add Expense</button>
            </div>
        </form>

    )
}
export default ExpenseForm;