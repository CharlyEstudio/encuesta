export function minLengthValidation(inputData, minLength) {
    const {value} = inputData;
    removeClassError(inputData);

    if (value.length >= minLength) {
        return true;
    }

    addClassError(inputData);
    return false;
}

export function emailValidation(inputData) {
    const {value} = inputData;
    const emailValid = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    removeClassError(inputData);

    if (emailValid.test(value)) {
        return true;
    }

    addClassError(inputData);
    return false;
}

export function addClassError(inputData) {
    inputData.classList.add('error');
}

export function removeClassError(inputData) {
    inputData.classList.remove('error');
}
