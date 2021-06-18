// from data.js
var tableData = data;

// YOUR CODE HERE!

var button = d3.select("#filter-btn");
var form = d3.select("#form");
// var button = d3.select(".button");

button.on("click", runFilter);
form.on("submit",runFilter);

function runFilter() {

    // Prevent the page from refreshing
    d3.event.preventDefault();

     // Get the value property of the input element
    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value");

    // var inputValue = d3.event.target.value;
    

    // console.log("Filter button clicked");
    // console.log(inputValue);
    
    var filteredData = tableData.filter(row => row.datetime === inputValue);
    // console.log(filteredData);
    
    var dateArray = filteredData.map(row => row.datetime);
    // console.log(dateArray);
    var cityArray = filteredData.map(row => row.city);

    //Select column placeholder for date
    var dateInfo = d3.select(".table-head-date");
    //remove any children from the list -CLEAR old data
    dateInfo.html("");
    dateArray.forEach(row => dateInfo.append("li").text(row));


    var cityInfo = d3.select(".table-head-city");
    cityInfo.html("");

    cityArray.forEach(row => cityInfo.append("li").text(row));
    console.log("End Code");
};
  