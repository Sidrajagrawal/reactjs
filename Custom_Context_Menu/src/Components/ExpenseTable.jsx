import React, { useState } from "react";
import { UseFilter } from "./hooks/UseFilter";
import ContextMenu from "./ContextMenu";

function ExpenseTable({ expenses, totalExpense, setExpenses, setExpense, setShowEditBtn, setEditId }) {
    const [filteredData, setQuery] = UseFilter(expenses, (expense) => expense.category);
    const [menuPosition, setMenuPosition] = useState({});
    const [rowId, setRowId] = useState('');

    const handleContextMenu = (e, id) => {
        e.preventDefault();
        setRowId(id);
        setMenuPosition({ left: e.clientX, top: e.clientY });
    }

    return (
        <>
            <ContextMenu
                menuPosition={menuPosition}
                setMenuPosition={setMenuPosition}
                setExpenses={setExpenses}
                rowId={rowId}
                setExpense={setExpense}
                expenses={expenses}
                setShowEditBtn={setShowEditBtn}
                setEditId={setEditId} 
            />
            <table className="border border-gray-400 border-collapse text-gray-800" onClick={() => setMenuPosition({})}>
                <thead>
                    <tr className="bg-gray-200">
                        <th className="border border-gray-400 px-6 py-2 text-left">
                            Title
                        </th>

                        <th className="border border-gray-400 px-6 py-2 text-left">
                            <select className="bg-transparent outline-none" onChange={(e) => setQuery(e.target.value)}>
                                <option value="">All</option>
                                <option value="Grocery">Grocery</option>
                                <option value="Clothes">Clothes</option>
                                <option value="Bills">Bills</option>
                                <option value="Education">Education</option>
                                <option value="Medicine">Medicine</option>
                            </select>
                        </th>

                        <th className="border border-gray-400 px-6 py-2">
                            <div className="flex items-center gap-2">
                                <span>Amount</span>

                                <div className="flex flex-col leading-none">
                                    <span className="text-xs cursor-pointer">↑</span>
                                    <span className="text-xs cursor-pointer">↓</span>
                                </div>
                            </div>
                        </th>
                    </tr>
                </thead>

                <tbody>
                    {filteredData && filteredData.map((expense, idx) => {
                        return (
                            <tr key={expense.id} onContextMenu={(e) => handleContextMenu(e, expense.id)}>
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
        </>
    );
}

export default ExpenseTable;