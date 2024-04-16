export const save = (name, data) => {
    console.log("SAVE TO LOCALSTORAGE", name, data)
    localStorage.setItem(name, JSON.stringify(data))
}

export const load = (name) => {
    console.log("LOAD FROM LOCALSTORAGE", name)
}