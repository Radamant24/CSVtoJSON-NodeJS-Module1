const path = require("path")
const fs = require("fs")
const csv = require("csvtojson")

const csvFilePath='customer-data.csv'
var ObjectJSON = []

csv()
.fromFile(csvFilePath)
.on('json',(jsonObj)=>{
    ObjectJSON.push(jsonObj)
})
.on('done',(error)=>{
	if (error) { return error}
	fs.writeFile('jsonparsed.json', JSON.stringify(ObjectJSON), (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
    });
    console.log('end')
})