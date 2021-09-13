export const convertDate = (date: Date | string, short: boolean = false): Date | string => {
    const day = new Date(date).getDate() < 10 ? "0" + new Date(date).getDate() : new Date(date).getDate()
    const month = new Date(date).getMonth() < 10 ? "0" + (new Date(date).getMonth() + 1) : (new Date(date).getMonth() + 1)
    const year = short ? (new Date(date).getFullYear()).toString().slice(2) : new Date(date).getFullYear()
    return (day + "." + month + "." + year)
}