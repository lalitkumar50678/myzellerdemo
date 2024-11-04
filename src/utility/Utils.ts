

export const getFirstNameOfName=(name: string)=>{
    return name.split('')[0];
}

export const toCamelCase=(name: string)=> {
    return name.substring(0,1).toUpperCase() + name.substring(1,name.length).toLowerCase()
}
