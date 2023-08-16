export const dateToStr = date => {
	let month = date.getMonth() + 1
	let year = date.getFullYear()
	let day = date.getDate()
	let dateStr = `${month}/${day}/${year}`
	return dateStr
}
