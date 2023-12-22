const checkEmpty = (value1, value2, value3, value4) => {
    if (value1.trim().length === 0 || value2.trim().length === 0 || value3.trim().length === 0 || value4.trim().length === 0) {
        return true;
    } else {
        return false;
    }  
}

export default checkEmpty;