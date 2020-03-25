const ajaxDataSorceGet = async (url) => {
    let data = await fetch(url)
    let parseData = await data.json()
    console.log(parseData)

    return parseData
}

export default { ajaxDataSorceGet }