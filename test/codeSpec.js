describe('Ajax Body Converter', function () {
    it('converts from json to form-url-encoded', function () {
        this.jsonResult = window.Mouse.Ajax.BodyConverter.fromJsonToFormUrlEncoded([{Name: 'name', Value: 'Nick'}]);
        expect(this.jsonResult).toEqual('name=Nick');
    });
});

