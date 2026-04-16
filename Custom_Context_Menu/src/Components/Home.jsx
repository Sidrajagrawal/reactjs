import { useEffect, useState } from "react";
import ExpenseForm from "./ExpenseForm";
import ExpenseTable from "./ExpenseTable";
import expenseData from './expenseData.js'

function Home() {
    const [expenses, setExpenses] = useState(expenseData);
    const [totalExpense, setTotalExpense] = useState(0);
    const [showEditBtn, setShowEditBtn] = useState(false);
    const [editId, setEditId] = useState(null);

    const [expense, setExpense] = useState({
        title: '',
        category: '',
        amount: ''
    })

    useEffect(() => {
        const total = expenses.reduce((acc, expense) => {
            return acc + Number(expense.amount);
        }, 0);
        setTotalExpense(total);
    }, [expenses]);

    return (
        <div className="w-[90%] ml-[5%] flex">
            <div className="w-[50%] mt-[2%]">
                <h1 className="text-center text-3xl font-bold">Track Your Expense</h1>

                <ExpenseForm
                    setExpenses={setExpenses}
                    setExpense={setExpense}
                    expense={expense}
                    showEditBtn={showEditBtn}
                    editId={editId}
                    setEditId={setEditId}
                    setShowEditBtn={setShowEditBtn}
                />
            </div>
            <div className="w-[50%] mt-[7%]">
                <ExpenseTable
                    expenses={expenses}
                    totalExpense={totalExpense}
                    setExpenses={setExpenses}
                    setExpense={setExpense}
                    setShowEditBtn={setShowEditBtn}
                    setEditId={setEditId}
                />
            </div>
        </div>
    )
}
export default Home;