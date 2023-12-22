const checkEmpty = (value1, value2, value3, value4) => {
    if (value1.trim().length === 0 || value2.trim().length === 0 || value3.trim().length === 0 || value4.trim().length === 0) {
        setEmpty(empty = true);
    } else {
        setEmpty(empty = false);
    }  
}

export default checkEmpty;