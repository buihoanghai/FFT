angular.module('templates-app', ['app/home/_tpl/home.tpl.html']);

angular.module("app/home/_tpl/home.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("app/home/_tpl/home.tpl.html",
    "<div id=\"home\"></div>");
}]);
