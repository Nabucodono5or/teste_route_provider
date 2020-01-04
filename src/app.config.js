function configRoute($routeProvider, $locationProvider) {
  $routeProvider
    .when("/home", {
      template: "<home></home>"
    })
    .when("/about", {
      template: "<about></about>"
    })
    .when("/", {
      redirectTo: "/home"
    })
    .otherwise({
      redirectTo: "/home"
    });

  $locationProvider.html5Mode(true);
}

export default configRoute;
