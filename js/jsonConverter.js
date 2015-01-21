window.MouseJs = window.MouseJs || {};

window.MouseJs.JsonConverter = function() {
    return {
        toFormUrlEncoded: function(json) {
            if (!json || json.constructor !== Array) json = [json];

            var urlEncoded = json.reduce(function(previous, current, index, array) {
                return previous + current.Name + '=' + encodeURIComponent(current.Value).replace(/%20/g, '+') + '&';
            }, '');
            return urlEncoded.substring(0, urlEncoded.length - 1);
        }
    };
}();

