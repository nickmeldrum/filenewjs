(function() {
    window.MouseJs.Ajax.post('http://localhost:7474/db/data/cypher', [{Name: 'query', Value: 'match (n) return n;'}], function(d) {console.log(d)});
    window.MouseJs.Display.execute();
})();

