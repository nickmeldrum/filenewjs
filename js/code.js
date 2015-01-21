window.Mouse = window.Mouse || {};

window.Mouse.Display = function () {
    return {
        execute: function() {
            var dataset = [ { 'Label': 'Branch' }, { 'Label': 'Version' }, { 'Label': 'Version' } ];

            d3.select('body').insert('svg').attr('width', 500).attr('height', 300);
            d3.select('svg').selectAll('circle')
                .data(dataset)
                .enter()
                .append('circle')
                .attr('cx', function(d, i) { return (i * 50) + 50; })
                .attr('cy', 50)
                .attr('r', 20)
                .attr('fill', function(d) {
                    if (d.Label == 'Branch') return 'red';
                    else if (d.Label == 'Version') return 'purple';
                    else return 'gray';
                });
        }
    };
}();

window.Mouse.Ajax = function() {
    return {
        post: function (url, bodyJson, success, failure) {
            var r = new XMLHttpRequest(); 
            r.open('POST', url, true);
            // http://stackoverflow.com/questions/14146353/rest-api-get-post-using-jquery-ajax-to-get-node-using-neo4j-graph-database
            r.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
            r.setRequestHeader('Accept', undefined);
            r.onreadystatechange = function () {
                if (r.readyState != 4 || r.status != 200) return; 
                if (success) success(r);
            };
            r.send(window.Mouse.Ajax.BodyConverter.fromJsonToFormUrlEncoded(bodyJson));
       }
   };
}();

window.Mouse.Ajax.BodyConverter = function() {
    return {
        fromJsonToFormUrlEncoded: function(json) {
            if (!json || json.constructor !== Array) json = [json];

            var urlEncoded = json.reduce(function(previous, current, index, array) {
                return previous + current.Name + '=' + encodeURIComponent(current.Value).replace(/%20/g, '+') + '&';
            }, '');
            return urlEncoded.substring(0, urlEncoded.length - 1);
        }
    };
}();

window.Mouse.Program = function() {
    window.Mouse.Ajax.post('http://localhost:7474/db/data/cypher', [{Name: 'query', Value: 'match (n) return n;'}], function(d) {console.log(d)});
    window.Mouse.Display.execute();
}();

