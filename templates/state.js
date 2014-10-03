/**
 * @name <%= fileName %>.state
 */
angular.module('<%= moduleName %>.state', [
    'ui.router',
    '<%= moduleName %>.state'
])
    .config(function($stateProvider) {
        $stateProvider
            .state('<%= moduleName %>', {
                controller: '<%= pascalCaseName %>Ctrl as <%= pascalCaseName %>Ctrl',
                templateUrl: '<%= templatePath %>/<%= name %>.tpl.html'
            });
    });
