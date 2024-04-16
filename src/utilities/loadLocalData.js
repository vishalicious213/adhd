async function loadLocalData(name) {
    console.log(name)
    if (localStorage.getItem(name)) {
        let savedData = await JSON.parse(localStorage.getItem(name))
        console.log("real data", localStorage.getItem(name))
        return savedData
    } else {
        console.log("No saved data found and loaded")
        return {}
    }
}

export default loadLocalData