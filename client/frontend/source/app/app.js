angular.module('app', [
  'ui.router',
  'common.routeConfig',
  'app.home',
  'app.object',
  'templates-app',
  'templates-common',
  'ngSanitize'
]).config([
 function appConfig() {
   
}]).run();