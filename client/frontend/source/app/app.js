          angular.module('app', [
  'ui.router',
  'angular-gestures',
  'angularMoment',
  'pascalprecht.translate',

  'app.home',
  'app.object',
  'templates-app',
  'templates-common',
  'ngSanitize',
  'pascalprecht.translate',  
  'textAngular',

  'common.routeConfig',
  'common.window-resize-listener',
  'common.kitCookies',
  'common.translateHighlight',
  'LocalStorageModule'
]).config([
  'localStorageServiceProvider',
  'hammerDefaultOptsProvider',
  'common.translateHighlight.translateHighlightServiceProvider',
  '$provide',
 function appConfig(localStorageServiceProvider, hammerDefaultOptsProvider, translateHighlightServiceProvider, $provide) {

   //- Configure local storage settings
   localStorageServiceProvider.setPrefix('dm');

   //- hammer.js configuration
   hammerDefaultOptsProvider.set({
     recognizers: [
       [Hammer.Pan, {}]
     ]
   });

   //- Configure translate highlight settings (Debugging)
   translateHighlightServiceProvider.addDomElements();

   //- Decorate $uiViewScroll to enable scroll to top
   $provide.decorator('$uiViewScroll', [
     '$delegate',
     function ($delegate) {
       return function (uiViewElement) {
         window.scrollTo(0, 0);
       };
     }
   ]);
 }]).run();