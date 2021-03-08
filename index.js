let employee = {
    name: "Jim",
    streetAddress: "1 Smith St",
};


function updateEmployeeWithKeyAndValue(emp,key,value) {
    return Object.assign({...emp},{[key]:value});
}

function destructivelyUpdateEmployeeWithKeyAndValue (emp,key,value) {
    emp[key] = value;
    return emp;
}


function destructivelyDeleteFromEmployeeByKey(emp,key) {
    delete emp[key];
    return emp;
}

function deleteFromEmployeeByKey(emp,key) {
    return destructivelyDeleteFromEmployeeByKey({...emp},key);
}