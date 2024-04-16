const loadLocalData = ({ name }) => {
    if (localStorage.getItem(name)) {
        let savedData = JSON.parse(localStorage.getItem(name))
        console.log("real data", localStorage.getItem(name))
        return savedData
    } else {
        return "No data saved"
    }
}

export default loadLocalData