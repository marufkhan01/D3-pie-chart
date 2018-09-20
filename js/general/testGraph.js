
function testGraph(){

    var canvas = d3.select("body")
        .append("svg")
        .attr("width", 800)
        .attr("height", 800);

    var circle = canvas.append("circle")
        .attr("cx", 50)
        .attr("cy", 50)
        .attr("r", 50)
        .attr("fill", "red");
}