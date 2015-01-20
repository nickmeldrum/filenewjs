window.Mouse = window.Mouse || {};

window.Mouse.Display = function () {
    var dataset = [ { "Label": "Branch" }, { "Label": "Version" }, { "Label": "Version" } ];

    d3.select("svg").selectAll("circle")
        .data(dataset)
        .enter()
        .append("circle")
        .attr("cx", function(d, i) { return (i * 50) + 50; })
        .attr("cy", 50)
        .attr("r", 20)
        .attr("fill", function(d) {
            if (d.Label == "Branch") return "red";
            else if (d.Label == "Version") return "purple";
            else return "gray";
        });
}();

