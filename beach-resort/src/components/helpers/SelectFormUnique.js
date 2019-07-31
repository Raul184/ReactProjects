//Unique Values for Select Input
const uniqueValue = (rooms, value) => {
	return [...new Set(rooms.map( room => room[value]))]
} 

export default uniqueValue;