window.MouseJs = window.MouseJs || {};

window.MouseJs.Ajax = function() {
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
            r.send(window.MouseJs.JsonConverter.toFormUrlEncoded(bodyJson));
       }
   };
}();

