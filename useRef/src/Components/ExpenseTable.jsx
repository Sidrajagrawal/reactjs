import React from "react";

function ExpenseTable({ expenses, totalExpense }) {
    return (

        <table className="border border-gray-400 border-collapse text-gray-800">

            <thead>
                <tr className="bg-gray-200">
                    <th className="border border-gray-400 px-6 py-2 text-left">
                        Title
                    </th>

                    <th className="border border-gray-400 px-6 py-2 text-left">
                        <select className="bg-transparent outline-none">
                            <option value="">All</option>
                            <option value="grocery">Grocery</option>
                            <option value="clothes">Clothes</option>
                            <option value="bills">Bills</option>
                            <option value="education">Education</option>
                            <option value="medicine">Medicine</option>
                        </select>
                    </th>

                    <th className="border border-gray-400 px-6 py-2">
                        <div className="flex items-center gap-2">
                            <span>Amount</span>

                            <div className="flex flex-col leading-none">
                                {/* Up Arrow */}
                                <span className="text-xs cursor-pointer">↑</span>
                                {/* Down Arrow */}
                                <span className="text-xs cursor-pointer">↓</span>
                            </div>
                        </div>
                    </th>
                </tr>
            </thead>

            <tbody>
                {expenses && expenses.map((expense, idx) => {
                    return (
                        <tr key={expense.id}>
                            <td className="border border-gray-400 px-6 py-2">{expense.title}</td>
                            <td className="border border-gray-400 px-6 py-2">{expense.category}</td>
                            <td className="border border-gray-400 px-6 py-2">₹ {expense.amount}</td>
                        </tr>

                    );
                })}
                <tr className="font-semibold">
                    <td className="border border-gray-400 px-6 py-2">Total</td>
                    <td className="border border-gray-400 px-6 py-2"></td>
                    <th>₹{totalExpense}</th>
                </tr>
            </tbody>
        </table>
    );
}

export default ExpenseTable;


