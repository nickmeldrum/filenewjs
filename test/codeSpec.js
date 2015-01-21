describe('Ajax Body Converter', function () {
    it('converts from json to form-url-encoded', function () {
        this.jsonResult = window.Mouse.Ajax.BodyConverter.fromJsonToFormUrlEncoded([{Name: 'name', Value: 'Nick'}]);
        expect(this.jsonResult).toEqual('name=Nick');
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

