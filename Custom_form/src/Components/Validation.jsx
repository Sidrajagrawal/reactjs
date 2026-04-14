const ValidationConfig = {
    title: [
        {
            required: true,
            msg: "Title Filed is Required"
        },
        {
            minLen: 3,
            msg: "Minimum length of Title is 3"
        },
    ],
    category: [
        {
            required: true,
            msg: "Please Choice One Category"
        }
    ],
    amount: [
        {
            required: true,
            msg: "Please Enter the Amount"
        },
        {
            minAmount: 10,
            msg: "Minimum Amount Should be 10"
        }
    ]
}

const Validation = (data) => {
    const errData = {}
    Object.entries(data).forEach(([key, value]) => {
        ValidationConfig[key].some((rule) => {
            if (rule.required && !value) {
                errData[key] = rule.msg;
                return true;
            }
            if (rule.minLen && value.length < Number(rule.minLen)) {
                errData[key] = rule.msg;
                return true;
            }
            if (rule.minAmount && Number(value) < Number(rule.minAmount)) {
                errData[key] = rule.msg;
                return true;
            }
        })
    })
    return errData;
}
export default Validation;


