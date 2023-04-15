const emailValidation = (value) => {
    const re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    return !re.test(value);
}

const nameValidation = (value) => {
    const re = /^[a-zA-Z].+ [a-zA-Z].+$/;
    return !re.test(value);
}

const phoneValidation = (value) => {
    const re = /^\([0-9]{2}\)\s([0-9])\s([0-9]{4}\-[0-9]{4})$/;
    return !re.test(value);
}

const passValidation = (value) => {
    const re = /^(?=^.{6,15}$)((?=.*\d)(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;
    return !re.test(value);
}

export {emailValidation, nameValidation, phoneValidation, passValidation};