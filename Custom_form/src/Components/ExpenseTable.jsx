import React, { useEffect, useState } from "react";

function ExpenseTable({ expenses, totalExpense }) {
    const [filteredData, setFilteredData] = useState([]);
    const [sortByCategory, setSortByCategory] = useState("");

    const sortByDescesnding = () => {
        const sorted = [...filteredData].sort((a, b) => b.amount - a.amount);
        setFilteredData(sorted);

    }
    const sortByAscending = () => {
        const sorted = [...filteredData].sort((a, b) => a.amount - b.amount);
        setFilteredData(sorted);
    }

    useEffect(() => {
        if (!sortByCategory) {
            setFilteredData(expenses);
        } else {
            const filtered = expenses.filter((data) => data.category.toLowerCase() === sortByCategory.toLowerCase())
            setFilteredData(filtered);
        }
    }, [expenses, sortByCategory]);

    return (

        <table className="border border-gray-400 border-collapse text-gray-800">

            <thead>
                <tr className="bg-gray-200">
                    <th className="border border-gray-400 px-6 py-2 text-left">
                        Title
                    </th>

                    <th className="border border-gray-400 px-6 py-2 text-left">
                        <select className="bg-transparent outline-none" onChange={(e) => setSortByCategory(e.target.value)} value={sortByCategory}>
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
                                <span className="text-xs cursor-pointer" onClick={sortByDescesnding}>↑</span>
                                <span className="text-xs cursor-pointer" onClick={sortByAscending}>↓</span>
                            </div>
                        </div>
                    </th>
                </tr>
            </thead>

            <tbody>
                {filteredData && filteredData.map((expense, idx) => {
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


