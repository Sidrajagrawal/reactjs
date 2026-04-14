function Input({ label, onChange, name, placeholder, type, value, error }) {
    return (
        <div className='flex flex-col mt-[2%]'>
            <label htmlFor={label}>{label}</label>
            <input
                type={type}
                name={name}
                id={label}
                placeholder={placeholder}
                onChange={onChange}
                value={value}
                className="border w-[60%] p-1"
            />
            {error && <p className="text-red-500 text-sm">{error}</p>}
        </div>
    )
}
export default Input;