window.Mouse = window.Mouse || {};

window.Mouse.Display = function () {
    return {
        execute: function() {
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
        }
    };
}();

window.Mouse.Ajax = function() {
    return {
        post: function (url, body, success, failure) {
            var r = new XMLHttpRequest(); 
            r.open("POST", url, true);
            r.onreadystatechange = function () {
                if (r.readyState != 4 || r.status != 200) failure(r); 
                success(r);
            };
            r.send(body);
       },
       get: function (url, success, failure) {
            var r = new XMLHttpRequest(); 
            r.open("GET", url, true);
            r.onreadystatechange = function () {
                if (r.readyState != 4 || r.status != 200) failure(r); 
                success(r);
            };
            r.send();
       }
   };
}();

window.Mouse.Program = function() {
    window.Mouse.Display.execute();
}();

