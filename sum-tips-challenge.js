// write a function to calculate and return
// the total tips and then output the total

const tips = [5, 8, 13, 2, 14, 27, 9, 18]

function calculateTotalTips(arr) {
    let totalTip = 0
    for (let i = 0; i < arr.length; i++) {
        totalTip += arr[i]
    }
    return totalTip
}

console.log(calculateTotalTips(tips))