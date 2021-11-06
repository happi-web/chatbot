d3.csv("comp.csv").then(function (data) {
  // console.log(data);

  var comp = data;

  var button = d3.select("#button");

  var form = d3.select("#form");

  button.on("click", runEnter);
  form.on("submit", runEnter);

  function runEnter() {
    d3.select("tbody").html("")
    d3.selectAll("p").classed('noresults', true).html("")
    d3.event.preventDefault();
    var inputElement = d3.select("#user-input");
    var inputValue = inputElement.property("value").toLowerCase().trim();

    if (inputValue.length < 2){
      d3.select("p").classed('noresults2', true).html("<center><strong>Please try using more than 5 characters to avoid too many results!</strong>")
      inputValue = "Something to give no results"
    }
    // var filteredData = comp.filter(comp => comp.roads.toLowerCase().trim().includes(inputValue));
    var filteredData = comp.filter(comp => comp.location.toLowerCase().trim().includes(inputValue));

    if (filteredData.length === 0 && inputValue !== "Something to give no results"){
      d3.select("p").classed('noresults', true).html("<center><strong>No results. Please check your spelling!</strong>")
    }
    output = _.sortBy(filteredData, 'avg_vote').reverse()

    for (var i = 0; i < filteredData.length; i++) {

      d3.select("tbody").insert("tr").html("</td>"+"<td>"+(output[i]['location'])+"</td>"  +"<td>" +(output[i]['roads'])+"</td>"+"<td>" +(output[i]['description'])+"</td>") }
  };
  window.resizeTo(screen.width,screen.height)


});