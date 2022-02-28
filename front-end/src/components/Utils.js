export const dateParser = (num) => {
    let options = {hour: "2-digit", minute: "2-digit", year: "numeric", month: "short"}

    let timestamp = Date.parse(num)

    let date = new Date(timestamp).toLocaleDateString('en-En', options)
    
    return date.toString()
}
