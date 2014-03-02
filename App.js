var demoApp = angular.module("demoApp", []);
demoApp.config(function ($routeProvider) {
            $routeProvider
            .when('/',
            {
                controller: 'Appcontroller',
                templateUrl: 'temp/view1.html'
            })
            .when('/',
            {
              controller: 'Appcontroller',
              templateUrl: 'temp/view2.html'
            })
            .otherwise({redirectTo: '/'});

});

demoApp.controller("Appcontroller", function($scope) {
                $scope.friends = [{name:'John', phone:'555-1276'},
                           {name:'Mary', phone:'800-BIG-MARY'},
                           {name:'Mike', phone:'555-4321'},
                           {name:'Adam', phone:'555-5678'},
                           {name:'Julie', phone:'555-8765'},
                           {name:'Juliette', phone:'555-5678'}];

                $scope.addFriend = function() {
                      $scope.friends.push(
                      {
                        name:$scope.newFriend.name,
                        city:$scope.newFriend.city
                      });                  
                };
});

//-=========for multiple controller to load

//var demoApp = angular.module("demoApp", []);
//var controllers = {};
//controllers.controller1 = function($scope) {
//                $scope.varialbeName = Array[]
//};
//controllers.controller2 = function($scope) {
//                $scope.varialbeName = Array[]
//};

//demoApp.controller();
