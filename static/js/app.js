// from data.js
var tableData = data;

var button = d3.select("#filter-btn");

button.on("click", function() {

    // clear table if data already there
    var tbody = d3.select("tbody");
    tbody.html("");

    var searchTypeElement = d3.select("#searchType");
    var searchType = searchTypeElement.property("value");
    
    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value");

    tableData.forEach((sighting) => {

        // check if this object meets search criteria
        if (
            ( (searchType == "datetime") && (sighting.datetime == inputValue) ) ||
            ( (searchType == "city") && (sighting.city == inputValue) ) ||
            ( (searchType == "state") && (sighting.state == inputValue) ) ||
            ( (searchType == "country") && (sighting.country == inputValue) ) ||
            ( (searchType == "shape") && (sighting.shape == inputValue) )
         ) {         

            // if so, add to table html
            var row = tbody.append("tr");
            Object.entries(sighting).forEach(([key, value]) => {
                var cell = row.append("td");
                cell.text(value);
            });
        }
    });
});
