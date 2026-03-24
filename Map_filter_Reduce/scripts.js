// Map 
// const months = ['January', 'Feburary', 'March', 'April', 'May', 'June']
// const newArray = months.map((month, idx, array) => {
//     console.log(idx + 1, month);
//     return month
// })
// console.log(newArray);

const users = [
    {
        UserID: '1',
        Username: "Sid",
        UserAddress: "Vrindavan",
        UserPhone: "7999391879"
    },
    {
        UserID: '2',
        Username: "Ram",
        UserAddress: "Ayodhya",
        UserPhone: "9899391879"
    },
    {
        UserID: '3',
        Username: "Shyam",
        UserAddress: "Vrindavan",
        UserPhone: "9792398879"
    },
    {
        UserID: '4',
        Username: "Shiv",
        UserAddress: "Himalaya",
        UserPhone: "8769391870"
    },
]

// const allUserName = users.map((obj, idx) => {
//     console.log(obj);
//     return obj.Username
// })
// console.log(allUserName);



// Filter
// const VrindvanUsers = users.filter((obj, idx, arr) => {
//     return obj.UserAddress === 'Vrindavan' 
// })
// console.log(VrindvanUsers);

// Reduce
const nums = [1, 1, 2, 1, 10, 1];

// For checking only
// const result = nums.reduce((accumulator, num, idx) => {
//     console.log(num);
// })

const TotalSum = nums.reduce((accumulator, num, idx) => {
    return accumulator + num
}, 0)  // initial value of accumulator
console.log(TotalSum);

const TotalMul = nums.reduce((accumulator, num, idx) => {
    return accumulator * num
}, 1) // initial value of accumulator
console.log(TotalMul);
