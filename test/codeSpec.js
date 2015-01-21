describe('Ajax Body Converter', function () {
    it('converts from json to form-url-encoded', function () {
        this.jsonResult = window.Mouse.Ajax.BodyConverter.fromJsonToFormUrlEncoded([{Name: 'name', Value: 'Nick'}]);
        expect(this.jsonResult).toEqual('name=Nick');
    });

    it('converts from json with spaces in value to form-url-encoded', function () {
        this.jsonResult = window.Mouse.Ajax.BodyConverter.fromJsonToFormUrlEncoded([{Name: 'name', Value: 'Nick Meldrum'}]);
        expect(this.jsonResult).toEqual('name=Nick+Meldrum');
    });

    it('converts 2 json values to form-url-encoded', function () {
        this.jsonResult = window.Mouse.Ajax.BodyConverter.fromJsonToFormUrlEncoded([{Name: 'name', Value: 'Nick'}, {Name: 'age', Value: 21}]);
        expect(this.jsonResult).toEqual('name=Nick&age=21');
    });

    it('allows us to pass in a json object instead of an array when there is 1 value', function () {
        this.jsonResult = window.Mouse.Ajax.BodyConverter.fromJsonToFormUrlEncoded({Name: 'name', Value: 'Nick'});
        expect(this.jsonResult).toEqual('name=Nick');
    });
});

describe('Display', function() {
   it('creates 3 circles', function () {
       window.Mouse.Display.execute();
       expect(document.getElementsByTagName('circle').length).toEqual(3);
   });
});

