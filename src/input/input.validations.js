
export const validateNum = (num) => {
    console.log('inside validateNum');
    return num.length < 10 ? 'Invalid number' : 'Valid number';
}