angular.module('templates-app', ['app/app/directives/list-object/_tpl/list-object.tpl.html', 'app/home/_tpl/home.tpl.html']);

angular.module("app/app/directives/list-object/_tpl/list-object.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("app/app/directives/list-object/_tpl/list-object.tpl.html",
    "<div class=\"list-object\"><ul class=\"list-tiles\"><li><img src=\"assets/img/test/01_iron_man_2.1.0.1-dev.1.jpg\" alt=\"Iron Man 2\"><div class=\"object-info\"><h3>Iron Man 2</h3><p>With the world now aware of his dual life as the armored superhero Iron Man, billionaire inventor Tony...</p><a href=\"http://www.imdb.com/title/tt1228705/\" title=\"Iron Man 2\">More info</a></div></li><li><img src=\"assets/img/test/02_the_last_airbender.1.0.1-dev.1.jpg\" alt=\"The Last Airbender\"><div class=\"object-info\"><h3>The Last Airbender</h3><p>The story follows the adventures of Aang, a young successor to a long line of Avatars, who must put his...</p><a href=\"http://www.imdb.com/title/tt0938283/\" title=\"Iron Man 2\">More info</a></div></li><li><img src=\"assets/img/test/03_tron_legacy.1.0.1-dev.1.jpg\" alt=\"Tron Legacy\"><div class=\"object-info\"><h3>Tron Legacy</h3><p>Sam Flynn, the tech-savvy 27-year-old son of Kevin Flynn, looks into his father's disappearance and finds...</p><a href=\"http://www.imdb.com/title/tt1104001/\" title=\"Tron Legacy\">More info</a></div></li></ul></div>");
}]);

angular.module("app/home/_tpl/home.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("app/home/_tpl/home.tpl.html",
    "<div id=\"home\"><list-object></list-object></div>");
}]);
