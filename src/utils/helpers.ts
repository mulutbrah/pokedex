const capitalize = (str: string) => {
    // Capitalize string logic
    if(str === undefined) return ''
    if(str.trim() === '') return ''

    return str.charAt(0).toUpperCase()+ str.slice(1)
};

export { capitalize }