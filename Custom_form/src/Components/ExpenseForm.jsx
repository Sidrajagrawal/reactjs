import { useRef } from "react";
import { useState } from "react";
import Input from "./Input";
import Select from "./Select";
import Validation from "./Validation";

function ExpenseForm({ setExpenses, setTotalExpense }) {

    const [data, setData] = useState({
        title: "",
        category: "",
        amount: ""
    });

    const [error, setError] = useState({});

    const handleFormChange = (e) => {
        const { name, value } = e.target;
        setData((prev) => ({
            ...prev,
            [name]: value
        }))
    }
    const handleFormSubmit = (e) => {
        e.preventDefault();

        const ValidateResult = Validation(data);

        if (Object.keys(ValidateResult).length) {
            setError(ValidateResult);
            return;
        }

        setExpenses((prevState) => [
            ...prevState,
            {
                ...data,
                amount: Number(data.amount),
                id: crypto.randomUUID()
            }
        ]);

        setTotalExpense((prev) => prev + Number(data.amount));

        setData({
            title: "",
            category: "",
            amount: ""
        });

        setError({});
    };
    return (
        <form className="mt-[5%]" onSubmit={handleFormSubmit}>
            <Input type='text' label='Title' onChange={handleFormChange} value={data.title} name='title' placeholder='Enter Title' error={error.title} />
            <Select label='Category' error={error.category} onChange={handleFormChange} name='category' options={['Grocery', 'Clothes', 'Bills', 'Education', 'Medicine']} deflt='Select Category' value={data.category} />
            <Input type='text' label='Amount' error={error.amount} onChange={handleFormChange} value={data.amount} name='amount' placeholder='Enter amount' />
            <div className="w-[60%] mt-[2%]">
                <button className="w-full p-2 bg-gray-400 cursor-pointer">Add Expense</button>
            </div>
        </form>

    )
}
export default ExpenseForm;