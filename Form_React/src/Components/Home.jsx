import { useEffect, useState } from "react";
import ExpenseForm from "./ExpenseForm";
import ExpenseTable from "./ExpenseTable";
import expenseData from './expenseData.js'

function Home() {
    const [expenses, setExpenses] = useState(expenseData);
    const [totalExpense, setTotalExpense] = useState(0);

    useEffect(() => {
        const total = expenseData.reduce((acc, expense) => {
            return acc + expense.amount;
        }, 0);
        setTotalExpense(total);
    }, []);

    return (
        <div className="w-[90%] ml-[5%] flex">
            <div className="w-[50%] mt-[2%]">
                <h1 className="text-center text-3xl font-bold">Track Your Expense</h1>
                <ExpenseForm setExpenses={setExpenses} setTotalExpense={setTotalExpense} />
            </div>
            <div className="w-[50%] mt-[7%]">
                <ExpenseTable expenses={expenses} totalExpense={totalExpense} />
            </div>
        </div>
    )
}
export default Home;