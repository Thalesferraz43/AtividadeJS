db = {};

db.init = function(callback) {
    $.getJSON('JS/db.json', function(data) {
        db.data = data;
        if(callback) {
            callback();
        }
    });
}