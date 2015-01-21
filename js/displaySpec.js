describe('Display', function() {
   it('creates 3 circles', function () {
       window.MouseJs.Display.execute();
       expect(document.getElementsByTagName('circle').length).toEqual(3);
   });
});

