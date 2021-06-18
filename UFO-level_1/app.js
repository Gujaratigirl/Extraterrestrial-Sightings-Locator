// from data.js
var tableData = data;

// YOUR CODE HERE!

var button = d3.select("#filter-btn");
var form = d3.select("#form");

button.on("click", runFilter);
form.on("submit",runFilter);

function runFilter() {

    // Prevent the page from refreshing
    d3.event.preventDefault();

     // Get the value property of the input element
    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value");

    
    var filteredData = tableData.filter(row => row.datetime === inputValue);
    // console.log(filteredData);
    
    var dateArray = filteredData.map(row => row.datetime);
    // // console.log(dateArray);
    // //Select column placeholder for date
    buildTable(filteredData)
};

function buildTable(data){
    var tbody = d3.select("tbody");
    tbody.html("")
    // //remove any children from the list -CLEAR old data
    // dateInfo.html("");
    data.forEach(row => {
        var tr = tbody.append("tr");
        console.log(row)
        Object.values(row).forEach((value)=> {
            tr.append("td").text(value);

        })
        // dateInfo.append("tr").append("td").text(row)
    });

} 

buildTable(tableData);