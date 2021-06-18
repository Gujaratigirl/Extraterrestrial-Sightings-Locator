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
    //Select column placeholder for date
    var dateInfo = d3.select(".table-head-date");
    //remove any children from the list -CLEAR old data
    dateInfo.html("");
    dateArray.forEach(row => dateInfo.append("li").text(row));

    var cityArray = filteredData.map(row => row.city);
    var cityInfo = d3.select(".table-head-city");
    cityInfo.html("");
    cityArray.forEach(row => cityInfo.append("li").text(row));

    var stateArray = filteredData.map(row => row.state);
    var stateInfo = d3.select(".table-head-state");
    stateInfo.html("");
    stateArray.forEach(row => stateInfo.append("li").text(row));

    var countryArray = filteredData.map(row => row.country);
    var countryInfo = d3.select(".table-head-country");
    countryInfo.html("");
    countryArray.forEach(row => countryInfo.append("li").text(row));

    var shapeArray = filteredData.map(row => row.shape);
    var shapeInfo = d3.select(".table-head-shape");
    shapeInfo.html("");
    shapeArray.forEach(row => shapeInfo.append("li").text(row));

    var durationArray = filteredData.map(row => row.durationMinutes);
    var durationInfo = d3.select(".table-head-duration");
    durationInfo.html("");
    durationArray.forEach(row => durationInfo.append("li").text(row));

    var commentsArray = filteredData.map(row => row.comments);
    var commentsInfo = d3.select(".table-head-comments");
    commentsInfo.html("");
    commentsArray.forEach(row => commentsInfo.append("li").text(row));

    console.log("End Code");
};
  