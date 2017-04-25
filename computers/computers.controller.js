// import Model here (the model interacts with the database)

module.exports = {
	getComputerList: 	getComputerList,
	getComputerDetails: getComputerDetails,
	editComputer: 		editComputer,
	addNewComputer: 	addNewComputer,
	deleteComputer: 	deleteComputer
};

function getComputerList(req, res, next) {
	res.json([
		{
			id: 1,
			name: 'computer1'
		},
		{
			id: 2,
			name: 'computer2'
		},
		{
			id: 3,
			name: 'computer3'
		}
	])
}

function getComputerDetails(req, res, next) {
	res.json(
		{
			id: 1,
			name: 'computer1'
		}
	)
}

function editComputer(req, res, next) {
	res.json('success')	
} 

function addNewComputer(req, res, next) {
	res.json('success')
}

function deleteComputer(req, res, next) {
	res.json('success')
}
