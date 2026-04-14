function Select({ label, onChange, name, options = [], value, deflt, error }) {
    return (
        <div className="flex flex-col mt-[2%]">
            <label htmlFor={name}>{label}</label>
            <select
                id={name}
                name={name}
                value={value}
                onChange={onChange}
                className="border w-[60%] p-1"
            >
                <option value="" hidden>{deflt}</option>
                {options.map((opt, idx) => (
                    <option key={idx} value={opt}>
                        {opt}
                    </option>
                ))}
            </select>
            {error && <p className="text-red-500 text-sm">{error}</p>}
        </div>
    );
}

export default Select;