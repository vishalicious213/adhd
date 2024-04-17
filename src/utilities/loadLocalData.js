async function loadLocalData(name) {
    if (localStorage.getItem(name)) {
        let savedData = await JSON.parse(localStorage.getItem(name))
        return savedData
    } else {
        return {}
    }
}

export default loadLocalData