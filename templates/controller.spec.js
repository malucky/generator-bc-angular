describe('<%= pascalCaseName %>Ctrl', function () {
    var $scope,
        $controller,
        <%= pascalCaseName %>Ctrl;
    beforeEach(function () {
        module('<%= moduleName %>Ctrl');

        inject(function ($injector) {
            $scope = $injector.get('$rootScope').$new();
            $controller = $injector.get('$controller');
        });

        <%= pascalCaseName %>Ctrl = $controller('<%= pascalCaseName %>Ctrl', {
            $scope: $scope
        });

    });

    describe('dummy test', function () {
        it('should always return true', function () {
            expect(1).toEqual(1);
        });
    });
});
