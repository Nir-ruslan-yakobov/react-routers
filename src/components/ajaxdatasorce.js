const ajaxDataSorceGet = async (url) => {
    let data = await fetch(url)
    let parseData = await data.json()

    return parseData
}

export default { ajaxDataSorceGet }